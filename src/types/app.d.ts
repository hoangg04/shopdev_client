export {};
// https://bobbyhadz.com/blog/typescript-make-types-global#declare-global-types-in-typescript

export declare global {
	interface Metadata<T> {
		code: string;
		status: number;
		message: string;
		data: T;
	}
	type ICategory = {
		categories: {
			cate_id: number;
			cate_name: string;
			cate_image: string;
			cate_parent: number;
		};
	};
	type ILogin = {
		user: {
			_id: string;
			usr_name: string;
			usr_email: string;
		};
		tokens: {
			accessToken: string;
			refreshToken: string;
		};
	};
	interface FetcherType {
		url: string;
		options?: any;
		body?: any;
		query?: any;
	}

	interface IResponse<T> {
		status: number;
		metadata: Metadata<T>;
		message: string;
	}

	type IToken = {
		tokens: {
			accessToken: string;
			refreshToken: string;
		};
	};
}
