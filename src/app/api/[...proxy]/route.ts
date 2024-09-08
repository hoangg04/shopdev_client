import { setCookie, setManyCookies } from "@/app/actions";
import { fetcher } from "@/libs/http";
import { encrypt, getExpiresOfToken } from "@/libs/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";
// export const dynamic = "force-static";
const sendRequest = async ({ url, options, body, query }: FetcherType): Promise<IResponse<any>> => {
	const headers = {
		"x-api-key":process.env.X_API_KEY,
	};
	options.headers = { ...options?.headers, ...headers };

	const params: FetcherType = {
		url,
		options,
	};
	if (body) params.body = body;
	if (query) params.query = query;
	const response : IResponse<any> = await fetcher({ ...params });
	return response;
};

export async function GET(req: NextRequest) {
	if (req?.url) {
		const index = req?.url.indexOf("api");
		if (index) {
			const path = req.url?.slice(index + 3);
			const response: IResponse<any> = await sendRequest({
				url: `${process.env.BACKEND_URL}${path}`,
				options: {
					method: "GET",
				},
				query: req.nextUrl.searchParams,
			});
			console.log("response", response);
			if (response.status === 200) {
				if (response?.metadata.code === "x00003") {
					setManyCookies([
						{
							name: "profile",
							value: await encrypt(response.metadata.data.user),
							expires: getExpiresOfToken(response.metadata.data.tokens.refreshToken),
						},
						{
							name: "accessToken",
							value: response.metadata.data.tokens.accessToken,
							expires: getExpiresOfToken(response.metadata.data.tokens.accessToken),
						},
						{
							name: "refreshToken",
							value: response.metadata.data.tokens.refreshToken,
							expires: getExpiresOfToken(response.metadata.data.tokens.refreshToken),
						},
					]);
				}
				return NextResponse.json(response);
			}

			return NextResponse.json({ status: 500, message: response.message });
		}
	}

	return NextResponse.json({ status: 403, message: "Bad request" });
}
export async function POST(req: NextRequest) {
	let body = undefined;
	try {
		body = await req.json();
	} catch (error) {}
	if (req?.url) {
		const userId = req.headers.get("x-client-id");
		const refreshToken = req.cookies.get("refreshToken");
		const authorization = req.headers.get("Authorization");
		const index = req?.url.indexOf("api");
		console.log("body", body);
		if (index) {
			const path = req.url?.slice(index + 3);
			const response: IResponse<any> = await sendRequest({
				url: `${process.env.BACKEND_URL}${path}`,
				options: {
					method: "POST",
					headers: {
						"x-client-id": userId,
						cookie: `${refreshToken?.name}=${refreshToken?.value}`,
						Authorization: authorization,
					},
				},
				body,
			});
			console.log("response", response);
			if (response.status === 200 || response.status === 201) {
				if (response?.metadata.code === "x00003" || response?.metadata.code === "x00001") {
					setManyCookies([
						{
							name: "profile",
							value: await encrypt(response.metadata.data.user),
							expires: getExpiresOfToken(response.metadata.data.tokens.refreshToken),
						},
						{
							name: "accessToken",
							value: response.metadata.data.tokens.accessToken,
							expires: getExpiresOfToken(response.metadata.data.tokens.accessToken),
						},
						{
							name: "refreshToken",
							value: response.metadata.data.tokens.refreshToken,
							expires: getExpiresOfToken(response.metadata.data.tokens.refreshToken),
						},
					]);
				}
				return NextResponse.json(response);
			}
			return NextResponse.json({ status: 500, message: response.message });
		}
	}
	return NextResponse.json({ status: 403, message: "Bad request" });
}
