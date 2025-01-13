import { Carousel } from "flowbite-react";
import Image from "next/image";
import IphoneCover from "@/app/assets/iphonex_spacegray.svg";

// Exporting the CarouselComponent function
export function CarouselComponent() {
  return (
    <aside className="h-[400px] relative " aria-labelledby="carousel-heading">
      <h2 id="carousel-heading" className="sr-only">Product Carousel</h2>
      <Carousel>
        {/* First slide of the carousel */}
        <div className="bg-gradient-to-r from-[#FF4858] to-[#8F65FF] w-full h-[400px]">
          <div className="container flex md:flex-row flex-col md:justify-between items-center">
            <div>
              {/* Title and description of the first slide */}
              <h1 className="font-bold text-h1">iPhone X</h1>
              <p className="text-[20px] max-w-100% md:max-w-[60%]">
                Lorem ipsum dolor, sit amet, repellat culpa quidem asperiores
                corrupti laboriosam est quod quis aspernatur iure obcaecati
                inventore error harum u
              </p>
              {/* Placeholder for a link (currently commented out) */}
              {/* <Link href={''} className="text-white">Learn More</Link> */}
            </div>
            <div>
              {/* Image of the iPhone cover */}
              <Image
                src={IphoneCover}
                className="w-[100%]"
                height={300}
                width={200}
                alt="iPhone X cover"
              />
            </div>
          </div>
        </div>
        {/* Second slide of the carousel */}
        <div className="bg-gradient-to-r from-[#FF4858] to-[#8F65FF] w-full h-[400px]">
          <div className="container flex md:flex-row flex-col md:justify-between items-center">
            <div className="">
              {/* Title and description of the second slide */}
              <h1 className="font-bold text-h1">iPhone X</h1>
              <p className="text-[20px] max-w-100% md:max-w-[60%]">
                Lorem ipsum dolor, sit amet, repellat culpa quidem asperiores
                corrupti laboriosam est quod quis aspernatur iure obcaecati
                inventore error harum u
              </p>
              {/* Placeholder for a link (currently commented out) */}
              {/* <Link href={''} className="text-white">Learn More</Link> */}
            </div>
            <div>
              {/* Image of the iPhone cover */}
              <Image
                src={IphoneCover}
                className="w-[100%]"
                height={410}
                width={210}
                alt="iPhone X cover"
              />
            </div>
          </div>
        </div>
      </Carousel>
    </aside>
  );
}
