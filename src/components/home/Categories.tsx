"use client";
import { SliderCategories } from "@/components/home/Slider/SliderCategories";
import { fetcher } from "@/libs/http";
import React, { useEffect, useState } from "react";

// const GridCategories: React.FC<{ categories: ICategory[] }> = ({ categories }) => {
// 	return (
// 		<section className="grid grid-cols-12 grid-rows-10 gap-4 mt-[60px]">
// 			{categories.map((category) => (
// 				<div
// 					key={category.cate_id}
// 					className="col-span-6 row-span-5 md:col-span-4 md:row-span-5 rounded-md overflow-hidden relative"
// 				>
// 					{category.cate_name}
// 					<div>
// 						<img
// 							src={category.cate_image}
// 							alt={category.cate_name}
// 							className="w-full h-full object-cover"
// 						/>
// 					</div>
// 				</div>
// 			))}
// 		</section>
// 	);
// };

export const Categories: React.FC = () => {
	const [categories, setCategories] = useState<ICategory[] | null>(null);
	const [error, setError] = useState<string | null>(null);
	useEffect(() => {
		(async () => {
			if (!categories) {
				const data = await fetcher<IResponse<ICategory[]>>({
					url: "/api/categories/root",
					options: {
						method: "GET",
						next: { tags: ["categories"] },
						cache:"force-cache"
					},
				});
				if (data.metadata.code === "x10006") {
					setCategories(data.metadata.data.categories);
				} else {
					setError(data.metadata.message);
				}
			}
		})();
	}, []);

	return (
		<>{error ? <div>{error}</div> : categories && (
			<section className="mt-10 shadow-sm bg-white p-3 rounded-md">
				<h2 className="text-md md:text-xl mb-4">Categories</h2>
				<SliderCategories categories={categories} />
			</section>
		)}</>
	);
};
