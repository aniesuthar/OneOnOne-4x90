import React from 'react';
import Img3 from "@/assets/images/img3.jpg";
import Badge from "@/assets/images/badge.png";
import Link from 'next/link';
import BoxLayout from '../common/Box';
import { ArrowRight } from 'lucide-react';

export default function OurTeamSection() {
    return (
        <div className='mt-20 bg-primary/5'>
            <BoxLayout className='flex flex-col lg:flex-row'>

                {/* Left Image Section */}
                <div className='lg:w-1/2 w-full h-60 lg:h-auto bg-cover bg-no-repeat' style={{ backgroundImage: `url(${Img3.src})` }}>
                </div>
                {/* Right Content Section */}
                <div className='lg:w-1/2 w-full space-y-12 lg:space-y-14 p-8 lg:px-0 lg:py-14 lg:pl-12'>
                    <div className='space-y-4'>
                        <p className='text-base font-medium text-center lg:text-right'>We don't just give care, we take care as well.</p>
                        <h2 className='text-3xl text-primary !leading-tight lg:text-5xl text-center lg:text-right'>Find a caregiver and get back to living your life.</h2>
                        <p className='text-sm lg:text-base text-center lg:text-right'>
                            Our in-home caregivers build relationships and encourage independence. Matched specially for your loved one, they're flexible, supportive, and passionate about helping Mom or Dad live more comfortably.
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <span className='flex items-center justify-center lg:justify-start gap-4'>
                            <img src={Badge.src} alt="Licensed and Insured" className='object-cover w-8 lg:w-12' />
                            <p className='font-medium text-sm lg:text-2xl text-primary'>Licensed and Insured</p>
                        </span>
                        <div className='flex justify-center lg:justify-end'>
                            <Link className="flex gap-4 items-center text-primary font-semibold text-lg lg:text-xl" href="/our-team">
                                OUR TEAM <ArrowRight/>
                            </Link>
                        </div>
                    </div>
                </div>
            </BoxLayout>

        </div>
    );
}
