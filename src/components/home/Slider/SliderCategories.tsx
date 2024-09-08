"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Navigation, Virtual, Grid } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { ChevronLeft, ChevronRight } from "@geist-ui/icons";

import Image from "next/image";
import Link from "next/link";

export const SliderCategories: React.FC<{ categories: ICategory[] }> = ({ categories }) => {
	const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);
	const navigationPrevRef = useRef<HTMLDivElement | null>(null);
	const navigationNextRef = useRef<HTMLDivElement | null>(null);
	const handlePrev = useCallback(() => {
		if (!swiperRef) return;
		swiperRef.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!swiperRef) return;
		swiperRef.slideNext();
	}, []);

	return (
		<>
			<Swiper
				slidesPerView={1}
				grid={{
					rows: 2,
				}}
				spaceBetween={10}
				breakpoints={{
					320: {
						slidesPerView: 2,
						grid: {
							rows: 2,
						},
					},
					540: {
						slidesPerView: 3,
						grid: {
							rows: 2,
						},
					},
					768: {
						slidesPerView: 5,
						grid: {
							rows: 2,
						},
					},
					1080: {
						slidesPerView: 8,
						grid: {
							rows: 2,
						},
					},
				}}
				navigation={{
					nextEl: navigationNextRef.current,
					prevEl: navigationPrevRef.current,
				}}
				modules={[Pagination, Navigation, Grid]}
				className="relative divide-x-1 h-[340px]"
				onSwiper={setSwiperRef}
			>
				{categories.map((category, index) => (
					<SwiperSlide key={category.cate_id}>
						<Link href={"/categories/" + category.cate_id}>
							<div className="flex w-full flex-col items-center justify-center hover:shadow-md h-[170px]">
								<div className="relative size-24 my-2">
									<Image
										alt="Welcome to the shop"
										className="object-cover"
										src={category.cate_image}
										fill={true}
										sizes={"100%"}
									/>
								</div>
								<div className="text-sm text-center flex-1 mt-auto">{category.cate_name}</div>
							</div>
						</Link>
					</SwiperSlide>
				))}
				<div
					ref={navigationPrevRef}
					onClick={handlePrev}
					className="flex items-center justify-center rounded-full size-10 hover:scale-95 hover:bg-gray-500 bg-gray-300 top-1/2 absolute left-2 -translate-y-1/2 z-50"
				>
					<ChevronLeft />
				</div>
				<div
					ref={navigationNextRef}
					onClick={handleNext}
					className="flex items-center justify-center rounded-full size-10 hover:scale-95 hover:bg-gray-500 bg-gray-300 top-1/2 absolute right-2 -translate-y-1/2 z-50"
				>
					<ChevronRight />
				</div>
			</Swiper>
		</>
	);
};
