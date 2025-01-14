import React from 'react'
import S1Image from "@/assets/images/nnd-hero.jpg"
import MapImage from "@/assets/images/map.png"
import CheckPoint from '../common/CheckPoint'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import CallUsButton from '../common/CallUsButton'

export default function HomeOne() {
    console.log(S1Image.src)
    return (
        <div className='flex '>
            <div
                className="bg-cover w-2/5 z-10"
                style={{ backgroundImage: `url(${S1Image.src})` }}
            >
            </div>
            <div className='w-3/5'>
                <div className='py-12 px-24 space-y-6'>
                    <h1 className='font-semibold'>Home Care Services that Make Lives Better</h1>
                    <p className='text-xl'>At Nurse Next Door, we go beyond home care. We believe seniors should have choice in everything they do. We match you or your loved one with the perfect caregiver, with care tailored to fit individual needs. We also provide 24/7 live support, providing you with peace of mind.</p>
                    <div>
                        <CheckPoint text="Live 24/7 Support" />
                        <CheckPoint text="Licensed and Personalized Caregivers for happier and safer home healthcare" />
                    </div>
                        <CallUsButton/>
                </div>
                <div className='flex h-fit relative'>
                <div className='bg-primary/15 absolute -left-96 z-0 right-0 -bottom-40 top-0'> </div>
                    <div className='w-1/2 p-12 space-y-4'>
                        <h5>Find your local Nurse Next Door</h5>
                        <h2 className='text-4xl'>Where do you need care?</h2>
                        <Input className=" border-primary border-8 rounded-none p-8" placeholder="Find location by ZipCode" type="search" />
                    </div>
                    <div
                        className='bg-cover w-1/2'
                        style={{ backgroundImage: `url(${MapImage.src})` }}
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}
