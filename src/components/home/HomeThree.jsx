import React from 'react';
import CallUsButton from '../common/CallUsButton';
import BoxLayout from '../common/Box';



//ICONS
import icon1 from "@/assets/images/icons/servicesIcons/1.png";
import icon2 from "@/assets/images/icons/servicesIcons/2.png";
import icon3 from "@/assets/images/icons/servicesIcons/3.png";
import icon4 from "@/assets/images/icons/servicesIcons/4.png";
import icon5 from "@/assets/images/icons/servicesIcons/5.png";
import icon6 from "@/assets/images/icons/servicesIcons/6.png";
import icon7 from "@/assets/images/icons/servicesIcons/7.png";
import icon8 from "@/assets/images/icons/servicesIcons/8.png";


export default function HomeThree() {

    const servicesData = [
        {
            IconComponent: icon1.src,
            title: "Live 24/7 Scheduling Support",
            description:
                "With fast, easy access, we’re always just a phone call away.",
        },
        {
            IconComponent: icon2.src,
            title: "Licensed & Insured Caregivers",
            description:
                "Find the perfect match. All in home caregivers are kind, trained and insured.",
        },
        {
            IconComponent: icon3.src,
            title: "No Long-term Contracts",
            description:
                "Find the perfect match. All in home caregivers are kind, trained and insured.",
        },
        {
            IconComponent: icon4.src,
            title: "Alzheimer's & Dementia Care",
            description:
                "Get total peace of mind with caregivers experienced in accommodating age-related challenges.",
        },
        {
            IconComponent: icon5.src,
            title: "Full-Spectrum Home Care",
            description:
                "You should never feel ‘stuck’. Short-term or long-term, all home care assistance is flexible.",
        },
        {
            IconComponent: icon6.src,
            title: "Companionship",
            description:
                "Isolation is a leading cause of depression in seniors. Our carefully matched, trusted caregivers offer social interaction for physical and mental well-being.",
        },
        {
            IconComponent: icon7.src,
            title: "Caregiver Relief/Respite Care",
            description:
                "It takes time and energy to care for a loved one. Respite care offers temporary relief so you can recharge and enjoy time with Mom or Dad.",
        },
        {
            IconComponent: icon8.src,
            title: "End-of-Life Care",
            description:
                "Everyone deserves comfort, quality of life, and respect for personal treatment decisions and cultural or spiritual concerns. We provide support and family support at home or in a care facility.",
        },
    ];

    return (
        // <div className='flex flex-col lg:flex-row gap-24 px-4 lg:px-20 py-16'>
        <div>

            <BoxLayout className="py-16 space-y-12">
                {/* Left Section */}
                {/* <div className='lg:w-1/5 w-full space-y-8'>
                    <div className='flex gap-4 justify-start'>
                        <p className='text-secondary font-extrabold'>—</p>
                        <p className='text-sm'>Free in-home Caring Consult with no obligation to book</p>
                    </div>
                    <CallUsButton className="w-full" />
                </div> */}
                <h2 className='text-primary' >Service We Provide-</h2>

                {/* Right Section */}
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 lg:gap-y-16 w-full'>
                    {servicesData.map((service, index) => {
                        const { IconComponent, title, description } = service;
                        return (
                            <div key={index} className='flex gap-6 justify-start space-y-6'>
                                <span className='m-auto bg-primary size-16 aspect-square rounded-full flex items-center justify-center'>
                                    <img src={IconComponent} className='text-primary-foreground text-xl lg:text-2xl' />
                                </span>
                                <div className='!m-0'>
                                    <p className='font-semibold text-lg lg:text-xl'>{title}</p>
                                    <p className='text-sm'>{description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </BoxLayout>

        </div>
    );
}
