import React from 'react';
import CallUsButton from '../common/CallUsButton';
import BoxLayout from '../common/Box';



//ICONS
import icon1 from "@/assets/images/icons/1.png";
import icon2 from "@/assets/images/icons/2.png";
import icon3 from "@/assets/images/icons/3.png";
import icon4 from "@/assets/images/icons/4.png";
import icon5 from "@/assets/images/icons/5.png";
import icon6 from "@/assets/images/icons/6.png";
import icon7 from "@/assets/images/icons/7.png";
import icon8 from "@/assets/images/icons/8.png";


export default function HomeThree() {

    const servicesData = [
        {
            IconComponent: icon1.src,
            title: "Companionship",
            description:
                "Isolation is a leading cause of depression in seniors. Our trusted caregivers offer social interaction for physical and mental well-being.",
        },
        {
            IconComponent: icon2.src,
            title: "Meal Preparation",
            description:
                "A nutritious diet comes with many health benefits. Our caregivers love to prepare delicious meals, including specific ethnic dishes if requested.",
        },
        {
            IconComponent: icon3.src,
            title: "Homemaking",
            description:
                "We offer light housekeeping services to help with daily activities. Seniors can stay at home in a safe and clean environment.",
        },
        {
            IconComponent: icon4.src,
            title: "Home Nursing Care",
            description:
                "For optimal health, our RNs and Licensed Practical Nurses help prevent illness and increase comfort at home.",
        },
        {
            IconComponent: icon5.src,
            title: "Caregiver Relief / Respite Care",
            description:
                "It takes time and energy to care for a loved one. Respite care offers temporary relief to recharge and enjoy time with Mom or Dad.",
        },
        {
            IconComponent: icon6.src,
            title: "Personal Care",
            description:
                "From bathing to shaving, we design personal in-home senior care to support day-to-day independence.",
        },
        {
            IconComponent: icon7.src,
            title: "End-of-Life Care",
            description:
                "Everyone deserves comfort, quality of life, and respect for personal choices. We support you at home or in a care facility.",
        },
        {
            IconComponent: icon8.src,
            title: "Transportation / Accompaniment",
            description:
                "Let us arrange for transportation and accompaniment with a friendly caregiver to appointments and activities.",
        },
    ];

    return (
        // <div className='flex flex-col lg:flex-row gap-24 px-4 lg:px-20 py-16'>
        <div>

            <BoxLayout className="py-16 space-y-6">
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
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 w-full'>
                    {servicesData.map((service, index) => {
                        const { IconComponent, title, description } = service;
                        return (
                            <div key={index} className='flex gap-6 space-y-6'>
                                <span className='m-auto bg-primary size-16 aspect-square rounded-full flex items-center justify-center'>
                                    <img src={IconComponent} className='text-primary-foreground text-xl lg:text-2xl' />
                                </span>
                                <div>
                                    <p className='text-secondary font-bold text-lg lg:text-2xl'>{title}</p>
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
