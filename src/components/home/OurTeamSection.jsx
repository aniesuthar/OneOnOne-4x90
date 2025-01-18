import React from 'react';
import Img3 from "@/assets/images/img3.jpg";
import Badge from "@/assets/images/badge.png";
import Link from 'next/link';

export default function OurTeamSection() {
    return (
        <div className='flex flex-col lg:flex-row my-20 bg-primary/5'>
            {/* Left Image Section */}
            <div className='lg:w-1/2 w-full h-60 lg:h-auto bg-cover bg-no-repeat' style={{ backgroundImage: `url(${Img3.src})` }}>
            </div>
            {/* Right Content Section */}
            <div className='lg:w-1/2 w-full space-y-12 lg:space-y-20 p-8 lg:p-20 lg:pl-36'>
                <div className='space-y-4'>
                    <p className='text-base text-center lg:text-left'>We don't just give care, we take care as well.</p>
                    <h2 className='text-3xl lg:text-5xl text-center lg:text-left lg:w-[80%]'>Find a caregiver and get back to living your life.</h2>
                </div>
                <div className='space-y-6'>
                    <p className='text-sm lg:text-base text-center lg:text-left'>
                        Our in-home caregivers build relationships and encourage independence. Matched specially for your loved one, they're flexible, supportive, and passionate about helping Mom or Dad live more comfortably.
                    </p>
                    <span className='flex items-center justify-center lg:justify-start gap-4'>
                        <img src={Badge.src} alt="Licensed and Insured" className='w-8 lg:w-10' />
                        <p className='font-semibold text-sm lg:text-base'>Licensed and Insured</p>
                    </span>
                    <div className='flex justify-center lg:justify-start'>
                        <Link className="inline-block text-primary underline font-semibold text-lg lg:text-xl" href="/our-team">
                            OUR TEAM
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
