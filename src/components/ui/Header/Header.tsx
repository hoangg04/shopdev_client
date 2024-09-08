"use client";
import { playWriteCubaFont } from "@/app/ui/font";
import Link from "next/link";
import { motion } from "framer-motion";
import { SearchInput } from "./SearchInput";
import { useAppDispatch, useAppSelector } from "@/libs/hooks";
import { Navigate } from "./Navigate";
import useWindow from "@/libs/hooks/useWindow";
import { touchSearch } from "@/libs/features/navigation/navigationSlice";
import { memo, useEffect } from "react";
export const Header: React.FC = memo(function Header() {
	const navigationTouch = useAppSelector((state) => state.navigation);
	
	const dispatch = useAppDispatch();
	const windowWidth = useWindow();
	useEffect(() => {
		if (windowWidth && windowWidth > 768 && navigationTouch.isTouchSearch) {
			dispatch(touchSearch());
		}
	}, [windowWidth, navigationTouch.isTouchSearch, dispatch]);
	const show = {
		opacity: 1,
		display: "block",
	};

	const hide = {
		opacity: 0,
		transitionEnd: {
			display: "none",
		},
	};
	return (
		<>
			<header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
				<div className="mx-auto px-4 py-2 flex items-center justify-between max-w-screen-xl xl:m-auto">
					<div className="flex items-center">
						<Link href="/" className={`${playWriteCubaFont.className} sm:text-xl text-md`}>
							Shopdev
						</Link>
					</div>
					<SearchInput isVisibleMdScreen={true} />
					<Navigate />
				</div>
				<motion.div animate={navigationTouch.isTouchSearch ? show : hide}>
					{navigationTouch.isTouchSearch && <SearchInput isVisibleMdScreen={false} />}
				</motion.div>
				
			</header>
		</>
	);
});
