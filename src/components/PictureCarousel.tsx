import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CarouselProps {
  className?: string
  imageSrc: string[]
}

export function PictureCarousel({
  className,
  imageSrc = []
}: CarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className={`${className} 
        w-full max-w-7xl
        laptop:max-h-full
      `}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imageSrc.map((_, index) => (
          <CarouselItem key={index}>
            <div
              className={`'
                p-1
                laptop:min-w-[700px]
              `}
            >
              <Card className={cn(
                "border-0"
              )}>
                <CardContent className="relative aspect-square p-6 overflow-hidden">
                  <Image
                    src={imageSrc[index]}
                    alt="Logo"
                    fill
                    className="object-cover transition-all"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
