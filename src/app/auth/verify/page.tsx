export default function Page({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	const { email } = searchParams;
	return (<>
		<div className="w-full h-screen flex items-center justify-center">
			<div className='flex flex-col items-center justify-center h-screen bg-white max-w-[500px] max-h-[300px] mx-3 rounded-lg p-4'>
				<h1 className='text-3xl text-center text-[#674188]'>Verify your email</h1>
				<p className='text-center text-md text-[#674188] mt-5'>
					<span>We have sent an email to {email} with a link to verify your account</span>
					<br />
					<span className="text-sm text-black mt-2 block">If you do not receive the confirmation message within a few minutes of signing up, please check your Junk E-mail folder just in case the confirmation email got delivered there instead of your inbox</span>
				</p>
			</div>
		</div>
	</>
	)
}