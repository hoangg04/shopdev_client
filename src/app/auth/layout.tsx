export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode,

}>) {
	return (
		<div className='h-screen'>
			{children}
		</div>
	);
}