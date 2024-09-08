export {};
// https://bobbyhadz.com/blog/typescript-make-types-global#declare-global-types-in-typescript

declare global {
	type SignInCookie = {
		accessToken: string;
		refreshToken: string;
		profile: string;
	};
	type SetCookie = {
		name: string;
		value: string;
		expires?: number;
	};
	type GetCookie = {
		name: string;
	};
	interface IUser {
		_id: string;
		usr_slug: string;
		usr_name: string;
		usr_email: string;
		usr_avatar: string;
		usr_status: string;
	}
}
