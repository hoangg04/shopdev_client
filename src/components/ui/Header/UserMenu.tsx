import Link from "next/link";
import React from "react";

const AuthMenu: React.FC<{ user: IUser & { logged: boolean } }> = ({ user }) => {
	return (
		<div className="bg-[#f2f0ea] shadow-lg divide-y rounded-lg w-44">
			<div className="px-4 py-3 text-sm text-gray-900 ">
				<div>{user.usr_name}</div>
				<div className="font-medium truncate">{user.usr_email}</div>
			</div>
			<ul className="py-2 text-sm">
				<li>
					<Link href="/user/profile" className="block px-4 py-2 hover:bg-gray-100">
						My Account
					</Link>
				</li>
				<li>
					<Link href="/user/purchase" className="block px-4 py-2 hover:bg-gray-100">
						My purchase
					</Link>
				</li>
				<li>
					<Link href="#" className="block px-4 py-2 hover:bg-gray-100">
						Sign out
					</Link>
				</li>
			</ul>
		</div>
	);
};
const NotAuthMenu: React.FC = () => {
	return (
		<div className="bg-gray-200 shadow-lg rounded-lg w-44 overflow-hidden">
			<ul className="overflow-hidden">
				<li>
					<Link href="/auth/signin" className="block px-4 py-2 hover:bg-white">
						Sign in
					</Link>
				</li>
				<li>
					<Link href="/auth/signup" className="block px-4 py-2 hover:bg-white">
						Sign up
					</Link>
				</li>
			</ul>
		</div>
	);
};

export const UserMenu: React.FC<{ user: (IUser & { logged: boolean }) | null }> = ({ user }) => {
	return <>{user && user.logged ? <AuthMenu user={user}></AuthMenu> : <NotAuthMenu />}</>;
};
