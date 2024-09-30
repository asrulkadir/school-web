"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";

export default function Home() {
  const dataSlide = [
    {
      title: "Slide 1",
      color: "#f00",
    },
    {
      title: "Slide 2",
      color: "#0f0",
    },
    {
      title: "Slide 3",
      color: "#00f",
    },
    {
      title: "Slide 4",
      color: "#ff0",
    },
    {
      title: "Slide 5",
      color: "#0ff",
    },
    {
      title: "Slide 6",
      color: "#f0f",
    },
    {
      title: "Slide 7",
      color: "#f80",
    },
    {
      title: "Slide 8",
      color: "#808",
    },
    {
      title: "Slide 9",
      color: "#880",
    },
  ];
  return (
    <div>
      <section className="h-[calc(100vh-4rem)]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full w-full"
        >
          {dataSlide.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://picsum.photos/1920/1080?random=${index})`,
              }}
            >
              <h1 className="text-4xl text-white drop-shadow-lg">
                {slide.title}
              </h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* section for profil school, include history, vission and mission */}
      <section className="container mx-auto mt-8">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
          <h3 className="text-xl font-semibold">Profil Singkat Sekolah</h3>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies, elit id aliquam ultricies, odio odio ultricies elit.
          </p>

          <div className="grid grid-cols-1 gap-4 rounded-lg bg-white p-4 dark:bg-gray-800 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <h3 className="text-center text-xl font-semibold">Visi</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ultricies, elit id aliquam ultricies, odio odio ultricies elit.
              </p>
            </div>
            <div>
              <h3 className="text-center text-xl font-semibold">Misi</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ultricies, elit id aliquam ultricies, odio odio ultricies elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section for school facility */}
      <section className="container mx-auto mt-8">
        <h2 className="text-center text-3xl font-bold">Fasilitas Sekolah</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
            <Image
              src="https://picsum.photos/200/200?random=1"
              alt="Service 1"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold">Fasilitas 1</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ultricies, elit id aliquam ultricies, odio odio ultricies elit.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
            <Image
              src="https://picsum.photos/200/200?random=2"
              alt="Service 2"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold">Fasilitas 2</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ultricies, elit id aliquam ultricies, odio odio ultricies elit.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
            <Image
              src="https://picsum.photos/200/200?random=3"
              alt="Service 3"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold">Fasilitas 3</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ultricies, elit id
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="mt-4">Lihat Semua Fasilitas</Button>
        </div>
      </section>

      {/* section for teacher and staff */}
      <section className="container mx-auto mt-8">
        <h2 className="text-center text-3xl font-bold">Guru dan Staff</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
            <Image
              src="https://picsum.photos/200/200?random=1"
              alt="Service 1"
              width={200}
              height={200}
              className="rounded-full"
            />
            <h3 className="text-xl font-semibold">Guru 1</h3>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
            <Image
              src="https://picsum.photos/200/200?random=2"
              alt="Service 2"
              width={200}
              height={200}
              className="rounded-full"
            />
            <h3 className="text-xl font-semibold">Guru 2</h3>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
            <Image
              src="https://picsum.photos/200/200?random=3"
              alt="Service 3"
              width={200}
              height={200}
              className="rounded-full"
            />
            <h3 className="text-xl font-semibold">Guru 3</h3>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="mt-4">Lihat Semua Guru dan Staff</Button>
        </div>
      </section>

      {/* News and arcticles */}
      <section>
        <div className="container mx-auto mt-8">
          <h2 className="mt-8 text-center text-3xl font-bold">
            Berita dan Artikel
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
              <Image
                src="https://picsum.photos/200/200?random=1"
                alt="Service 1"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold">Berita 1</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ultricies, elit id aliquam ultricies, odio odio ultricies elit.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
              <Image
                src="https://picsum.photos/200/200?random=2"
                alt="Service 2"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold">Berita 2</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ultricies, elit id aliquam ultricies, odio odio ultricies elit.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
              <Image
                src="https://picsum.photos/200/200?random=3"
                alt="Service 3"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold">Berita 3</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ultricies, elit id aliquam ultricies, odio odio ultricies elit.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="mt-4">Lihat Semua Berita dan Artikel</Button>
        </div>
      </section>
    </div>
  );
}
