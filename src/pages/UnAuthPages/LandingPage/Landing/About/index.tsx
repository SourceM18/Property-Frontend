import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import stylesLanding from '@pages//UnAuthPages/LandingPage/Landing/styles.module.scss'
import whatImg from '@pages/UnAuthPages/LandingPage/img/img1.jpg'
import whyImg from '@pages/UnAuthPages/LandingPage/img/img2.jpg'
import valueImg from '@pages/UnAuthPages/LandingPage/img/img3.jpg'
import valueIco from '@pages/UnAuthPages/LandingPage/img/value-01.svg'
import valueIco2 from '@pages/UnAuthPages/LandingPage/img/value-02.svg'
import whatIco from '@pages/UnAuthPages/LandingPage/img/what-01.svg'
import whatIco2 from '@pages/UnAuthPages/LandingPage/img/what-02.svg'
import whyIco from '@pages/UnAuthPages/LandingPage/img/why-01.svg'
import whyIco2 from '@pages/UnAuthPages/LandingPage/img/why-02.svg'
import AboutItem from '@pages/UnAuthPages/LandingPage/Landing/components/AboutsItem'

import styles from './styles.module.scss'

// import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css'

const About = (): JSX.Element => {
	return (
		<div id="about" className={stylesLanding.landingContainer}>
			<h2 className={stylesLanding.landingHeading}>About</h2>
			<div>
				{window.innerWidth <= 576 ? (
					<Swiper pagination={{ clickable: true }}>
						<SwiperSlide>
							<AboutItem
								ico={whatIco}
								heading="WHAT"
								text={
									'Here & Now - Rents Status in Hand \n Digitalise - Modern Bank Integration \n Convenience - Friendly Interface'
								}
								icons={whatIco2}
								img={whatImg}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<AboutItem
								revers
								ico={whyIco}
								heading="WHY"
								text={
									'Trust & Respect - Welcomed & Appreciated \n Advanced Tech - Secure & Robust \n Communication - Quick & Efficient'
								}
								icons={whyIco2}
								img={whyImg}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<AboutItem
								ico={valueIco}
								heading="VALUES"
								text={
									'Confidence & Self-Esteem - Community Drivers \n Unity & Cooperation - Growth Foundations \n Honesty & Equality - True Humanity'
								}
								icons={valueIco2}
								img={valueImg}
							/>
						</SwiperSlide>
					</Swiper>
				) : (
					<div className={styles.aboutContent}>
						<AboutItem
							ico={whatIco}
							heading="WHAT"
							text={
								'Here & Now - Rents Status in Hand \n Digitalise - Modern Bank Integration \n Convenience - Friendly Interface'
							}
							icons={whatIco2}
							img={whatImg}
						/>
						<AboutItem
							revers
							ico={whyIco}
							heading="WHY"
							text={
								'Trust & Respect - Welcomed & Appreciated \n Advanced Tech - Secure & Robust \n Communication - Quick & Efficient'
							}
							icons={whyIco2}
							img={whyImg}
						/>
						<AboutItem
							ico={valueIco}
							heading="VALUES"
							text={
								'Confidence & Self-Esteem - Community Drivers \n Unity & Cooperation - Growth Foundations \n Honesty & Equality - True Humanity'
							}
							icons={valueIco2}
							img={valueImg}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default About
