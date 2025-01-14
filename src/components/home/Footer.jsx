import Link from 'next/link'
import React from 'react'
import FooterImgCta from "@/assets/images/cta-footer.jpg"

export default function Footer() {
    return (
        <div className='bg-secondary/15 mt-20'>
            <div className='text-center p-10 '>
                <div className='-mt-10'>
                    <div className='bg-secondary w-fit m-auto py-8 px-20 -translate-y-1/3'>
                        <h3>
                            Speak to a Live Person Now
                        </h3>
                        <p className="text-sm">
                            Our Care Team is available 24/7
                        </p>
                    </div>
                    <p className='text-base -mt-6'>
                        Looking for a career with Nurse Next Door? <Link href="#" className='text-primary underline'>Apply here</Link>
                    </p>
                </div>
            </div>
            <div className='max-w-[1360px] m-auto py-8 grid grid-cols-5 border-t-2'>
                <div className='p-10 col-span-2'>
                    <img src={FooterImgCta.src} alt="" />
                </div>
                <div className='text-center border-l-2 content-center'>
                    <Link className='block' href="#"> CAREERS</Link>
                    <Link className='block' href="#"> ABOUT US</Link>
                </div>
                {/* <p>THE CARING BLOG</p> */}
                <div className='content-center border-l-2'>
                    <p className='text-sm font-bold text-center'>
                        Follow Us:
                    </p>
                    <div className='flex gap-2 justify-center max-w-fit m-auto'>
                        <p className='text-sm font-bold'>
                            IN
                        </p>
                        <p className='text-sm font-bold'>
                            YT
                        </p>
                        <p className='text-sm font-bold'>
                            LI
                        </p>
                        <p className='text-sm font-bold'>
                            TW
                        </p>
                    </div>
                </div>
                <div className='space-y-4 content-center border-l-2 text-center px-4'>
                    <p className='text-sm font-bold'>
                        Get connected immediately to our Care Team.
                    </p>
                    <p className='text-sm font-semibold'>
                        We are here for you 24/7
                    </p>
                    <p className='text-sm font-bold'>
                        1.877.588.8609
                    </p>
                </div>
            </div>
            <div className='p-8 bg-primary border-l-2'>
                <div className='max-w-[1360px] m-auto text-primary-foreground flex items-center justify-between'>
                    <p className='text-sm'>© 2025 Nurse Next Door Professional Home Care Services Inc. All Rights Reserved.</p>
                    <div className='space-x-8'>
                        <Link href="#"> PRIVACY POLICY</Link>
                        <Link href="#"> NEWS AND PRESS</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}