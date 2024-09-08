"use client";
import { handleForgotPassword } from "@/app/auth/forgot-password/actions";
import React, { FormEvent, useRef, useState } from "react";

type StateError = {
	message: string;
	status: string;
};

export const ForgotForm: React.FC = () => {
	const [stateError, setStateError] = useState<StateError>(() => ({
		message: "",
		status: "",
	}));
	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget as HTMLFormElement);
		const email = formData.get("email") as string;
		if (!email) {
			setStateError({
				message: "Email is required",
				status: "error",
			});
			return;
		}
		const res: StateError = await handleForgotPassword(email);
		setStateError(res);
	};
	return (
		<section className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
			<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
				<div className="flex justify-center mb-4">
					<div className="bg-gray-200 text-gray-500 px-4 py-2 rounded-full">Shopdev</div>
				</div>
				<h2 className="text-2xl font-semibold text-center mb-6">Forgot password</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-2">
						<input
							name="email"
							type="email"
							placeholder="Email"
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
						/>
					</div>
					{stateError.message && (
						<span
							className={`text-xs mb-1 h-3 block ${
								stateError.status == "error" && "text-red-500"
							} ${stateError.status === "success" && "text-green-500"}`}
						>
							{stateError?.message}
						</span>
					)}
					<button
						type="submit"
						className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 mt-5"
					>
						Recover password
					</button>
				</form>
			</div>
		</section>
	);
};
