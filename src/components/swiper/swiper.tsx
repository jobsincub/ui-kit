'use client'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './swiper.module.scss'
// eslint-disable-next-line import/extensions
import 'swiper/css'
// eslint-disable-next-line import/extensions
import 'swiper/css/navigation'
// eslint-disable-next-line import/extensions
import 'swiper/css/pagination'
type Image = {
  id: string
  imageUrl: string
}

type ImagesSwiper = {
  images: Image[]
}

export const SwiperComponent = ({ images }: ImagesSwiper) => {
  return (
    // <div className={s.swiperWrapper}>
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        //navigation={{ nextEl: '.arrow_right', prevEl: '.arrow_left' }}
        navigation // standart navigation
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={5}
      >
        {images.map(image => (
          <SwiperSlide key={image.id}>
            <img alt={`Post Image ${image.id}`} src={image.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <button className={s.arrow_left} />
      <button className={s.arrow_right} /> */}
      <button className={'arrow_left'}>Left</button>
      <button className={'arrow_right'}>Right</button>
    </>
  )
}
