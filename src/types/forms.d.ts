export {};
// https://bobbyhadz.com/blog/typescript-make-types-global#declare-global-types-in-typescript

export declare global {
	interface FormSignIn {
		email: string;
		password: string;
	}
	interface FormSignUp extends FormSignIn {
		confirmPassword: string;
		birthday: string;
		fullName: string;
	}
}
