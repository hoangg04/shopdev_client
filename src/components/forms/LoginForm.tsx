"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Form, Formik } from "formik";
import { signInFields } from "@/libs/data";
import * as Yup from "yup";
import { metadata } from "../../app/layout";
import { useAppDispatch } from "@/libs/hooks";
import { setStatusAuth } from "@/libs/features/users/userSlicer";
export const LoginForm: React.FC = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const initialValues: FormSignIn = {
		email: "",
		password: "",
	};

	// Validation schema
	const validationSchema = Yup.object({
		email: Yup.string().email("Invalid email address").required("Email is required"),
		password: Yup.string()
			.min(6, "Password must be at least 6 characters")
			.required("Password is required"),
	});

	const handleSubmit = async (values: FormSignIn): Promise<void> => {
		const response = await fetch("/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		});
		const data: IResponse<ILogin> = await response.json();
		if (data.status === 200) {
			if (data?.metadata?.code === "x00004") {
				router.push(`/auth/verify?email=${values.email}`);
			}
			if (data?.metadata?.code === "x00003") {
				router.push(`/profile`);
				dispatch(setStatusAuth(data.metadata.data))
			}
		}
	};
	return (
		<>
			<section>
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
						<div className="p-6">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-[#674188] md:text-2xl mb-6">
								Login
							</h1>
							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}
								onSubmit={handleSubmit}
							>
								{({ handleChange, handleBlur, values, errors }) => (
									<Form noValidate autoComplete="off">
										{signInFields.map((field) => {
											return (
												<div key={field.name} className="mt-3">
													<label
														className="block mb-2 text-sm font-medium text-[#674188] "
														htmlFor={field.name}
													>
														{field.label}
													</label>
													<input
														className="bg-gray-50 border border-gray-300 text-[#674188] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
														name={field.name}
														placeholder={field.placeholder}
														aria-label={field.name}
														onChange={handleChange}
														value={values[`${field.name as keyof FormSignIn}`]}
														onBlur={handleBlur}
														type={field.type}
														id={field.name}
													/>
													<span className="text-xs h-3 block text-red-500 mt-2">
														{errors[field.name as keyof FormSignIn] ?? ""}
													</span>
												</div>
											);
										})}

										<button
											type="submit"
											className="w-full bg-[#C8A1E0] mt-5 text-white font-medium rounded-lg text-md px-5 py-2.5 text-center"
										>
											Sign In
										</button>
										<div className="mt-2">
											<p className="text-sm text-[#674188] text-center">
												Don't have an account?{" "}
												<Link href="/auth/signup" className="text-[#C8A1E0]">
													Sign Up
												</Link>
											</p>
										</div>
										<div className="text-center mt-2">
											<Link href="/auth/forgot-password" className="text-[#C8A1E0] text-sm">
												Forgot password
											</Link>
										</div>
									</Form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
