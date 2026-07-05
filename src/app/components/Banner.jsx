'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';


const slides = [
  {
    title: "Find & Book the Right Tutor Instantly",
    desc: "Browse tutors, check available time slots, and book sessions effortlessly with our modern booking platform.",
    btn: "Book Now",
    image: "https://i.ibb.co/nNSPGxf8/claude-star-conference-1410870-1920.jpg",
  },
  {
    title: "Efficient Scheduling for Better Learning",
    desc: "Manage appointments, track availability, and ensure smooth communication between students and tutors with MediQueue.",
    btn: "Explore Features",
    image: "https://i.ibb.co/WNgVw431/laj987-digital-grading-10006743-1920.jpg",
  },
  {
    title: "Smart Tutor Booking Made Easy",
    desc: "MediQueue simplifies tutor scheduling with real-time availability and secure booking.",
    btn: "Get Started",
    image: "https://i.ibb.co/MxSjKSsp/tylijura-classroom-10271300-1920.jpg",
  },
];

export default function Banner() {
  return (
    <div className="max-w-[95%] mx-auto m-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative aspect-square w-full h-full">

              {/* Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="w-full h-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Glow effects */}
              <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl top-[-120px] left-[-120px]" />
              <div className="absolute w-[500px] h-[500px] bg-black/20 rounded-full blur-3xl bottom-[-120px] right-[-120px]" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 text-white">

                <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg max-w-3xl">
                  {slide.title}
                </h1>

                <p className="mt-4 text-white/90 text-lg max-w-2xl">
                  {slide.desc}
                </p>

                <Link
                  href="/tutors"
                  className="mt-6 inline-block px-8 py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:scale-105 transition"
                >
                  {slide.btn}
                </Link>

              </div>

              {/* Floating shapes */}
              <div className="absolute top-20 left-20 w-6 h-6 bg-white/30 rounded-full animate-bounce" />
              <div className="absolute bottom-20 right-20 w-10 h-10 bg-white/20 rounded-full animate-pulse" />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}