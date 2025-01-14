import React from 'react';
import Thumb1 from "@/assets/images/thumb1.jpg";
import Thumb2 from "@/assets/images/thumb2.jpg";
import Thumb3 from "@/assets/images/thumb3.jpg";
import Thumb4 from "@/assets/images/thumb4.jpg";
import Thumb5 from "@/assets/images/thumb5.jpg";
import Thumb6 from "@/assets/images/thumb6.jpg";
import PlayIcon from "@/assets/images/playicon.svg";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from 'next/link';

const videos = [
    {
        title: "Caregiver Karaoke",
        thumbnail: Thumb1.src,
        videoLink: "https://www.youtube.com/watch?v=KunmlDaaijU"
    },
    {
        title: "Caregiver Karaoke",
        thumbnail: Thumb2.src,
        videoLink: "https://www.youtube.com/watch?v=KunmlDaaijU"
    },
    {
        title: "Caregiver Karaoke",
        thumbnail: Thumb3.src,
        videoLink: "https://www.youtube.com/watch?v=KunmlDaaijU"
    },
    {
        title: "Caregiver Karaoke",
        thumbnail: Thumb4.src,
        videoLink: "https://www.youtube.com/watch?v=KunmlDaaijU"
    },
    {
        title: "Caregiver Karaoke",
        thumbnail: Thumb5.src,
        videoLink: "https://www.youtube.com/watch?v=KunmlDaaijU"
    },
    {
        title: "Caregiver Karaoke",
        thumbnail: Thumb6.src,
        videoLink: "https://www.youtube.com/watch?v=KunmlDaaijU"
    }
];

export default function VideoSection() {
    return (
        <div className='max-w-[90%] m-auto py-12'>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {videos.map((item, index) => (
                        <CarouselItem 
                            key={index} 
                            className="w-full sm:w-1/2 lg:w-1/3 p-4 h-fit">
                            <Link 
                                href={item.videoLink} 
                                target="_blank"  
                                className="bg-cover bg-center block bg-no-repeat min-h-[200px] sm:min-h-[280px] lg:min-h-[340px] content-center relative" 
                                style={{ backgroundImage: `url(${item.thumbnail})`}}>
                                <img 
                                    src={PlayIcon.src} 
                                    className='w-12 sm:w-16 absolute inset-0 m-auto' 
                                    alt="Play Video Icon" 
                                />
                                <span className='absolute bottom-4 left-4 text-primary-foreground font-medium text-sm sm:text-lg lg:text-xl'>
                                    {item.title}
                                </span>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:block" />
                <CarouselNext className="hidden sm:block" />
            </Carousel>
        </div>
    );
}
