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
        title: "Our Services",
        href: "#",
        hasChildren: true,
        children: servicesList.map((service) => ({
            isChildren: true,
            title: service,
            href: `/services/${slugify(service)}`,
        })),
    },
    {
        title: "Happier Aging",
        href: "/happier-aging",
    },
    {
        title: "About Us",
        href: "about-us",
    }
]