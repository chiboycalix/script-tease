'use client'
import * as React from "react";

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GooglePartner from "@/assets/google.png";
import GoogleCloudPartner from "@/assets/google-cloud-partner.png";
import MetaPartner from "@/assets/meta.png";
import BestPlace from "@/assets/best-place.png";
import ClubPartner from "@/assets/Club-partner.png";
import ShopifyPartner from "@/assets/shopify-partner.png";
import AmazonPartner from "@/assets/amazon.png";
import MicrosoftPartner from "@/assets/microsoft-advertising-partner.png";

const sliderData = [
  {
    id: 1,
    img: GooglePartner,
  },
  {
    id: 2,
    img: MetaPartner,
  },
  {
    id: 3,
    img: BestPlace,
  },
  {
    id: 4,
    img: ClubPartner,
  },
  {
    id: 5,
    img: GoogleCloudPartner,
  },
  {
    id: 6,
    img: ShopifyPartner,
  },
  {
    id: 7,
    img: MicrosoftPartner,
  },
  {
    id: 8,
    img: AmazonPartner,
  },
];

const HomeSlider = () => {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="-ml-1">
        {sliderData.map((d, index) => (
          <CarouselItem key={index} className="basis-1/6 flex items-center">
            <Image src={d.img} className="w-40" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselNext />
    </Carousel>
  );
}
export default HomeSlider;