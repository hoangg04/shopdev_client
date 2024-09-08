import { getCookie, getUser, logout } from "@/app/actions";
import { fetcher } from "@/libs/http";
import { getExpiresOfToken } from "@/libs/utils";
import { NextRequest, NextResponse } from "next/server";
import { metadata } from "./app/layout";
function setCookie({ response, cookies }: { response: NextResponse; cookies: SetCookie[] }) {
	cookies.forEach((cookie) => {
		response.cookies.set({
			name: cookie.name,
			value: cookie.value,
			httpOnly: true,
			secure: true,
			expires: cookie?.expires || Date.now() + 360 * 1000,
		});
	});
}
function deleteCookie({
	response,
	cookiesName,
}: {
	response: NextResponse;
	cookiesName: string[];
}) {
	cookiesName.forEach((cookie) => {
		response.cookies.delete(cookie);
	});
}
const IGNORE_PATHS = [
	"/api/auth/login",
	"/api/auth/signup",
	"/api/auth/refresh-token",
	"/api/product",
	"/api/categories/root"
];
export async function middleware(request: NextRequest) {
	const profile = await getUser();
	if (IGNORE_PATHS.includes(request.nextUrl.pathname)) {
		return NextResponse.next();
	}
	const accessToken = await getCookie({ name: "accessToken" });
	const refreshToken = await getCookie({ name: "refreshToken" });
	if (accessToken && profile) {
		const isActiveToken = await fetcher<IResponse<string>>({
			url: `${process.env.FRONTEND_URL}/api/auth/check-token`,
			options: {
				method: "POST",
				headers: {
					"x-client-id": profile._id,
					cookie: `refreshToken=${refreshToken}`,
					Authorization: `Bearer ${accessToken}`,
				},
			},
		});
		if (isActiveToken.metadata.data.status === "active") {
			return NextResponse.next();
		}
		const response = NextResponse.redirect(new URL("/", request.url));
		deleteCookie({ response, cookiesName: ["accessToken", "refreshToken", "profile"] });
		return response;
	}
	if (refreshToken && profile && !accessToken) {
		const res = await fetcher<IResponse<IToken>>({
			url: `${process.env.FRONTEND_URL}/api/auth/refresh-token`,
			options: {
				method: "POST",
				headers: {
					"x-client-id": profile._id,
					cookie: `refreshToken=${refreshToken}`,
				},
			},
		});
		if (res?.metadata?.code === "x00005") {
			const tokens = res.metadata.data.tokens;
			const response = NextResponse.next();
			setCookie({
				response,
				cookies: [
					{
						name: "accessToken",
						value: tokens.accessToken,
						expires: getExpiresOfToken(tokens.accessToken),
					},
					{
						name: "refreshToken",
						value: tokens.refreshToken,
						expires: getExpiresOfToken(tokens.refreshToken),
					},
				],
			});

			return response;
		}
		const response = NextResponse.redirect(new URL("/", request.url));
		deleteCookie({ response, cookiesName: ["accessToken", "refreshToken", "profile"] });
		return response;
	}
	if (profile && !accessToken && !refreshToken) {
		request.cookies.clear();
		return NextResponse.redirect(new URL("/", request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: ["/api/:path*"],
};
