import Slider from "react-slick";
import { FeatureSectionItem } from "../FeatureSectionItem";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./FeatureSection.module.css";

export const FeatureSection = () => {
  const isDesktop = useMediaQuery(`(min-width: ${em(1028)})`);

  const settings = {
    dots: !isDesktop,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: !isDesktop,
    autoplaySpeed: 4000,
    swipe: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          swipe: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          swipe: true,
        },
      },
    ],
  };

  return (
    <Slider
      key={JSON.stringify(isDesktop)}
      className={classes["feacture-section"]}
      {...settings}
    >
      <FeatureSectionItem
        bgUrl="/caroucel/item_1.png"
        text="Muebles de Interiores"
      />
      <FeatureSectionItem
        bgUrl="/caroucel/item_2.png"
        text="Muebles de Exteriores"
      />
      <FeatureSectionItem
        bgUrl="/caroucel/item_3.png"
        text="Útiles del Hogar"
      />
      <FeatureSectionItem
        bgUrl="/caroucel/item_4.png"
        text="Diseño de Espacios"
      />
      <FeatureSectionItem bgUrl="/caroucel/item_5.png" text="Otros Productos" />
    </Slider>
  );
};
