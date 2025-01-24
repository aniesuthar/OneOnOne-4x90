"use client"
import React from 'react';
import Img1 from "@/assets/images/service-hero.png";
import sectionImg2 from "@/assets/images/serviceImg2.png";
import CallUsButton from '../common/CallUsButton';
import CaringJournal from './CaringJournal';
import { useParams, usePathname } from 'next/navigation';
import { servicesDatas } from '@/lib/servicesData';
import { cn, slugify } from '@/lib/utils';
import BoxLayout from '../common/Box';

export default function ServiceLayout() {

    const { service } = useParams();
    const serviceData = servicesDatas.find((item) => slugify(item.serviceName) == service).data;

    return (
        <section className='text-primary'>
            {/* SEC 1  */}
            <div
                style={{ backgroundImage: `url(${serviceData.section1.img})` }}
                className='bg-cover bg-center min-h-fit lg:h-[80vh] overlay content-center flex items-center'
            >
                <BoxLayout>
                    <div className='w-full md:w-full xl:w-3/5 py-8 lg:py-20 space-y-6'>
                        <h1 className='text-primary text-4xl lg:text-6xl lg:mr-60'>{serviceData.section1.heading}</h1>
                        <p>
                            {serviceData.section1.desc.split("</br>").map((line, index) => (
                                <span key={index} className="block my-4">
                                    {line}
                                </span>
                            ))}
                        </p>
                        <CallUsButton />
                    </div>
                </BoxLayout>
            </div>

            {/* SEC 2  */}
            <div className='bg-primary text-center p-8 lg:p-20 text-primary-foreground'>
                <BoxLayout className='space-y-4'>
                    {!!serviceData.section2.heading.length &&
                        <h2 className='text-xl lg:text-3xl'>{serviceData.section2.heading}</h2>
                    }

                    {!!serviceData.section2.desc.length &&
                        <p className='pt-1 lg:pr-28'>
                            {serviceData.section2.desc.split("</br>").map((line, index) => (
                                <span key={index} className="block my-4">
                                    {line}
                                </span>
                            ))}
                        </p>
                    }
                </BoxLayout>
            </div>

            {/* SEC 3  */}
            <BoxLayout className='flex flex-col lg:flex-row'>
                <div className={cn('order-2 lg:order-1 w-full p-8 lg:p-16 lg:pl-0', !!serviceData.section3.img && "lg:w-3/5")}>
                    {!!serviceData.section3.quote &&
                        <p className='pt-8 text-lg mb-12 font-fancy'>
                            {serviceData.section3.quote.quote}
                            <br></br>
                            <span className='block w-fit mt-4 ml-auto'>
                                — {serviceData.section3.quote.author}
                            </span>
                        </p>
                    }
                    {!!serviceData.section3.heading.length &&
                        <h2 className='text-xl lg:text-3xl'>{serviceData.section3.heading}</h2>
                    }
                    {!!serviceData.section3.desc.length &&
                        <p className='lg:pr-28'>
                            {serviceData.section3.desc.split("</br>").map((line, index) => (
                                <span key={index} className="block my-4">
                                    {line}
                                </span>
                            ))}
                        </p>
                    }
                    {serviceData.section3.cards?.length &&
                        <div className={cn(
                            `grid grid-cols-1 lg:grid-cols-${serviceData.section3.cards.length} pt-4 gap-4 flex-wrap max-w-[1420px] m-auto`,
                            !serviceData.section3.img && "text-center"
                        )}>
                            {serviceData.section3.cards?.map((card, idx) => (
                                <div className={cn(`text-primary-foreground`)} key={idx}>
                                    <div key={idx} className={cn('p-6 bg-primary h-full', !!card.img?.length && "rounded-2xl")}
                                    >
                                        {!!card.img?.length &&
                                            <img src={card.img} alt={card.img} className='mb-6 rounded-lg max-h-60 object-cover w-full' />
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
                    }
                </div>
                {!!serviceData.section3.img &&
                    <div
                        className='order-1 lg:order-2 w-full lg:w-2/5 bg-cover bg-center h-60 lg:h-auto'
                        style={{ backgroundImage: `url(${serviceData.section3.img})` }}
                    >
                    </div>
                }
            </BoxLayout>

            {/* SEC CARDS  */}
            {serviceData.sectionCards &&
                <div className='flex flex-col lg:flex-row my-8'>
                    {/* <div className='w-full p-8 lg:p-16'> */}
                    <BoxLayout className={cn('flex overflow-x-scroll [&::-webkit-scrollbar]:hidden', !serviceData.sectionCards?.img && "text-center")}>
                        {serviceData.sectionCards?.cards?.length &&
                            serviceData.sectionCards?.cards?.map((card, idx) => (
                                <div className={cn('basis-1 text-primary min-w-[320px]',
                                    serviceData.sectionCards?.cards.length == 5 && `lg:basis-1/5`,
                                    serviceData.sectionCards?.cards.length == 4 && `lg:basis-1/4`,
                                    serviceData.sectionCards?.cards.length == 3 && `lg:basis-1/3`,
                                    serviceData.sectionCards?.cards.length == 2 && `lg:basis-1/2`,
                                )}
                                    key={idx}>
                                    <div key={idx} className={cn('p-2 bg-primary-foreground border-2 border-primary/50 h-full', !!card.img?.length && "rounded-lg")} style={{ marginRight: idx === serviceData.sectionCards?.cards.length - 1 ? 0 : '1.5rem' }}>
                                        {!!card.img?.length &&
                                            <img src={card.img} alt={card.img} className='mb-4 rounded-sm max-h-60 object-cover w-full' />
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
                            ))
                        }
                    </BoxLayout>
                    {/* </div> */}
                </div>
            }

            {/* SEC 4  */}
            {serviceData.section4 &&
                <div className='bg-secondary/10'>
                    <BoxLayout className={cn('flex flex-col lg:flex-row h-fit text-center', serviceData.section4?.twoCol && "p-16 gap-8")}>
                        {serviceData.section4?.twoCol ?
                            serviceData.section4.cols?.map((col, i) => (
                                <React.Fragment key={i}>
                                    <div className='space-y-4'>
                                        <h2 className='text-lg lg:text-2xl'>{col.heading}</h2>
                                        <p>{col.desc}</p>
                                    </div>
                                    {i < serviceData.section4?.cols?.length - 1 &&
                                        <span className='block w-full lg:w-2 bg-primary mx-auto'></span>
                                    }
                                </React.Fragment>
                            ))
                            :
                            <>
                                {!!serviceData.section4?.img &&
                                    <div
                                        className='w-full lg:w-2/5 bg-cover bg-center h-60 lg:h-auto'
                                        style={{ backgroundImage: `url(${serviceData.section4?.img})` }}
                                    >
                                    </div>
                                }
                                <div className={cn('w-full p-8 lg:p-16 text-primary', !!serviceData.section4?.img && "lg:w-3/5 text-left")}>
                                    {!!serviceData.section4?.heading.length &&
                                        <h2 className='text-xl lg:text-3xl'>{serviceData.section4?.heading}</h2>
                                    }
                                    {!!serviceData.section4?.desc.length &&
                                        <p className='pt-8'>
                                            {serviceData.section4?.desc.split("</br>").map((line, index) => (
                                                <span key={index} className={cn("block my-4", !!serviceData.section4?.img && "list-item list-inside ")}>
                                                    {line}
                                                </span>
                                            ))}
                                        </p>
                                    }
                                </div>
                            </>
                        }
                    </BoxLayout>
                </div>
            }
            <CaringJournal />
        </section >
    );
}
