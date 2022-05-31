import React from 'react'

import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import './styles.module.css'

import bgSlide1 from '@pages/UnAuthPages/LandingPage/img/bg.jpg'
import bgSlide2 from '@pages/UnAuthPages/LandingPage/img/bg2.jpg'
import bgSlide3 from '@pages/UnAuthPages/LandingPage/img/bg3.jpg'

import MainItem from '@pages/UnAuthPages/LandingPage/Landing/components/MainBlock'

SwiperCore.use([Pagination, Autoplay])

const Main = (): JSX.Element => {
	return (
		<div id="main" className="mainWrapper">
			<Swiper pagination={{ clickable: true }} autoplay={{ delay: 7000, disableOnInteraction: false }}>
				<SwiperSlide>
					<MainItem
						mainHeading="Taking Rents Into Account"
						mainText="Providing landlords with modern tool to organise rent transactions"
						bgSlide={bgSlide1}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<MainItem
						mainHeading="Taking Rents Into Account"
						mainText="Changing the way landlords and tenants interact"
						bgSlide={bgSlide2}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<MainItem
						mainHeading="Taking Rents Into Account"
						mainText="Building reliable, valuable and convenient technology hub for global property industry"
						bgSlide={bgSlide3}
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Main
