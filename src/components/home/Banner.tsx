"use client";
import React, { useEffect, useState } from "react";
import { SliderBanner } from "./Slider/SliderBanner";
import Image from "next/image";

export const Banner: React.FC = () => {
	return (
		<section className="grid grid-cols-12 grid-rows-10 md:grid-rows-8 gap-4 mt-[60px] h-[300px]">
			<div className="col-span-12 row-span-6 md:col-span-8 md:row-span-8 h-full">
				<div className="h-full overflow-hidden relative">
					<SliderBanner />
				</div>
			</div>
			<div className="relative col-span-6 row-span-4 row-start-7 md:col-span-4 md:row-span-4 md:col-start-9 rounded-md overflow-hidden">
				<Image
					alt="Welcome to the shop"
					src={"/assets/banners/banner3.jpg"}
					fill={true}
					sizes={"100%"}
				/>
			</div>
			<div className="relative col-span-6 row-span-4 col-start-7 row-start-7 md:col-span-4 md:row-span-4 md:col-start-9 md:row-start-5 rounded-md overflow-hidden">
				<Image
					alt="Welcome to the shop"
					src={"/assets/banners/banner4.jpg"}
					fill={true}
					sizes={"100%"}
				/>
			</div>
		</section>
	);
};
