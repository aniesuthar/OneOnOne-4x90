import React from 'react'
import S2Image from "@/assets/images/img2.jpg"
import Link from 'next/link'

export default function HomeTwo() {
    return (
        <div className='flex py-8'>
            <div className='w-2/3 ml-32 p-12 pt-52 space-y-20'>
                <div className='space-y-3'>
                    <p>Our talent is caring.</p>
                    <h2 className='text-5xl'>
                        We do senior <br></br>
                        home care differently.
                    </h2>
                </div>
                <div className='flex gap-32'>
                    <div className='text-center w-1/3 space-y-4'>
                        <h4 className='text-2xl font-bold'>_____ WE'RE LOCAL _____</h4>
                        <p className='text-lg italic'>Over</p>
                        <h1 className='text-8xl font-extrabold text-secondary'>200</h1>
                        <p className='text-lg italic'>locations</p>
                    </div>
                    <div className='w-2/3 space-y-4'>
                        <p> It's about caring, not just health care™. We make it possible for seniors to live in their own home. Nurse Next Door home care’s extraordinary family of Caregivers can take care of your loved one so you can get back to being a daughter or son.</p>
                        <Link href="#"  className='text-primary text-xl font-semibold inline-block'>SERVICES WE PROVIDE</Link>
                    </div>
                </div>
            </div>
            <div
                className='w-2/5 z-10'
                style={{ backgroundImage: `url(${S2Image.src})` }}
            >

            </div>

        </div>
    )
}
