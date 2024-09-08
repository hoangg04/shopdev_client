"use server";
import { fetcher } from "@/libs/http";
import { decrypt } from "@/libs/utils";
import { cookies } from "next/headers";
import { FormEvent } from "react";
import { metadata } from "./layout";

export const setCookie = ({ name, value, expires }: SetCookie) => {
	cookies().set({
		name,
		value,
		httpOnly: true,
		path: "/",
		secure: process.env.NODE_ENV !== "production" ? false : true,
		expires: expires ?? Date.now() + 5 * 1000,
	});
};

export const getCookie = async ({ name }: GetCookie) => {
	const cookie = cookies().get(name)?.value;
	return cookie ? cookie : undefined;
};

export const destroyCookie = ({ name }: GetCookie) => {
	cookies().delete(name);
};

export const logout = () => {
	cookies()
		.getAll()
		.forEach((cookie) => {
			cookies().delete(cookie.name);
		});
};

// export const isAuth = async (): Promise<boolean> => {
// 	const accessToken = await getCookie({ name: "access_token" });
// 	const isActiveToken = await fetcher({
// 		url: "/api/auth/check-token",
// 		options: {
// 			method: "GET",
// 			headers: {
// 				Authorization: `Bearer ${accessToken}`,
// 			},
// 		},
// 	});
// 	return accessToken && isActiveToken;
// };

export const signIn = async ({ profile, accessToken, refreshToken }: SignInCookie) => {
	setCookie({ name: "profile", value: profile });
	setCookie({ name: "access_token", value: accessToken });
	setCookie({ name: "refresh_token", value: refreshToken });
};

export const setManyCookies = async (cookies: SetCookie[]) => {
	cookies.forEach((cookie) => {
		setCookie({
			name: cookie.name,
			value: cookie.value,
			expires: cookie.expires,
		});
	});
};

export const getUser = async (): Promise<IUser | undefined> => {
	const profile = await getCookie({ name: "profile" });
	return profile && (await decrypt(profile));
};
