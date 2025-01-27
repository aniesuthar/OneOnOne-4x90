import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function FAQs() {
    return (
        <div>
            <Accordion type="single" collapsible className="w-full text-base">
                {faqs.map((faq, idx) => (
                    <AccordionItem value={`${idx}`} className="border-b border-primary/30">
                        <AccordionTrigger className="text-base text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-sm">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}


const faqs = [
    {
        question: "Why should I use ONE-ON-ONE Health Care instead of hiring a private caregiver?",
        answer: "Finding the right kind of senior home care can be difficult but at Nurse Next Door we make sure you know exactly what you will be receiving with our services. Here are some of the questions you should consider prior to making that decision:         What kind of background and screening checks can you do on your own for a caregiver?            All Nurse Next Door Caregivers are carefully screened with criminal background checks and vulnerable sector checks. We confirm our Caregivers' educational credentials and verify upon hire and annually, that every nurse is registered and in good standing with their respective College of Nurses. If you hire a caregiver privately, you will need to perform background checks and screening yourself.            If my caregiver is unavailable, who will fill in?         At Nurse Next Door, we ensure there is a replacement when one of our Caregivers becomes unavailable. We believe in continuity of care and will contact you to inform you of a Caregiver change. If you hire a caregiver privately, it may be difficult to find a replacement caregiver depending on how much notice is given."
    },
    {
        question: "Will I have the same Caregiver or Nurse all the time?",
        answer: "At Nurse Next Door, we strive for consistency of care and provide regularly assigned Caregivers. Our goal is to find the perfect match between our clients and Caregivers based on their needs, hobbies, and interests. Caregiver consistenc"
    },
    {
        question: "Are your home care services only for seniors?",
        answer: "No, we provide home health care services to the entire age spectrum – from newborn babies to seniors. While our specialty is in providing Happier Aging® experiences to seniors, we can also provide assistance with special needs care for children and adults with disabilities, as well as post-operative care, health checks, and other services for any age."
    },
    {
        question: "Can I just try our ONE-ON-ONE Health Care or do I have to sign a long-term contract?",
        answer: "You are not locked into a long-term contract.         To try out Nurse Next Door, just contact us to book a complimentary, no-obligation Caring Consult™. We believe in making things easy for you. One of our Care Designers will visit your home to assess your needs and design a care plan with you, which will including frequency and duration of care."
    },
    {
        question: "What if I need to speak to someone after business hours?",
        answer: "Our Care Services Center is open around the clock – 24 hours a day, 7 days a week. You can call at any time and one of our Care Services Specialists will be happy to assist you."
    },
    {
        question: "How much does ONE-ON-ONE Health Care cost?",
        answer: "Nurse Next Door's services vary in price depending on the level of care required, and the Nurse Next Door Care Team that services your area. To get a better idea of price in your area, speak to one of our Care Services Specialists — we're open any time 24/7.         We also offer a complimentary Caring Consult™, where one of our Care Designers will help you determine the amount of care you may require. We'll work with you to balance your budget and needs to find a home care option for you."
    },

]