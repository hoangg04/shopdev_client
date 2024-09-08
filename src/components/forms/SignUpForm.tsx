'use client'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'
import * as ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { signUpFields } from '@/libs/data';
import Link from 'next/link';

export default function SignUpForm() {
	const router = useRouter();
	const [error, setError] = React.useState<string | null>(null);
	const initialValues: FormSignUp = {
		email: '',
		password: '',
		confirmPassword: '',
		birthday: new Date().toISOString().slice(0, 10),
		fullName: '',
	};

	// Validation schema
	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email address').required('Email is required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password')], 'Passwords must match')
			.required('Confirm Password is required'),
		birthday: Yup.date().required('Birthday is required').nullable(),
		fullName: Yup.string().min(6, "Full name must be at least 6 characters").required('Full Name is required'),
	});

	const handleSubmit = async (values: FormSignUp) => {
		const response = await fetch("/api/auth/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
		const data: IResponse<ILogin> = await response.json()
		if (data?.metadata?.code === "x00001") {
			return router.push(`/profile`)
		}
		else {
			setError(data.message)
		}
	};

	return (
		<>
			<section>
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-dark md:text-2xl">
								Create an account
							</h1>
							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}
								onSubmit={handleSubmit}

							>
								{({
									handleChange,
									handleBlur,
									values,
									errors,
								}) => (
									<Form noValidate autoComplete="off">

										{
											signUpFields.map((field) => {
												return (
													<div key={field.name} className='mt-3'>
														<label className='block mb-2 text-sm font-medium text-[#674188] ' htmlFor={field.name}>{field.label}</label>
														<input className={`bg-gray-50 text-[#674188] rounded-lg focus:ring-primary-600 focus:border-primary-600 outline outline-1 block w-full p-2.5 ${errors[field.name as keyof FormSignUp] && "text-red-400 outline-red-400"}`}
															name={field.name}
															placeholder={field.placeholder}
															aria-label={field.name}
															onChange={handleChange}
															value={values[`${field.name as keyof FormSignUp}`]}
															onBlur={handleBlur}
															type={field.type}
															id={field.name}
														/>
														<span className='text-xs h-3 block text-red-500 mt-2'>
															{errors[field.name as keyof FormSignUp] ?? ""}
														</span>
													</div>
												)
											})
										}
										{error && <p className='text-red-400 text-sm mt-2 font-bold'>{error}</p>}
										<button type="submit" className='w-full bg-[#C8A1E0] text-white font-medium mt-3 rounded-lg text-md px-5 py-2.5 text-center'>
											Sign Up
										</button>
										<div className='mt-2'>
											<p className='text-sm text-[#674188] text-center'>Already have an account? <Link href="/auth/signin" className='text-[#C8A1E0]'>Sign In</Link></p>
										</div>
										<div className='text-center mt-2'>
											<Link href="/auth/signup" className='text-[#C8A1E0] text-sm'>Forgot password</Link>
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
}


