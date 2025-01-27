"use client"
import React from 'react'
import BoxLayout from '@/components/common/Box'
import HeroSection from '@/components/common/SectionComponents'
import bgImageHero from '@/assets/images/img4.jpg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import TeamCrImg1 from '@/assets/images/teamcr1.jpg'
import TeamCrImg2 from '@/assets/images/teamcr2.jpg'
import TeamCrImg3 from '@/assets/images/teamcr3.jpg'

import Team01Img from '@/assets/images/team01.jpg'
import Team02Img from '@/assets/images/team02.jpg'
import Team03Img from '@/assets/images/team03.jpg'
import Team04Img from '@/assets/images/team04.jpg'
import Team05Img from '@/assets/images/team05.jpg'
import Team06Img from '@/assets/images/team06.jpg'
import Team07Img from '@/assets/images/team07.webp'

import Physician01Img from '@/assets/images/physician1.jpg'
import Physician02Img from '@/assets/images/physician2.jpg'
import Physician03Img from '@/assets/images/physician3.jpg'
import Physician04Img from '@/assets/images/physician4.jpg'
import Physician05Img from '@/assets/images/physician5.jpg'
import Physician06Img from '@/assets/images/physician6.jpg'

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { usePopup } from '@/contexts/PopupProvider'
import OfferPopup from '@/components/popups/Offer'


export default function page() {
    const { showPopup } = usePopup();
    const slidesToScroll = 1;
    return (
        <>
            <HeroSection
                heading="One Provider + One Patient = Better Health"
                description="We’re just people taking care of people."
                noCta
                backgroundImage={bgImageHero.src}
            />
            <Carousel className="w-full bg-primary my-2" opts={{ slidesToScroll: slidesToScroll }}>
                <CarouselContent>
                    {[{
                        title: "Our Story",
                        description: `Our founder, Dr. Keith Helton, previously spent 20 years practicing internal medicine and pediatrics. He even led Physician Services for one of the region’s largest health systems. One patient, responsible for their organization’s benefits plan saw costs spiraling and employee satisfaction dwindling. He asked Dr. Helton, “Can you help us?`,
                        img: TeamCrImg1
                    },
                    {
                        title: "Our Story",
                        description: `The traditional healthcare system can work against the best interests of the patient and the employers footing the bill. “There has to be a better way,” Dr. Helton thought. And upon answering that patient’s call for help, he quickly realized that his new model of direct care works. Costs dropped dramatically, and employees raved about their easy access to compassionate, fair-cost care.`,
                        img: TeamCrImg2
                    },
                    {
                        title: "Our Story",
                        description: `Word spread, and many listened and jumped on board with Dr. Helton’s innovative solution. Over the next seven years, the company’s reach would expand throughout the region and country, positively impacting over 160,000 lives. And, his mission continues… for partners and patients alike, one-to-one.`,
                        img: TeamCrImg3
                    },
                    ].map((item, i) => (
                        <CarouselItem key={i} style={{ flexBasis: (1 / slidesToScroll) * 100 + "%" }}>
                            <div className='size-full flex flex-col lg:flex-row gap-8 relative'>
                                <BoxLayout className='flex flex-col lg:flex-row gap-8'>
                                    <div className='basis-1 lg:basis-2/3 space-y-52 py-24'>
                                        <div className='text-[#A2E7F9]'>
                                            <p className='text-sm'>0{i + 1}</p>
                                            <h1 className='font-normal'>{item.title}</h1>
                                        </div>
                                        <p className='text-primary-foreground text-base'>{item.description}</p>
                                    </div>
                                    <div className='basis-1 lg:basis-1/3'></div>
                                    {/* <div style={{backgroundImage: `url(${item.img.src})`}} className='absolute right-0 top-0 basis-1 lg:basis-1/3 bg-center bg-cover'></div> */}
                                </BoxLayout>
                                <div style={{ backgroundImage: `url(${item.img.src})` }} className='absolute hidden lg:block right-0 top-0 w-1/3 h-full bg-center bg-cover'></div>

                            </div>
                        </CarouselItem>
                    ))
                    }
                </CarouselContent>
                {/* <CarouselPrevious />
                        <CarouselNext /> */}
            </Carousel>

            <BoxLayout className="flex flex-col lg:flex-row gap-10 lg:gap-48 py-8 lg:py-24 text-primary">
                <div>
                    <h1 className='font-normal'>Here for One Reason: You</h1>
                </div>
                <div className='space-y-4 lg:space-y-24'>
                    <p>Service</p>
                    <p>We wake up every morning with a goal to deliver healthcare that truly cares. Meet the team striving to make your experience remarkable.</p>
                </div>
            </BoxLayout>

            <BoxLayout className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-center">
                <HoverTextCard data={drKenithData} />
                <div className='space-y-4 lg:space-y-16'>
                    <div className='flex '>
                        <FormatQuoteIcon className='rotate-180 size-12 -mt-4' />
                        <h2 className='font-normal w-[75%] text-lg lg:text-4xl'>I have 1,000% confidence that we do it differently and better than anybody else.</h2>
                        <FormatQuoteIcon className='-mb-4 mt-auto size-12' />
                    </div>
                    <p className='ml-12'>—Dr. Keith Helton</p>
                </div>
            </BoxLayout>
            <BoxLayout className="py-12 lg:p-12">
                <div className="flex flex-col lg:flex-row flex-wrap gap-6 lg:gap-12 items-center justify-center lg:mx-12">
                    {teamMembersData.map((item) => (
                        <HoverTextCard data={item} />
                    ))}
                </div>
            </BoxLayout>

            <BoxLayout className="flex flex-col lg:flex-row gap-10 lg:gap-48 py-0 lg:py-24 text-primary">
                <div>
                    <h1 className='font-normal'>Physicians Who Care</h1>
                </div>
                <div className='space-y-4 lg:space-y-24'>
                    <p>The Experts</p>
                    <p>At One to One Health, our physician-led team walks alongside you. Meet the doctors in charge of making sure our patients receive the best care.</p>
                </div>
            </BoxLayout>

            <BoxLayout className="py-8 lg:p-12">
                <div className="flex flex-col lg:flex-row flex-wrap gap-6 items-center justify-between">
                    {physiciansData.map((item) => (
                        <HoverTextCard data={item} />
                    ))}
                </div>
            </BoxLayout>


            <div className='bg-primary/10'>
                <BoxLayout className="flex flex-col lg:flex-row gap-12 lg:gap-96 py-12 lg:py-24 text-primary lg:items-center">
                    <div className='min-w-fit'>
                        <p>Always Ready</p>
                        <h1 className='font-normal'>Let’s Talk<br></br>One-to-One</h1>
                    </div>
                    <div className='[&>p]:text-base space-y-8'>
                        <p className='py-12 border-y border-primary/80'>We’re here to help. To learn more about our employer healthcare solutions or become a part of our community, please contact us directly.</p>
                        <p onClick={() => showPopup(<OfferPopup />, 0)} className='cursor-pointer flex gap-1 items-center font-semibold w-fit'>Contact Us <ChevronRight size={18}/></p>
                    </div>
                </BoxLayout>
            </div>


        </>
    )
}


const drKenithData = {
    img: Team01Img,
    name: "Dr. Keith Helton",
    designation: "Founder, Chairman",
    about: "The founder of five innovative healthcare companies, Keith has been a practicing specialist in internal medicine and pediatrics as well as a managing partner with one of East Tennessee’s largest and most respected medical groups, Galen Medical Group. He served as Executive Vice President of Physician Services at a leading academic medical center, Erlanger Health System, and currently serves on the board of directors of the UT Research Foundation. He graduated from the University of Tennessee Center for Health Sciences in Memphis.",
}

const teamMembersData = [
    {
        img: Team02Img,
        name: "David Kinzler",
        designation: "Chief Executive Officer",
        about: "Previously a strategy consultant for Boston Consulting Group, Legislative Director of the Senate Foreign Relations Committee, and Infantry Officer in the U.S. Marine Corps. David received an MBA from the Wharton School of the University of Pennsylvania and a B.S. from the United States Naval Academy.",
    },
    {
        img: Team03Img,
        name: "Ashley Berry",
        designation: "Chief Clinical Operations Officer",
        about: "With over fifteen years of healthcare management experience, Ashley oversees all clinical operations and provides high-level oversight of clinical processes, staff management, recruiting, vendor supply and inventory, utilization reporting, and wellness program oversight. Ashley earned her nursing degree at Tennessee State University and has served as a health coach for One to One Health in addition to her nursing roles. Ashley has a passion for improved health and wellness, with high-quality patient-centered care as her focus.",
    },
    {
        img: Team04Img,
        name: "Wil Trohanis",
        designation: "Chief Revenue Officer",
        about: "A group benefits veteran with 20 years of experience, Wil joined One to One Health from Aon. There, he led healthcare strategic partnerships and focused on client-facing solutions that serve the needs of mid- and large-market customers. Wil was a multinational distribution leader at MetLife, launching and operating international initiatives. He studied international business and management at the University of Tennessee, Knoxville.",
    },
    {
        img: Team05Img,
        name: "Paul Dickenson",
        designation: "Chief Financial Officer",
        about: "Prior to joining One to One, Paul served as the CFO for Ubiquitous., a venture-backed marketing startup and as the VP of Finance for Bellhop, a Chattanooga-based, venture-backed marketplace company in the moving and logistics space. Paul brings over ten years of experience leading finance and strategic planning in the startup world, specifically tech-enabled marketplace companies. Paul is married to a Chattanooga native, Elin (Bunch) and they welcomed their first daughter in June of 2022.",
    },
    {
        img: Team06Img,
        name: "Jocelyn Chambers",
        designation: "VP Client Development",
        about: "Jocelyn has over 15 years of experience in working with corporate clientele and their group health and benefits plans. She helped start a benefits advisory firm based in Nashville and successfully grew it over 12 years. She specializes in implementation, strategy development, and partnership activation.",
    },
    {
        img: Team07Img,
        name: "Tillman Endsley",
        designation: "SVP of Operations and Product",
        about: "Tillman joined One to One Health after working as a program manager at Facebook, where he focused on reducing real-world harm. He joined the Marine Corps in 2004 and served in the infantry and special operations unit for 10 years, and he continues to serve as a reservist today. Tillman studied engineering at the University of California, Los Angeles, and is earning his Executive Masters of Business Administration at the University of Virginia Darden School of Business.",
    },
]

const physiciansData = [
    {
        img: Physician01Img,
        name: "Dr. David Alvarez",
        designation: "Medical Director",
        about: "David is a board-certified internal medicine physician with over 20 years of inpatient hospital experience. He was an instrumental leader in expanding MDP Management through recruiting physicians and engaging community physicians. By increasing communication with the primary care providers in the communities we serve, patients experience true care and better outcomes. Dr. Alvarez graduated from the Universidad Central Del Este (Uce) Facultad De Medicina and completed his residency at Morehouse School of Medicine.",
    },
    {
        img: Physician02Img,
        name: "Dr. Will Smith",
        designation: "Medical Director",
        about: "Will is a board-certified physician specializing in internal medicine and pediatrics with a keen interest in improving patient experience. He has practiced medicine for more than 10 years with the Galen Medical Group, where he also serves on the board of directors. Will’s a graduate of the St. Louis University School of Medicine.",
    },
    {
        img: Physician03Img,
        name: "Dr. Christen Fleming",
        designation: "Medical Director",
        about: "Dr. Christen Fleming is an internist with House Call Primary Care and previously at the UT Medical Center. While completing her residency at UT, she was the recipient of both the Rawson Award and the Clinic Star of the Year awards. Christen graduated summa cum laude from the University of Tennessee Honors College and the University of Tennessee Health Sciences Center.",
    },
    {
        img: Physician04Img,
        name: "Dr. Lisa Smith",
        designation: "Specialty Medical Director",
        about: "Lisa is a medical director of the One to One Return to Work/School/Sports program, where she consults multiple ongoing committees and is hands-on creating the “playbooks” for businesses and schools, interpreting ever-evolving science into everyday behaviors. She is a pediatric surgeon at University Surgical Associates and holds dual appointments as an assistant professor in both the Pediatrics and Surgery departments at the University of Tennessee College of Medicine Chattanooga Unit.",
    },
    {
        img: Physician05Img,
        name: "Dr. David Bruce",
        designation: "Specialty Medical Director",
        about: "David is a medical director of the One to One Return to Work/School/Sports program and an orthopedic surgeon with fellowship training in pediatrics and sports medicine. With 20+ years of experience, David works in private practice at RiverRun Sports Medicine and Orthopedics and is the team doctor for both Baylor and McCallie schools. Since the beginning of the pandemic, he has developed personal protective equipment and taught athletes hygiene practices to combat COVID-19. David graduated from the University of Alabama - Birmingham School of Medicine.",
    },
    {
        img: Physician06Img,
        name: "Dr. Shabeer Abubucker",
        designation: "Mental Health Medical Director",
        about: "Shabeer is a psychiatry specialist who’s directing One to One Health’s behavioral health program. He is a graduate of and completed his residency at Medical College of Georgia, and he practices in Tennessee and Kentucky.",
    },
]

const HoverTextCard = ({ data }) => {
    return (
        <div
            style={{ backgroundImage: `url(${data.img.src})` }}
            className=" max-w-[420px] bg-center bg-cover group"
        >
            <div className="min-h-[560px] px-8 py-6 size-full flex flex-col justify-between space-y-12 relative text-primary-foreground group-hover:bg-primary/90">
                <div className="relative z-[1] opacity-0 group-hover:opacity-100 aboutSec transition-opacity duration-300 space-y-4">
                    <p className="text-xs">about —</p>
                    <p className='text-base'>{data.about}</p>
                </div>
                <div className='relative z-[1]'>
                    <h2 className="font-normal">{data.name}</h2>
                    <p>{data.designation}</p>
                </div>
                <div className="absolute z-[0] inset-0 bg-gradient-to-b from-transparent to-[#00000095]"></div>
            </div>
        </div >
    )
}