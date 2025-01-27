"use client"
import React from 'react'
import BoxLayout from '@/components/common/Box';
import Link from 'next/link';
import Img1 from "@/assets/images/service-hero.png";
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import MapImage from "@/assets/images/map.png";

//ICONS
import icon1 from "@/assets/images/icons/1.png";
import icon2 from "@/assets/images/icons/2.png";
import icon3 from "@/assets/images/icons/3.png";
import icon4 from "@/assets/images/icons/4.png";
import icon5 from "@/assets/images/icons/5.png";
import icon6 from "@/assets/images/icons/6.png";
import icon7 from "@/assets/images/icons/7.png";
import icon8 from "@/assets/images/icons/8.png";
import HereMapWithCircle from '@/components/common/Map';
import { locationsList } from '@/lib/locations-list';
import { slugify } from '@/lib/utils';

export default function page() {
    const { region, location } = useParams();
    const slidesToScroll = 1;
    const regionItem = locationsList.find((r) => slugify(r.region) == region);
    const locationItem = regionItem.locations.find((l) => slugify(l.name) == location);
    const cordinates = { lat: locationItem.lat, lng: locationItem.lng };

    const services = [
        {
            title: "Companionship",
            description:
                "Isolation is a leading cause of depression in seniors. Our carefully matched, trusted caregivers offer social interaction for physical and mental well-being.",
            link: "/services/companionship",
            icon: icon1,
        },
        {
            title: "Meal Preparation",
            description:
                "A nutritious diet comes with many health benefits. Our caregivers love to prepare delicious meals, including specific ethnic dishes if requested.",
            link: "/services/meal-preparation",
            icon: icon2,
        },
        {
            title: "Homemaking",
            description:
                "We offer light housekeeping services to help our clients with daily activities. This way, seniors can stay at home in a safe and clean environment.",
            link: "/services/homemaking",
            icon: icon3,
        },
        {
            title: "Home Nursing Care",
            description:
                "A nutritious diet comes with many health benefits. Our caregivers love to prepare delicious meals, including specific ethnic dishes if requested.",
            link: "/services/in-home-nursing-care",
            icon: icon4,
        },
        {
            title: "Personal Care",
            description:
                "Isolation is a leading cause of depression in seniors. Our carefully matched, trusted caregivers offer social interaction for physical and mental well-being.",
            link: "/services/personal-care",
            icon: icon5,
        },
        {
            title: "Caregiver Relief / Respite Care",
            description:
                "A nutritious diet comes with many health benefits. Our caregivers love to prepare delicious meals, including specific ethnic dishes if requested.",
            link: "/services/relief-respite-care",
            icon: icon6,
        },
        {
            title: "End-of-Life Care",
            description:
                "Everyone deserves comfort, quality of life, and respect for personal treatment decisions and cultural or spiritual concerns. We provide support—and family support—at home or in a care facility.",
            link: "/services/end-of-life-care",
            icon: icon7,
        },
        {
            title: "Around-the-Clock Care",
            description:
                "Whether it's 3 in the afternoon, or 3 in the middle of the night, we support clients who need care any time. Services can be scheduled daily, weekly, or monthly.",
            link: "/services/around-the-clock-care",
            icon: icon8,
        },
    ];


    return (
        <div>
            <div
                style={{ backgroundImage: `url(${Img1.src})` }}
                className={`bg-cover bg-center min-h-[45vh] lg:h-[80vh] overlay lg:content-center content-end`}
            >
                <BoxLayout className="flex items-center" >
                    <div className="w-full lg:w-1/2 py-12 px-4 lg:pt-28 lg:py-20 lg:px-0 space-y-4 lg:space-y-6">
                        <h1 className="text-primary text-4xl lg:text-6xl lg:mr-60">
                            Home Care Services in <span className='capitalize'>{location}</span>, ON
                        </h1>

                        <p>
                            At One-On-One, we go beyond home care. We believe seniors should have choice in everything they do. We match you or your loved one with the perfect caregiver, with care tailored to fit individual needs. We also provide 24/7 live support, providing you with peace of mind.
                        </p>

                        <div className='flex gap-4'>
                            <Button variant="secondary">Book a Free Caring Consult</Button>
                            <Link href="/careers">
                                <Button variant="secondary">Careers</Button>
                            </Link>
                        </div>
                    </div>
                </BoxLayout>
            </div>
            <div>
                <BoxLayout>
                    <div className='space-y-6 text-primary text-center py-10'>
                        <h2>One-On-One Services</h2>
                        <p>It's about caring, not just health care. That's why we're here to help get you back to doing the things you love. Whether it's a little help around the house with meal preparation or medication reminders, let us do the caring.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 gap-y-16 py-10'>
                        {services.map((service, i) => (
                            <div className='text-center text-primary space-y-2' key={i}>
                                <img src={service.icon.src} alt="" className='w-20 m-auto' />
                                <h3>{service.title}</h3>
                                <p className='text-base'>{service.description}</p>
                                <Link href={service.link} className='text-secondary inline-block mt-2 underline'>Learn more.</Link>
                            </div>
                        ))}
                    </div>
                </BoxLayout>
            </div>
            <div className='bg-secondary/10 flex gap-24 py-8'>
                <BoxLayout className='text-center space-y-16 text-primary'>
                    <h2 className='font-medium mx-6'>What people say about us</h2>
                    <Carousel className="max-w-[300px] lg:max-w-[660px] m-auto" opts={{ slidesToScroll: slidesToScroll }}>
                        <CarouselContent>
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
                            {
                                quote: "Overall, what she gets is care, honest-to-goodness care. I get the peace of mind of knowing that my mother is with a company that sincerely cares about her. They give you basic respect, dignity and the tender loving care that all of our parents want and that we want for our parents.",
                                author: "Andrea S",
                                designation: "Client's Daughter"
                            },
                            ].map((item, i) => (
                                <CarouselItem key={i} style={{ flexBasis: (1 / slidesToScroll) * 100 + "%" }}>
                                    <div className='space-y-4 lg:mx-20'>
                                        <FormatQuoteIcon />
                                        <p className='font-fancy'>{item.quote}</p>
                                        <div>
                                            <h4>{item.author}</h4>
                                            <h6 className='font-normal'>{item.designation}</h6>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))
                            }
                        </CarouselContent>
                        {/* <CarouselPrevious />
                        <CarouselNext /> */}
                    </Carousel>
                </BoxLayout>
            </div>
            <div>
                <div className='flex flex-col lg:flex-row'>
                    {/* Left Section */}
                    <div
                        className='lg:w-2/5 w-full h-60 lg:h-auto bg-cover z-10'
                    // style={{ backgroundImage: `url(${MapImage.src})` }}
                    >
                        <HereMapWithCircle cordinate={cordinates} />
                    </div>

                    {/* Right Section */}
                    <div className='bg-primary text-primary-foreground lg:w-2/3 w-full p-6 lg:p-16 space-y-12 lg:space-y-14'>
                        <div className='space-y-3'>
                            <h2 className='text-2xl lg:text-4xl font-normal md:font-medium'>
                                We're Local!
                            </h2>
                            <p className='text-lg lg:text-xl'>Our One-On-One office in <span className='capitalize'>{location}</span> is available to help 24/7.</p>
                        </div>
                        <div>
                            <p>Some of the communities we serve</p>
                            <ul className='grid grid-cols-2 max-w-[360px]'>
                                {[
                                    "Markham",
                                    "Peterborough",
                                    "Ancaster",
                                    "Chatham",
                                ].map((item) =>
                                    <span key={item} >• {item}</span>
                                )}
                            </ul>
                            <p className='mt-8 text-base'>To see other communities served by neighbouring branches, please click here.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-20'>

            </div>
        </div>
    )
}
