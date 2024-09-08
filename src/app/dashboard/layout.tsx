
export default async function RootLayout({
	children,
	user,
	admin,
}: Readonly<{
	children: React.ReactNode,
	user: React.ReactNode,
	admin: React.ReactNode,
}>) {
	// const user = await getUser(); // Fetch user at build time if applicable
	return (
		<>{false ? admin : user}</>
	);
}
