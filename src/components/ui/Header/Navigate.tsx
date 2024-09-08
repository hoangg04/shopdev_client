import {
	touchCart,
	touchFavorite,
	touchNotification,
	touchProfile,
	touchSearch,
} from "@/libs/features/navigation/navigationSlice";
import { useAppDispatch, useAppSelector } from "@/libs/hooks";
import { Bell, Heart, Search, ShoppingBag } from "@geist-ui/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { UserMenu } from "./UserMenu";
import { usePathname } from "next/navigation";
export const Navigate: React.FC = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.user);
	const navigation = useAppSelector((state) => state.navigation);
	const isIgnorePage = ["/auth/signin", "/auth/signup"].includes(usePathname());
	return (
		<div className="flex items-center gap-2">
			<motion.button
				whileTap={{ scale: 0.95 }}
				onClick={() => dispatch(touchSearch())}
				className="flex items-center justify-center size-9 rounded-full hover:bg-slate-200 group md:hidden"
			>
				<Search className="size-6 stroke-2 group-hover:fill-purple-200 group-hover:stroke-1" />
			</motion.button>
			<motion.button
				whileTap={{ scale: 0.95 }}
				onClick={() => dispatch(touchNotification())}
				className="flex items-center justify-center size-9 rounded-full hover:bg-slate-200 group"
			>
				<Bell className="size-5 stroke-2 group-hover:fill-yellow-400 group-hover:stroke-1" />
			</motion.button>

			<motion.button
				whileTap={{ scale: 0.95 }}
				onClick={() => dispatch(touchFavorite())}
				className="flex items-center justify-center size-9 rounded-full hover:bg-slate-200 group"
			>
				<Heart className="size-5 stroke-2 group-hover:fill-red-500 group-hover:stroke-1" />
			</motion.button>
			<motion.button
				whileTap={{ scale: 0.95 }}
				onClick={() => dispatch(touchCart())}
				className="flex items-center justify-center size-9 rounded-full hover:bg-slate-200 relative group"
			>
				<ShoppingBag className="size-5 stroke-2 group-hover:fill-green-200" />
				<span className="absolute top-1 right-0 bg-yellow-400 text-white text-xs rounded-full px-1">
					4
				</span>
			</motion.button>
			<div
				className="relative flex size-10"
				onPointerEnter={() => {
					!isIgnorePage && !navigation.isTouchProfile && !navigation.isTouchSearch && dispatch(touchProfile());
				}}
				onPointerLeave={() => navigation.isTouchProfile && dispatch(touchProfile())}
			>
				<motion.button
					whileTap={{ scale: 0.95 }}
					onClick={() => !isIgnorePage && !navigation.isTouchProfile && dispatch(touchProfile())}
					className="border-red-400 border rounded-full relative size-10 overflow-hidden"
				>
					<Image
						alt="User profile picture"
						className="scale-[1.20] object-contain "
						src={"/assets/avatar.jpg"}
						fill={true}
						sizes={"100%"}
					/>
				</motion.button>
				<motion.div className="absolute top-full -translate-y-2 right-0 z-50 py-4">
					{!isIgnorePage && navigation.isTouchProfile && <UserMenu user={user} />}
				</motion.div>
			</div>
		</div>
	);
};
