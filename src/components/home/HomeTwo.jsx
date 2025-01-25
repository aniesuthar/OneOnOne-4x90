import React from 'react';
import S2Image from "@/assets/images/img2.jpg";
import Link from 'next/link';
import BoxLayout from '../common/Box';
import { Button } from '../ui/button';
import defaults from '@/lib/defaults';

export default function HomeTwo() {
    return (
        <div className='bg-secondary/10'>
            <BoxLayout className="flex flex-col lg:flex-row" >
                {/* Left Section */}
                <div
                    className='lg:w-2/5 w-full h-60 lg:h-auto bg-cover z-10 order-2 lg:order-1'
                    style={{ backgroundImage: `url(${S2Image.src})` }}
                ></div>

                {/* Right Section */}
                <div className='bg-primary-foreground lg:w-3/5 w-full p-6 lg:p-12 pt-16 space-y-8 lg:space-y-20 order-1 lg:order-2'>
                    <div className='space-y-3 text-center lg:text-left'>
                        <p className='text-lg lg:text-xl'>Our talent is caring.</p>
                        <h2 className='text-3xl lg:text-5xl'>
                            We do senior <br />
                            home care differently.
                        </h2>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-12 lg:gap-16'>
                        {/* Left Info Box */}
                        <div className='text-center lg:w-2/5 space-y-4'>
                            <h4 className='text-xl lg:text-2xl font-bold'>_____ WE'RE LOCAL _____</h4>
                            <p className='text-lg italic'>Over</p>
                            <h1 className='text-6xl lg:text-8xl font-extrabold text-secondary'>200</h1>
                            <p className='text-lg italic'>locations</p>
                        </div>
                        {/* Right Info Text */}
                        <div className='lg:w-3/5 space-y-4'>
                            <p className='text-base lg:text-lg'>
                                It's about caring, not just health care™. We make it possible for seniors to live in their own home. One-On-One home care’s extraordinary family of Caregivers can take care of your loved one so you can get back to being a daughter or son.
                            </p>
                            <Link href={`tel:${defaults.CONTACT_NO}`} className='text-primary text-lg lg:text-xl font-semibold inline-block'>
                            <Button>
                                Call Us Now
                            </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </BoxLayout>
        </div>
    );
}
