"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "@geist-ui/icons";
import { bannerData } from "@/libs/data";
import Image from "next/image";

export const SliderBanner: React.FC = () => {
	const navigationPrevRef = useRef<HTMLDivElement | null>(null);
	const navigationNextRef = useRef<HTMLDivElement | null>(null);
	const swiperRef = useRef<SwiperCore | null>(null);
	const timeInterval = useRef<ReturnType<typeof setInterval>>();
	const handlePrev = useCallback(() => {
		if (!swiperRef.current) return;
		swiperRef.current.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!swiperRef.current) return;
		swiperRef.current.slideNext();
	}, []);

	useEffect(() => {
		if (timeInterval.current) {
			clearInterval(timeInterval.current);
		}
		timeInterval.current = setInterval(() => {
			handleNext();
		}, 5000);
		return () => {
			timeInterval.current && clearInterval(timeInterval.current);
		};
	});
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={{
					nextEl: navigationNextRef.current,
					prevEl: navigationPrevRef.current,
				}}
				modules={[Pagination, Navigation]}
				className="h-full relative overflow-hidden rounded-md"
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
					setTimeout(() => {
						if (swiper.navigation) {
							swiper.navigation.destroy();
							swiper.navigation.init();
							swiper.navigation.update();
						}
					});
				}}
			>
				{bannerData.map((image, index) => (
					<SwiperSlide key={index} >
						<div className="relative h-full w-full">
							<Image
								alt="Welcome to the shop"
								className="object-cover"
								src={image}
								fill={true}
								sizes={"100%"}
							/>
						</div>
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
