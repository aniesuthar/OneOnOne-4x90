import React from 'react';
import Link from 'next/link';
import GetFreeConsultForm from "@/components/common/GetFreeConsultForm"
import FooterImgCta from "@/assets/images/cta-footer.jpg";
import BoxLayout from '../common/Box';

export default function Footer() {
    return (
        <footer>
            <div className='bg-primary space-y-4 py-20 application-form'>
                <BoxLayout className="space-y-10">
                    <h2 className='text-center text-primary-foreground font-medium'>Get Started with a Free Consult</h2>
                    <GetFreeConsultForm />
                </BoxLayout>
            </div>
            <div className='bg-secondary/15 mt-20'>
                {/* CTA Section */}
                <div className='text-center p-10'>
                    <div className='-mt-10'>
                        <div className='bg-secondary w-fit m-auto py-8 px-10 sm:px-20 -translate-y-1/3'>
                            <h3 className='text-lg sm:text-xl'>
                                Speak to a Live Person Now
                            </h3>
                            <p className="text-sm sm:text-base">
                                Our Care Team is available 24/7
                            </p>
                        </div>
                        <p className='text-base sm:text-lg -mt-6'>
                            Looking for a career with Nurse Next Door? <Link href="#" className='text-primary underline'>Apply here</Link>
                        </p>
                    </div>
                </div>

                {/* Footer Content */}
                <div className='max-w-[1360px] m-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t-2 gap-4'>
                    {/* Image Section */}
                    <div className='p-4 col-span-1 lg:col-span-2'>
                        <img src={FooterImgCta.src} alt="Footer CTA" />
                    </div>

                    {/* Links Section */}
                    <div className='text-center border-t sm:border-t-0 lg:border-l-2 content-center py-4'>
                        <Link className='block text-sm sm:text-base' href="#">CAREERS</Link>
                        <Link className='block text-sm sm:text-base' href="#">ABOUT US</Link>
                    </div>

                    {/* Social Media Section */}
                    <div className='content-center border-t sm:border-t-0 lg:border-l-2 py-4'>
                        <p className='text-sm sm:text-base font-bold text-center'>
                            Follow Us:
                        </p>
                        <div className='flex gap-2 justify-center max-w-fit m-auto'>
                            <p className='text-sm font-bold'>IN</p>
                            <p className='text-sm font-bold'>YT</p>
                            <p className='text-sm font-bold'>LI</p>
                            <p className='text-sm font-bold'>TW</p>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className='space-y-4 content-center border-t sm:border-t-0 lg:border-l-2 text-center px-4 py-4'>
                        <p className='text-sm sm:text-base font-bold'>
                            Get connected immediately to our Care Team.
                        </p>
                        <p className='text-sm sm:text-base font-semibold'>
                            We are here for you 24/7
                        </p>
                        <p className='text-sm sm:text-base font-bold'>
                            1.877.588.8609
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className='p-8 bg-primary border-t'>
                    <div className='max-w-[1360px] m-auto text-primary-foreground flex flex-col sm:flex-row items-center justify-between'>
                        <p className='text-sm sm:text-base'>© 2025 Nurse Next Door Professional Home Care Services Inc. All Rights Reserved.</p>
                        <div className='space-x-4 sm:space-x-8 mt-4 sm:mt-0'>
                            <Link href="#">PRIVACY POLICY</Link>
                            <Link href="#">NEWS AND PRESS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );

}
