import { slugify } from "./utils";

export const servicesList = [
    "Comprehensive Home Care",
    "Alzheimer’s and Dementia Care",
    "In-Home Nursing Care",
    "Post Operative Care",
    "Companionship",
    "End-of-Life Care",
    "Homemaking",
    "Meal Preparation",
    "Personal Care",
    "Relief/Respite Care",
    "Transportation/Accompaniment",
    "Around-The-Clock Care",
];


export const menuList = [
    {
        title: "Services",
        href: "#",
        hasChildren: true,
        children: servicesList.map((service) => ({
            isChildren: true,
            title: service,
            href: `/services/${slugify(service)}`,
        })),
    },
    {
        title: "TextCare",
        href: "/text-care",
    },
    {
        title: "Why One on One",
        href: "/why-one-on-one",
        hasChildren: true,
        children: [
            {
                title: "Careers",
                href: "/careers",
            },
            {
                title: "Career in Nursing",
                href: "/careers/nursing",
            },
            {
                title: "Career in Caregiving",
                href: "/careers/caregiving",
            },
        ]
    },
    {
        title: "About Us",
        href: "/about-us",
        hasChildren: true,
        children: [
            {
                title: "Our Team",
                href: "/our-team",
            },
            {
                title: "Our Philosophy",
                href: "/our-philosophy",
            },
        ]
    }
]

export const NonTransparentHeader = ["/career", "/services"]