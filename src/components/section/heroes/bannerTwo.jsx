"use client";
import Image from "next/image";
import Link from "next/link";
import hero_2 from "@/assets/images/hero-2.jpg";
import hero_3 from "@/assets/images/hero-3.jpg";
import hero_vector from "@/assets/images/hero-vector-bg.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import hero_5 from "@/assets/images/hero-5.jpg";
import hero_6 from "@/assets/images/hero-6.jpg";
import hero_7 from "@/assets/images/hero-7.jpg";
import hero_8 from "@/assets/images/hero-8.jpg";
import hero_9 from "@/assets/images/hero-9.png";
import hero_10 from "@/assets/images/hero-10.png";
import hero_12 from "@/assets/images/hero-12.png";
import hero_11 from "@/assets/images/hero-11.png";
import hero_13 from "@/assets/images/hero-13.png";
import hero_14 from "@/assets/images/hero-14.png";

import hero_15 from "@/assets/images/hero-15.png";

import ButtonFill from "@/components/ui/buttons/buttonFill";
import ButtonOutline from "@/components/ui/buttons/buttonOutline";
import { useRef } from "react";
import RightArrow from "@/assets/icons/rightArrow";
import { staticBluarDataUrl } from "@/lib/staticBluarDataUrl";
import { Phone } from "lucide-react";

const bannerData = [
  {
    id: 1,
    title: "Don't Jail Bail!",
    heading:
      "<span class='text-primary-foreground'> Elegance </span> <span class='outline-text'> Redefined </span>",
    banner_img: hero_11,
  },
  {
    id: 2,
    title: "Real People Real Help",
    heading:
      "<span class='text-primary-foreground'> Elegance </span> <span class='outline-text'> Redefined </span>",
    banner_img: hero_10,
  },
  {
    id: 3,
    title: "Here when you need us.",
    heading:
      "<span class='text-primary-foreground'> Elegance </span> <span class='outline-text'> Redefined </span>",
    banner_img: hero_12,
  },
];
const bannerBottomContent = [
  {
    id: 1,
    banner_img: hero_13,
    title: "How Bail Works",
  },
  {
    id: 2,
    banner_img: hero_15,
    title: "Our Services",
  },
  {
    id: 3,
    banner_img: hero_14,
    title: "FAQs",
  },
];
const BannerTwo = () => {
  const swiperRef = useRef();
  const pagination = {
    clickable: true,
    el: ".hero-pagination",
    renderBullet: function (index, className) {
      return `<span class='${className} text-white translate-y-16 opacity-0 absolute h-0 leading-[90%] [font-size:_clamp(60px,10vw,150px)] font-extrabold lg:text-right'>${bannerData[index].title}</span>`;
    },
  };
  return (
    <section className="banner-two">
      <div className="grid grid-cols-2">
        {/* --------- Banner left side */}
        <div
          className="bg-primary pt-[136px] pb-[148px] bg-cover bg-no-repeat bg-right"
          style={{ backgroundImage: `url(${hero_vector.src})` }}
        >
          <div className="z-10 relative px-3 md:px-0 ">
            <div className="hero-pagination flex "></div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-end gap-5 xl:pr-10 pr-3 lg:mt-10 mt-5">
              <Link href={"/about-us"} className="mt-10 inline-block">
                <ButtonOutline
                  className={
                    "px-[35px] sm:py-2.5 py-2.5 border-secondary text-secondary-foreground after:bg-secondary hover:text-primary after:left-0"
                  }
                >
                  <span className="text-base">Our Process</span>
                </ButtonOutline>
              </Link>
              <Link
                href={"tel:+8055448888"}
                className="lg:mt-10 mt-2 inline-block"
              >
                <ButtonFill
                  className={
                    "px-[35px] sm:py-2.5 py-2.5 after:bg-secondary text-primary-foreground border-secondary hover:text-secondary-foreground"
                  }
                >
                  <span className="text-base flex items-center gap-2">
                    <Phone />
                    (805) 544-8888
                  </span>
                </ButtonFill>
              </Link>
            </div>
          </div>
        </div>
        {/* ------- Banner right side */}
        <div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={pagination}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 4000,
            }}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="h-full"
          >
            {bannerData.map(({ id, banner_img, heading }) => {
              return (
                <SwiperSlide key={id} className="relative">
                  <Image
                    src={banner_img}
                    loading="lazy"
                    placeholder="blur"
                    width={"auto"}
                    height={"auto"}
                    alt="bg image"
                    className="h-full object-cover"
                  />
                </SwiperSlide>
              );
            })}
            <div className="flex justify-between absolute right-0 bottom-0 z-40">
              {/* ------- Next and prev arrow */}
              <div className="flex flex-col sm:w-[90px] w-[70px] xl:h-[181px] h-[136px] ">
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className={`bg-primary text-secondary-foreground flex justify-center items-center h-1/2 `}
                >
                  {" "}
                  <RightArrow width={"35"} height={"22"} />{" "}
                </button>
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className={`bg-secondary text-primary-foreground flex justify-center items-center h-1/2 rotate-180`}
                >
                  {" "}
                  <RightArrow width={"35"} height={"22"} />{" "}
                </button>
              </div>
              {/* ------- Next and prev arrow */}
            </div>
          </Swiper>
        </div>
      </div>
      {/* ---------- banner bottom  */}
      <div className="grid lg:grid-cols-3 2sm:grid-cols-2">
        {bannerBottomContent.map(({ id, banner_img, title }) => {
          return (
            <div
              key={id}
              className='relative overflow-hidden after:contents-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-overlay '
            >
              <Image
                src={banner_img}
                loading="lazy"
                placeholder="blur"
                blurDataURL={staticBluarDataUrl}
                alt="banner-bottom-bg"
                width={780}
                height={408}
              />
              <h4 className="text-background 2xl:text-[82px] md:text-6xl text-5xl leading-120 font-extrabold absolute xl:left-12.5 md:left-9 sm:left-7 left-3 top-1/2 -translate-y-1/2 z-10">
                {title}
              </h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerTwo;
