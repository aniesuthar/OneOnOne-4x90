"use client"
import React from 'react';
import Img1 from "@/assets/images/service-hero.png";
import sectionImg2 from "@/assets/images/serviceImg2.png";
import CallUsButton from '../common/CallUsButton';
import CaringJournal from './CaringJournal';
import { useParams, usePathname } from 'next/navigation';
import { servicesDatas } from '@/lib/servicesData';
import { cn, slugify } from '@/lib/utils';

export default function ServiceLayout() {

    const { service } = useParams();
    const serviceData = servicesDatas.find((item) => slugify(item.serviceName) == service).data;

    return (
        <section>
            <div
                style={{ backgroundImage: `url(${serviceData.section1.img})` }}
                className='bg-cover bg-center min-h-fit h-[80vh] overlay content-center flex items-center'
            >
                <div className='w-full lg:w-1/2 p-8 lg:p-20 space-y-6 ml-4 lg:ml-24'>
                    <h1 className='text-primary text-2xl lg:text-6xl lg:mr-60'>{serviceData.section1.heading}</h1>
                    <p>
                        {serviceData.section1.desc.split("</br>").map((line, index) => (
                            <span key={index} className="block my-4">
                                {line}
                            </span>
                        ))}
                    </p>
                    <CallUsButton />
                </div>
            </div>

            <div className='bg-secondary text-center p-8 lg:p-20 text-white'>
                <div className='max-w-[980px] m-auto space-y-4'>
                    {!!serviceData.section2.heading.length &&
                        <h2 className='text-xl lg:text-3xl'>{serviceData.section2.heading}</h2>
                    }
                    <p>{serviceData.section2.desc}</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row my-8'>
                <div className={cn('w-full p-8 lg:p-16', !!serviceData.section3.img && "lg:w-3/5")}>
                    {!!serviceData.section3.heading.length &&
                        <h2 className='text-xl lg:text-3xl'>{serviceData.section3.heading}</h2>
                    }
                    {!!serviceData.section3.desc.length &&
                        <p>
                            {serviceData.section3.desc.split("</br>").map((line, index) => (
                                <span key={index} className="block my-4">
                                    {line}
                                </span>
                            ))}
                        </p>
                    }
                    <div className={cn('flex flex-wrap max-w-[1420px] m-auto', !serviceData.section3.img && "text-center")}>
                        {serviceData.section3.cards?.map((card, idx) => (
                            <div className='basis-1 lg:basis-1/3 text-primary-foreground' key={idx}>
                                <div key={idx} className={cn('p-6 bg-primary h-full', !!card.img?.length && "rounded-2xl")} style={{ marginRight: idx === serviceData.section3.cards.length - 1 ? 0 : '1.5rem' }}>
                                    {!!card.img?.length &&
                                        <img src={card.img} alt="" srcset="" className='mb-6 rounded-lg' />
                                    }
                                    <h3 className='text-lg font-bold'>{card.title}</h3>

                                    <p className='text-sm'>{card.desc.split("</br>").map((line, index) => (
                                        <span key={index} className="block my-4">
                                            {line}
                                        </span>
                                    ))}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {!!serviceData.section3.img &&
                    <div
                        className='w-full lg:w-2/5 bg-cover bg-center h-60 lg:h-auto'
                        style={{ backgroundImage: `url(${serviceData.section3.img})` }}
                    >
                    </div>
                }
            </div>

            <div className='bg-secondary/10'>
                <div className='mx-4 lg:mx-60 flex flex-col lg:flex-row gap-8 lg:gap-16 h-fit p-8 lg:p-16 text-center'>
                    <div className='space-y-4'>
                        <h2 className='text-lg lg:text-2xl'>The benefits of in home care services</h2>
                        <p>One to One Health simplifies home care administration by pairing you with a dedicated care manager. They coordinate care, communication, and planning between your family, care team, doctors, and healthcare providers, easing the stress of senior care and supporting short- and long-term goals.</p>
                    </div>
                    <span className='block w-full lg:w-2 bg-primary mx-auto'></span>
                    <div className='space-y-4'>
                        <h2 className='text-lg lg:text-2xl'>Home health care services you can rely on</h2>
                        <p>We understand the importance of consistent, reliable caregivers for quality home nursing care. At One to One, we ensure continuity of care with a familiar, dependable team, providing daily support so you can live your life as usual. Our comprehensive home care programs are designed to bring you peace of mind and happiness every day.</p>
                    </div>
                </div>
            </div>
            <CaringJournal />
        </section >
    );
}
