import React from 'react'
import Thumb1 from "@/assets/images/thumb1.jpg"
import Thumb2 from "@/assets/images/thumb2.jpg"
import Thumb3 from "@/assets/images/thumb3.jpg"
import Thumb4 from "@/assets/images/thumb4.jpg"
import Thumb5 from "@/assets/images/thumb5.jpg"
import Thumb6 from "@/assets/images/thumb6.jpg"
import PlayIcon from "@/assets/images/playicon.svg"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'
import BoxLayout from '../common/Box'


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
]

export default function VideoSection() {
    return (
        <BoxLayout className='m-auto'>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full mx-auto"
            >
                <CarouselContent>
                    {videos.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-fit flex">
                            <Link href={item.videoLink} target="_blank" className="bg-cover bg-center block bg-no-repeat min-h-[340px] content-center relative w-full" style={{ backgroundImage: `url(${item.thumbnail})` }}>
                                <img src={PlayIcon.src} className='w-16 m-auto' alt="" />
                                <span className='absolute bottom-4 left-6 text-primary-foreground font-medium text-xl'>{item.title}</span>
                            </Link>
                            {index < videos.length - 1 &&
                                <div className='w-6 h-full opacity-0'></div>
                            }
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselDots/>
                <CarouselPrevious className="hidden lg:block" />
                <CarouselNext className="hidden lg:block" />

            </Carousel>
        </BoxLayout>

    )
}
