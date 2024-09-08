"use client";

import { getUser } from "@/app/actions";
import { fetcher } from "@/libs/http";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const VerifyForm: React.FC<{ id: string }> = ({ id }) => {
	const router = useRouter();
	useEffect(() => {
		const verify = async () => {
			const response = await fetcher<IResponse<ILogin>>({
				url: `/api/auth/verify/${id}`,
				options: {
					method: "GET",
				},
			});
			if (response?.metadata?.code === "x00003") {
				router.push("/profile");
			} else {
				alert(response.message);
				router.push("/auth/signin");
			}
		};
		verify();
	}, []);

	return <></>;
};
