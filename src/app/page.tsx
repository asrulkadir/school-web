"use client";

import Image from "next/image";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import bgAnimation1 from "@/assets/lottie/bg-animation-1.json";
import bgAnimation2 from "@/assets/lottie/bg-animation-2.json";
import bgAnimation3 from "@/assets/lottie/bg-animation-3.json";
import Link from "next/link";

export default function Home() {
  const dataSlide = [
    {
      title: "Selamat datang di Sekolah",
      color: "#f00",
    },
    {
      title: "Selamat datang di Sekolah Slide 2",
      color: "#0f0",
    },
    {
      title: "Selamat datang di Sekolah Slide 3",
      color: "#00f",
    },
    {
      title: "Selamat datang di Sekolah Slide 4",
      color: "#ff0",
    },
    {
      title: "Selamat datang di Sekolah Slide 5",
      color: "#0ff",
    },
    {
      title: "Selamat datang di Sekolah Slide 6",
      color: "#f0f",
    },
    {
      title: "Selamat datang di Sekolah Slide 7",
      color: "#f80",
    },
    {
      title: "Selamat datang di Sekolah Slide 8",
      color: "#808",
    },
    {
      title: "Selamat datang di Sekolah Slide 9",
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
              <h1 className="text-center text-6xl text-white drop-shadow-lg">
                {slide.title}
              </h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* section for profil school, include history, vission and mission */}
      <section className="relative py-8 lg:h-[50vh]">
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          <div className="container relative mx-auto">
            <Card className="flex flex-col items-center gap-4 rounded-b-[100px] p-4 shadow-lg">
              <CardContent>
                <h3 className="text-center text-3xl font-semibold leading-10">
                  Sekilas Tentang Sekolah
                </h3>
                <p className="text-center text-xl leading-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ultricies, elit id aliquam ultricies, odio odio
                  ultricies elit. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Ipsum repudiandae voluptates molestias
                  officiis, nam amet eum, perspiciatis autem enim delectus
                  laborum. Molestias eveniet quod nostrum, quos omnis voluptates
                  ea fuga.
                </p>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <Button className="mt-4">
                <Link href="/profile">Lihat Profil Sekolah</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* section for school facility */}
      <section className="relative w-full bg-white py-8 lg:h-[80vh]">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <div className="absolute left-0 top-0 flex w-full justify-between">
            <Lottie animationData={bgAnimation3} loop={true} />
            <Lottie animationData={bgAnimation3} loop={true} />
          </div>
          <div className="container relative mx-auto">
            <h2 className="text-center text-3xl font-bold text-secondary">
              Fasilitas Sekolah
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
              <Card className="flex flex-col items-center gap-4 rounded-lg p-4 shadow-lg">
                <Image
                  src="https://picsum.photos/200/200?random=1"
                  alt="Service 1"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold">Fasilitas 1</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ultricies, elit id aliquam ultricies, odio odio
                  ultricies elit.
                </p>
              </Card>
              <Card className="flex flex-col items-center gap-4 rounded-lg p-4 shadow-lg">
                <Image
                  src="https://picsum.photos/200/200?random=2"
                  alt="Service 2"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold">Fasilitas 2</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ultricies, elit id aliquam ultricies, odio odio
                  ultricies elit.
                </p>
              </Card>
              <Card className="flex flex-col items-center gap-4 rounded-lg p-4 shadow-lg">
                <Image
                  src="https://picsum.photos/200/200?random=3"
                  alt="Service 3"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold">Fasilitas 3</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ultricies, elit id
                </p>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button className="mt-4">
                <Link href="/facility">Lihat Semua Fasilitas</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* section for teacher and staff */}
      <section className="relative py-8 lg:h-[75vh]">
        <motion.div
          initial={{
            x: 200,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <div className="absolute left-0 top-0 flex w-full justify-between">
            <Lottie animationData={bgAnimation2} />
            <Lottie animationData={bgAnimation2} />
          </div>
          <div className="container relative mx-auto">
            <h2 className="text-center text-3xl font-bold">Guru dan Staff</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
              <Card className="flex flex-col items-center gap-4 rounded-lg bg-black bg-opacity-50 p-4 shadow-lg">
                <Image
                  src="https://picsum.photos/200/200?random=1"
                  alt="Service 1"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <h3 className="text-xl font-semibold">Guru 1</h3>
              </Card>
              <Card className="flex flex-col items-center gap-4 rounded-lg bg-black bg-opacity-50 p-4 shadow-lg">
                <Image
                  src="https://picsum.photos/200/200?random=2"
                  alt="Service 2"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <h3 className="text-xl font-semibold">Guru 2</h3>
              </Card>
              <Card className="flex flex-col items-center gap-4 rounded-lg bg-black bg-opacity-50 p-4 shadow-lg">
                <Image
                  src="https://picsum.photos/200/200?random=3"
                  alt="Service 3"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <h3 className="text-xl font-semibold">Guru 3</h3>
              </Card>
            </div>
            <div className="relative flex justify-center">
              <Button className="mt-4">
                <Link href="/staff">Lihat Semua Guru dan Staff</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* News and arcticles */}
      <section className="relative w-full bg-white py-8 lg:h-[80vh]">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: "easeIn",
            bounce: 0.5,
          }}
          viewport={{ once: true }}
        >
          <div className="absolute bottom-0 top-[-25px]">
            <Lottie animationData={bgAnimation1} loop={true} />
          </div>
          <div className="container relative mx-auto mt-8">
            <h2 className="mt-8 text-center text-3xl font-bold text-secondary">
              Berita dan Artikel
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
              <Card className="flex flex-col items-center gap-4 rounded-lg p-4 shadow-lg">
                <Image
                  src="https://picsum.photos/200/200?random=1"
                  alt="Service 1"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold">Berita 1</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ultricies, elit id aliquam ultricies, odio odio
                  ultricies elit.
                </p>
              </Card>
              <Card className="flex flex-col items-center gap-4 rounded-lg p-4 shadow-lg">
                <Image
                  src="https://picsum.photos/200/200?random=2"
                  alt="Service 2"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold">Berita 2</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ultricies, elit id aliquam ultricies, odio odio
                  ultricies elit.
                </p>
              </Card>
              <Card className="flex flex-col items-center gap-4 rounded-lg p-4 shadow-lg">
                <Image
                  src="https://picsum.photos/200/200?random=3"
                  alt="Service 3"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold">Berita 3</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ultricies, elit id aliquam ultricies, odio odio
                  ultricies elit.
                </p>
              </Card>
            </div>
          </div>
          <div className="relative flex justify-center">
            <Button className="mt-4">
              <Link href="/news">Lihat Semua Berita dan Artikel</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
