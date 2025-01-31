"use client"
import React from 'react'
import BoxLayout from '@/components/common/Box'
import HeroSection from '@/components/common/SectionComponents'
import Img1 from "@/assets/images/philHero.jpg";
import Phil1 from "@/assets/images/phil1.jpg"
import Phil2 from "@/assets/images/phil2.jpg"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ImageCards from '@/components/common/ImageCard';
import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import CheckPoint from '@/components/common/CheckPoint';
import Thumb1 from "@/assets/images/thumb1.jpg"
import PlayIcon from "@/assets/images/playicon.svg"
import Link from 'next/link';
import CaringJournal from '@/components/services/CaringJournal';

import p1 from "@/assets/images/p1.jpg"
import p2 from "@/assets/images/p2.jpg"
import p3 from "@/assets/images/p3.jpg"
import p4 from "@/assets/images/p4.jpg"
import p5 from "@/assets/images/p5.jpg"


export default function page() {
    const slidesToScroll = 1;
    return (
        <div>
            <HeroSection
                heading="A Home Care Agency That Helps Seniors Do What They Love"
                description="From golf and swimming to pottery and music, happiness is about rediscovering the fun in life. We are the experts in Happier Aging."
                ctaDesc="Get connected immediately to our Care Team."
                backgroundImage={Img1.src}
            />
            <div className='bg-primary text-secondary-foreground py-12'>
                <BoxLayout>
                    <div className='lg:text-center mb-8 lg:mb-16'>
                        <h6 className='font-fancy'>IWhat is Happier Aging? It starts with one simple question...</h6>
                        <h1>What did you use to love doing that you no longer do?</h1>
                    </div>
                    <div className='lg:mx-32 grid grid-cols-1 lg:grid-cols-2'>
                        <img src={Phil1.src} alt={Phil1.src} className='max-h-[460px] w-full object-cover lg:ml-10' />
                        <img src={Phil2.src} alt={Phil2.src} className='hidden lg:inline-block max-h-[460px] w-full object-cover -ml-10 mt-32' />
                        <div className='mt-4 lg:-mt-28 lg:m-10'>
                            <h4>Happier Aging is One-On-One’s philosophy of care: for our clients, their families, our people and everyone we meet.</h4>
                        </div>
                    </div>
                    <hr className='my-8 opacity-50' />
                    <p className='lg:text-center lg:mx-32 text-base'>
                        At One-On-One, we want to change the perceptions of aging, We believe that getting older doesnt have to feel sad or helpless; instead, aging is something worth celebrating.
                        <br></br>
                        <br></br>
                        As Atul Gawande wrote in his book, Being Mortal, “Our ultimate goal, after all, is not a good death but a good life to the very end”
                        <br></br>
                        <br></br>
                        Through our principles of Choice, Belonging, Respect, Autonomy and Purpose, we live Happier Aging.
                    </p>
                </BoxLayout>
            </div>
            <div className='bg-secondary/10 flex gap-24 py-16'>
                <BoxLayout className="flex flex-col lg:flex-row gap-12">
                    {[{
                        quote: "Overall, what she gets is care, honest-to-goodness care. I get the peace of mind of knowing that my mother is with a company that sincerely cares about her. They give you basic respect, dignity and the tender loving care that all of our parents want and that we want for our parents.",
                        author: "Andrea S",
                        designation: "Client's Daughter"
                    },
                    {
                        quote: "Overall, what she gets is care, honest-to-goodness care. I get the peace of mind of knowing that my mother is with a company that sincerely cares about her. They give you basic respect, dignity and the tender loving care that all of our parents want and that we want for our parents.",
                        author: "Andrea S",
                        designation: "Client's Daughter"
                    },
                    ].map((item) => (
                        <div className='text-center mx-6 lg:mx-24'>
                            <FormatQuoteIcon />
                            <p className='font-fancy'>{item.quote}</p>
                            <h4 className='mt-8'>{item.author}</h4>
                            <h6 className='font-normal'>{item.designation}</h6>
                        </div>
                    ))
                    }
                </BoxLayout>
            </div>
            <div>
                <BoxLayout className="py-20 space-y-6" >
                    <h2 className='text-primary text-center'>Five Principles of Happier Aging™</h2>
                    <ImageCards
                        cardData={[
                            {
                                title: "Choice",
                                desc: "Doing what you want to do when you want to do it. The freedom to choose allows you to shape your life. You are empowered when you have choice.",
                                img: p1.src
                            },
                            {
                                title: "Purpose",
                                desc: "Having meaning in your life. Purpose comes when we have the opportunity to contribute meaningfully. It’s what motivates us to show up for ourselves and others",
                                img: p2.src
                            },
                            {
                                title: "Respect",
                                desc: "Showing care, concern and consideration for others, even when they are different from you. Respect allows us to feel comfortable being who we are. Its how we admire people, including ourselves.",
                                img: p3.src
                            },
                            {
                                title: "Autonomy",
                                desc: "Your right to make decisions for yourself free of outside influences. You may not control life’s circumstances but being the author of your life means deciding what you do with them.",
                                img: p4.src
                            },
                            {
                                title: "Belonging",
                                desc: "Accepting ourselves and others for who we are. When we belong, we have a greater sense of fulfillment and well-being. Belonging connects us to something bigger than ourselves.",
                                img: p5.src
                            },
                        ]
                        }
                    />
                </BoxLayout>
            </div>
            <div>
                <BoxLayout>
                    <h2 className='text-primary text-center'>Happier Aging™ in action</h2>
                    <p className='text-center'>Happier Aging™ has given seniors a chance to rekindle passions and interests while staying at home.</p>
                </BoxLayout>
                <div className='bg-primary/10'>
                    <BoxLayout className="py-12 my-6">
                        <Carousel className="w-full max-w-[72vw] lg:max-w-full m-auto" opts={{ slidesToScroll: slidesToScroll }}>
                            <CarouselContent>
                                {/* Items Arrys aayega  */}
                                {[
                                    {
                                        title: "Ms. Daisy's Bucket List",
                                        desc: "Care Designer Stephanie shares what our client, Ms. Daisy in her mid-80's who needs around-the-clock care, put on her bucket list... and you'll never guess what it is!",
                                        checkPoints: ["Travel & Adventure", "Play"],
                                        thumbnail: Thumb1.src,
                                        videoLink: "https://www.youtube.com/watch?v=KunmlDaaijU"
                                    },
                                    {
                                        title: "Ms. Daisy's Bucket List",
                                        desc: "Care Designer Stephanie shares what our client, Ms. Daisy in her mid-80's who needs around-the-clock care, put on her bucket list... and you'll never guess what it is!",
                                        checkPoints: ["Travel & Adventure", "Play"],
                                        thumbnail: Thumb1.src,
                                        videoLink: "https://www.youtube.com/watch?v=KunmlDaaijU"
                                    },
                                    {
                                        title: "Ms. Daisy's Bucket List",
                                        desc: "Care Designer Stephanie shares what our client, Ms. Daisy in her mid-80's who needs around-the-clock care, put on her bucket list... and you'll never guess what it is!",
                                        checkPoints: ["Travel & Adventure", "Play"],
                                        thumbnail: Thumb1.src,
                                        videoLink: "https://www.youtube.com/watch?v=KunmlDaaijU"
                                    },
                                ].map((item) => (
                                    <CarouselItem style={{ flexBasis: (1 / slidesToScroll) * 100 + "%" }}>
                                        <div className="flex flex-col lg:flex-row gap-4  lg:gap-20 items-center">
                                            <div className='space-y-10 order-2 lg:order-1'>
                                                <h2>{item.title}</h2>
                                                <p className='text-base'>{item.desc}</p>
                                                <div>
                                                    {item.checkPoints.map((point) => (
                                                        <CheckPoint text={point} textSize="text-sm" />
                                                    ))}
                                                </div>
                                            </div>
                                            <Link href={item.videoLink} target="_blank" className="bg-cover bg-center block bg-no-repeat  w-full min-h-[340px] content-center  order-1 lg:order-2 relative" style={{ backgroundImage: `url(${item.thumbnail})` }}>
                                                <img src={PlayIcon.src} className='w-16 m-auto' alt="" />
                                            </Link>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselDots/>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </BoxLayout>
                </div>
            </div>
            <CaringJournal/>
        </div>
    )
}
