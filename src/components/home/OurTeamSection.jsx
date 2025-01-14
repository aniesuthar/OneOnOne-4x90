import React from 'react'
import Img3 from "@/assets/images/img3.jpg"
import Badge from "@/assets/images/badge.png"
import Link from 'next/link'


export default function OurTeamSection() {
    console.log(Img3.src)
    return (
        <div className='flex my-20 bg-primary/5'>
            <div className='w-1/2 bg-cover bg-no-repeat' style={{ backgroundImage: `url(${Img3.src})` }}>
            </div>
            <div className='w-1/2 space-y-20 p-20 pl-36'>
                <div >
                    <p className='text-base'>We don't just give care, we take care as well.</p>
                    <h2 className='text-5xl w-[80%]'>Find a caregiver and get back to living your life.</h2>
                </div>
                <div className='space-y-4'>
                    <p>Our in-home caregivers build relationships and encourage independence. Matched specially for your loved one, they're flexible, supportive, and passionate about helping Mom or Dad live more comfortably.</p>
                    <span className='flex items-center gap-4'>
                        <img src={Badge.src} alt="" className='w-10' srcset="" />
                        <p className='font-semibold'>Licensed and Insured</p>
                    </span>
                    <Link className="inline-block text-primary underline font-semibold text-xl" href="#">OUR TEAM</Link>
                </div>
            </div>
        </div>
    )
}
