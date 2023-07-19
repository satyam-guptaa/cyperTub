import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TrendingCard from '../trendingCard/TrendingCard';

const CarouselNew = ({ data }) => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			navigation
			breakpoints={{
				0: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				1000: {
					slidesPerView: 3,
					spaceBetween: 50,
				},
			}}
			onSwiper={(swiper) => {}}
			onSlideChange={() => {}}
		>
			{data &&
				data.map((item) => (
					<SwiperSlide key={item.title}>
						<TrendingCard item={item} />
					</SwiperSlide>
				))}
		</Swiper>
	);
};

export default CarouselNew;
