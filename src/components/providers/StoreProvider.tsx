"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { createStore, AppStore } from "@/libs/store";
// import { UserState } from '@/lib/features/users/userSlicer';

export default function StoreProvider({
	children,
	user,
}: {
	children: React.ReactNode;
	user: IUser | undefined;
}) {
	const storeRef = useRef<AppStore>();
	if (!storeRef.current) {
		storeRef.current = user ? createStore({ user: { ...user, logged: true } }) : createStore();
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
}
