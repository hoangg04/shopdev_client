import { Search } from "@geist-ui/icons";
import React from "react";

export const SearchInput: React.FC<{ isVisibleMdScreen: boolean }> = ({ isVisibleMdScreen }) => {
	return (
		<div className={`flex-1 mx-4 justify-center flex ${(!isVisibleMdScreen) && "mb-5"}`}>
			<div
				className={`relative transition-all ${
					isVisibleMdScreen ? "w-0 md:max-w-[500px] md:w-full" : "max-w-md w-full"
				}`}
			>
				<input
					className={`rounded-md text-black focus:outline-none bg-gray-100 ${
						isVisibleMdScreen
							? "invisible md:visible md:w-full md:py-2 md:pl-11 md:pr-4"
							: "w-full py-2 pl-11 pr-4"
					}`}
					placeholder="Search"
					type="text"
				/>
				<span
					className={`absolute left-3 top-2 text-gray-400 ${
						isVisibleMdScreen ? "-z-40 md:z-auto hidden md:block" : "block md:hidden"
					}`}
				>
					<Search />
				</span>
			</div>
		</div>
	);
};

