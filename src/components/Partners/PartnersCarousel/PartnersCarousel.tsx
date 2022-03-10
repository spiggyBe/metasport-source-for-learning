import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { contentfulLoader } from "../../../utils/loader";

const PartnersSlider = styled(Slider)`
  margin-top: 15px;
`;

interface PartnersCarouselProps {
  direction: "right" | "left";
  slides: any;
}

const PartnersCarousel: React.FC<PartnersCarouselProps> = ({
  direction,
  slides,
}) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: direction === "left" ? -1 : 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    draggable: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <PartnersSlider {...settings}>
      {slides.map((slide, index) => (
        <Image
          loader={contentfulLoader}
          key={index}
          src={"https:" + slide.image}
          alt={slide.name}
          width={196}
          height={78}
        />
      ))}
    </PartnersSlider>
  );
};

export default PartnersCarousel;
