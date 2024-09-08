import { fetcher } from "@/libs/http";

export async function handleForgotPassword(email: string) {
	const response = await fetcher<IResponse<any>>({
		url: "/api/auth/forgot-password",
		options: {
			method: "POST",
		},
		body: {
			email,
		},
	});
	if (response?.metadata?.code === "x00006") {
		return {
			message:
				"We sent new password into your email.Please check your email and login with new password",
			status: "success",
		};
	}
	return {
		message: "Something went wrong",
		status: "error",
	};
}
