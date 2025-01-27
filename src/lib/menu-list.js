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
        title: "Locations",
        href: "/locations",
    },
    {
        title: "Careers",
        href: "/careers",
    },
    {
        title: "Why One on One",
        href: "/why-one-on-one",
        hasChildren: true,
        children: [
            {
                title: "Our Philosophy",
                href: "/our-philosophy",
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
                title: "News & Press",
                href: "/news-and-press",
            },
        ]
    },
    {
        title: "Blogs",
        href: "/blog",
    }
]

export const careerMenuList = [
    {
        title: "Why Us",
        href: "/our-team",
    },
    {
        title: "Caregiving",
        href: "/careers/caregiving",
    },
    {
        title: "Nursing",
        href: "/careers/nursing",
    },
]

export const footerMenuList = [
    {
        title: "About Us",
        href: "/our-team",
    },
    {
        title: "Why One on One",
        href: "/why-one-on-one",
    },
    {
        title: "Careers",
        href: "/careers",
    },
    {
        title: "Blogs",
        href: "/blog",
    },
]

export const careerFooterMenuList = [
    [

        {
            title: "Caregiving",
            href: "/careers/caregiving",
        },
        {
            title: "Nursing",
            href: "/careers/nursing",
        },
    ],
    [
        {
            title: "Why Us",
            href: "/why-one-on-one",
        },
        {
            title: "Blogs",
            href: "/blog",
        },
        {
            title: "Main Site",
            href: "/",
        },
    ]
]


export const NonTransparentHeader = ["/career", "/services", "/locations", "/blog"]
export const NoFooterWithSideText = ["/career", "/services"]