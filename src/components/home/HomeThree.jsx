import React from 'react'
import CallUsButton from '../common/CallUsButton';

/** MUI Icons */
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople"; // For companionship
import RestaurantIcon from "@mui/icons-material/Restaurant"; // For meal prep
import HomeIcon from "@mui/icons-material/Home"; // For homemaking
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation"; // For nursing
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement"; // For respite
import FaceIcon from "@mui/icons-material/Face"; // For personal care
import FavoriteIcon from "@mui/icons-material/Favorite"; // For end-of-life
import CommuteIcon from "@mui/icons-material/Commute"; // For transportation


export default function HomeThree() {

    const servicesData = [
        {
            IconComponent: EmojiPeopleIcon,
            title: "Companionship",
            description:
                "Isolation is a leading cause of depression in seniors. Our trusted caregivers offer social interaction for physical and mental well-being.",
        },
        {
            IconComponent: RestaurantIcon,
            title: "Meal Preparation",
            description:
                "A nutritious diet comes with many health benefits. Our caregivers love to prepare delicious meals, including specific ethnic dishes if requested.",
        },
        {
            IconComponent: HomeIcon,
            title: "Homemaking",
            description:
                "We offer light housekeeping services to help with daily activities. Seniors can stay at home in a safe and clean environment.",
        },
        {
            IconComponent: MedicalInformationIcon,
            title: "Home Nursing Care",
            description:
                "For optimal health, our RNs and Licensed Practical Nurses help prevent illness and increase comfort at home.",
        },
        {
            IconComponent: SelfImprovementIcon,
            title: "Caregiver Relief / Respite Care",
            description:
                "It takes time and energy to care for a loved one. Respite care offers temporary relief to recharge and enjoy time with Mom or Dad.",
        },
        {
            IconComponent: FaceIcon,
            title: "Personal Care",
            description:
                "From bathing to shaving, we design personal in-home senior care to support day-to-day independence.",
        },
        {
            IconComponent: FavoriteIcon,
            title: "End-of-Life Care",
            description:
                "Everyone deserves comfort, quality of life, and respect for personal choices. We support you at home or in a care facility.",
        },
        {
            IconComponent: CommuteIcon,
            title: "Transportation / Accompaniment",
            description:
                "Let us arrange for transportation and accompaniment with a friendly caregiver to appointments and activities.",
        },
    ];

    return (
        <div className='flex gap-32 ml-44 py-32'>
            <div className='w-1/5 space-y-8'>
                <div className='flex gap-8 justify-start'>
                    <p className='text-secondary font-extrabold'>—</p>
                    <p className='text-sm'>Free in-home Caring Consult with no obligation to book</p>
                </div>
                <CallUsButton className="w-full" />
            </div>
            <div className='grid grid-cols-12 gap-12 px-20 w-4/5'>
                {servicesData.map((service) => {
                    const { IconComponent, title, description } = service;
                    return (
                        <div className='col-span-3 space-y-6'>
                            <span className='bg-primary p-8 aspect-square size-20 rounded-full items-center flex justify-center'>
                                <IconComponent className='size-8 text-primary-foreground' />
                            </span>
                            <p className='text-secondary font-bold text-2xl'>{title}</p>
                            <p className='text-sm'>{description}</p>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}
