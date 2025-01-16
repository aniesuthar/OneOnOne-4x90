import React from 'react';
import S1Image from "@/assets/images/nnd-hero.jpg";
import MapImage from "@/assets/images/map.png";
import CheckPoint from '../common/CheckPoint';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import CallUsButton from '../common/CallUsButton';

export default function HomeOne() {
    return (
        <div className='flex flex-col lg:flex-row'>
            {/* Left Section */}
            <div
                className="bg-cover lg:w-2/5 w-full h-60 lg:h-auto z-10"
                style={{ backgroundImage: `url(${S1Image.src})` }}
            ></div>

            {/* Right Section */}
            <div className='lg:w-3/5 w-full'>
                <div className='py-8 px-6 lg:pt-36 lg:py-20 lg:px-24 space-y-6'>
                    <h1 className='lg:text-left text-center'>
                        Home Care Services that Make Lives Better
                    </h1>
                    <p className='text-lg lg:text-xl text-center lg:text-left'>
                        At Nurse Next Door, we go beyond home care. We believe seniors should have choice in everything they do. We match you or your loved one with the perfect caregiver, with care tailored to fit individual needs. We also provide 24/7 live support, providing you with peace of mind.
                    </p>
                    <div>
                        <CheckPoint text="Live 24/7 Support" />
                        <CheckPoint text="Licensed and Personalized Caregivers for happier and safer home healthcare" />
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <CallUsButton />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row h-fit relative'>
                    <div className='bg-primary/15 absolute -left-10 lg:-left-96 z-0 right-0 -bottom-10 lg:-bottom-40 top-0'></div>

                    {/* Location Input Section */}
                    <div className='w-full lg:w-1/2 p-6 lg:p-12 space-y-4 z-10'>
                        <h5 className='text-center lg:text-left'>Find your local Nurse Next Door</h5>
                        <h2 className='text-2xl lg:text-4xl text-center lg:text-left'>Where do you need care?</h2>
                        <Input 
                            className="border-primary border-2 lg:border-8 rounded-md lg:rounded-none p-4 lg:p-8" 
                            placeholder="Find location by ZipCode" 
                            type="search" 
                        />
                    </div>

                    {/* Map Section */}
                    <div
                        className='bg-cover w-full lg:w-1/2 h-60 lg:h-auto z-10'
                        style={{ backgroundImage: `url(${MapImage.src})` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
