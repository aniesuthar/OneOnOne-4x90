"use client"
import React from 'react';
import Link from 'next/link';
import GetFreeConsultForm from "@/components/common/GetFreeConsultForm"
import FooterImgCta from "@/assets/images/cta-footer.jpg";
import LogoFooter from "@/assets/images/logo-final.png"
import BoxLayout from '../common/Box';
import { careerFooterMenuList, footerMenuList, menuList, NoFooterWithSideText } from '@/lib/menu-list';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import defaults from "@/lib/defaults"
import { Phone } from '@mui/icons-material';
import { cn } from '@/lib/utils';

export default function Footer() {

    const path = usePathname();
    const noSideText = NoFooterWithSideText.some((headerPath) => path.startsWith(headerPath));

    const onCareer = path.startsWith("/careers") ? true : false;

    if (!onCareer) {
        return (
            <footer>
                <div className='bg-primary space-y-4 py-20 application-form'>
                    <BoxLayout className="space-y-10">
                        {noSideText &&
                            <h2 className='text-center text-primary-foreground font-medium'>Get Started with a Free Consult</h2>
                        }
                        <div className="flex flex-col lg:flex-row gap-14">
                            {!noSideText &&
                                <h1 className="w-full xl:w-1/3 text-5xl lg:text-8xl lg:leading-tight text-primary-foreground/60">Get Started with a Free Consult</h1>
                            }
                            <GetFreeConsultForm />
                        </div>
                    </BoxLayout>
                </div>
                <div>
                    <BoxLayout className="p-10">
                        <p className='text-base text-center'>
                            Looking for a career with One-On-One? <Link href="#">Apply here</Link>
                        </p>
                    </BoxLayout>
                </div>
                <FooterMain onCareer={onCareer} />
            </footer>
        );
    }
    else {
        return (
            <footer>
                <FooterMain onCareer={onCareer} />
            </footer>
        )
    }

}


export function FooterMain({ onCareer }) {
    const footerMenuListt = onCareer ? careerFooterMenuList[0] : footerMenuList;
    return (
        <div className={cn('bg-primary/10 text-primary font-light space-y-4 application-form', onCareer && "bg-primary-foreground")}>
            <BoxLayout className="divide-y divide-primary-foreground/20">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:py-10 [&>div]:border-b-2 md:[&>div]:border-b-0 border-primary'>
                    <div className='flex flex-col lg:flex-row justify-between items-start gap-6 lg:items-center py-4'>
                        {/* <h3 className='text-secondary font-medium'>One to One Health: Healthcare That Cares</h3>
                            <p className='text-secondary font-medium text-end'>We are here for you.</p> */}
                        <img src={LogoFooter.src} className='w-24 lg:w-60' alt="Logo-Footer" />
                    </div>
                    <div className='flex flex-col items-start gap-6 lg:justify-center lg:pl-14 py-4'>
                        {onCareer && <h3 className='text-secondary'>Careers</h3>}
                        <menu className='flex flex-col gap-4 font-normal'>
                            {footerMenuListt.map((menu) => (
                                <Link href={menu.href} key={menu.title} className='hover:underline'>{menu.title}</Link>
                            ))}
                        </menu>
                        {/* <Button variant="secondary">Contact Us</Button> */}
                    </div>
                    {onCareer &&
                        <div className='flex flex-col items-start gap-6 lg:justify-center lg:pl-14 py-4'>
                            {onCareer && <h3 className='text-secondary'>Company</h3>}
                            <menu className='flex flex-col gap-4 font-normal'>
                                {careerFooterMenuList[1].map((menu) => (
                                    <Link href={menu.href} key={menu.title} className='hover:underline'>{menu.title}</Link>
                                ))}
                            </menu>
                        </div>
                    }
                    {!onCareer &&
                        <div className='lg:text-center space-y-4 content-center'>
                            <p>Follow Us</p>
                            <div className='space-x-2'>{defaults.SOCIALS.map((social) => (
                                <Link href={social.link} className='inline-block' key={social.platform}>
                                    <social.icon />
                                </Link>
                            ))}</div>
                        </div>
                    }
                    {/* Contact Section */}
                    <div className={cn('space-y-4 content-center border-t sm:border-t-0 lg:text-center lg:px-8 py-4', onCareer && "lg:text-left")}>
                        <p className='text-sm sm:text-base font-bold'>
                            {onCareer ?
                                "We would love to hear from you"
                                :
                                "Get connected immediately to our Care Team."
                            }
                        </p>
                        <p className='text-sm sm:text-base font-normal text-black'>
                            {onCareer ?
                                "Don’t see a role that suits your talents? Give us a call."
                                :
                                "We are here for you 24/7"
                            }
                        </p>
                        <Link className='text-lg sm:text-base font-bold inline-block text-secondary' href={`tel:${defaults.CONTACT_NO}`}>
                            <Phone /> {defaults.CONTACT_NO}
                        </Link>
                    </div>
                </div>
                {!onCareer &&
                    <div className='flex flex-col lg:flex-row lg:justify-between items-start lg:items-center py-4'>
                        <p className='text-base'>© {new Date().getFullYear()} {defaults.SITE_NAME}</p>
                        <Link href="/privacy-policy">
                            Privacy Policy
                        </Link>
                    </div>
                }
                <div className='mb-28 lg:mb-16'></div>
            </BoxLayout>
        </div>
    )
}

// {/* CTA Section */ }
// <div className='text-center p-10'>
//     <div className='-mt-10'>
//         <div className='bg-secondary w-fit m-auto py-8 px-10 sm:px-20 -translate-y-1/3'>
//             <h3 className='text-lg sm:text-xl'>
//                 Speak to a Live Person Now
//             </h3>
//             <p className="text-sm sm:text-base">
//                 Our Care Team is available 24/7
//             </p>
//         </div>
//         <p className='text-base sm:text-lg -mt-6'>
//             Looking for a career with One-On-One? <Link href="#" className='text-primary underline'>Apply here</Link>
//         </p>
//     </div>
// </div>

// {/* Footer Content */ }
// <div className='max-w-[1360px] m-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t-2 gap-4'>
//     {/* Image Section */}
//     <div className='p-4 col-span-1 lg:col-span-2'>
//         <img src={FooterImgCta.src} alt="Footer CTA" />
//     </div>

//     {/* Links Section */}
//     <div className='text-center border-t sm:border-t-0 lg:border-l-2 content-center py-4'>
//         <Link className='block text-sm sm:text-base' href="#">CAREERS</Link>
//         <Link className='block text-sm sm:text-base' href="#">ABOUT US</Link>
//     </div>

//     {/* Social Media Section */}
//     <div className='content-center border-t sm:border-t-0 lg:border-l-2 py-4'>
//         <p className='text-sm sm:text-base font-bold text-center'>
//             Follow Us:
//         </p>
//         <div className='flex gap-2 justify-center max-w-fit m-auto'>
//             <p className='text-sm font-bold'>IN</p>
//             <p className='text-sm font-bold'>YT</p>
//             <p className='text-sm font-bold'>LI</p>
//             <p className='text-sm font-bold'>TW</p>
//         </div>
//     </div>

//     {/* Contact Section */}
//     <div className='space-y-4 content-center border-t sm:border-t-0 lg:border-l-2 text-center px-4 py-4'>
//         <p className='text-sm sm:text-base font-bold'>
//             Get connected immediately to our Care Team.
//         </p>
//         <p className='text-sm sm:text-base font-semibold'>
//             We are here for you 24/7
//         </p>
//         <p className='text-sm sm:text-base font-bold'>
//             1.877.588.8609
//         </p>
//     </div>
// </div>

// {/* Footer Bottom */ }
// <div className='p-8 bg-primary border-t'>
//     <div className='max-w-[1360px] m-auto text-primary-foreground flex flex-col sm:flex-row items-center justify-between'>
//         <p className='text-sm sm:text-base'>© 2025 One-On-One Professional Home Care Services Inc. All Rights Reserved.</p>
//         <div className='space-x-4 sm:space-x-8 mt-4 sm:mt-0'>
//             <Link href="#">PRIVACY POLICY</Link>
//             <Link href="#">NEWS AND PRESS</Link>
//         </div>
//     </div>
// </div>