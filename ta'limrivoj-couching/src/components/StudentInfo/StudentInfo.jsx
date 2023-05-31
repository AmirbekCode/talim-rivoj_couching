import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import std from './std.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./studentInfo.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function StudentInfo() {
    return (
        <div className="StudentInfo">
            <span className="StudentInfoTitle">O'quvchilarimiz erishgan natijalar</span>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={std} alt="" /></SwiperSlide>
                <SwiperSlide><img src={std} alt="" /></SwiperSlide>
                <SwiperSlide><img src={std} alt="" /></SwiperSlide>
                <SwiperSlide><img src={std} alt="" /></SwiperSlide>
                <SwiperSlide><img src={std} alt="" /></SwiperSlide>
                <SwiperSlide><img src={std} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}