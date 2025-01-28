import React from 'react'
import BoxLayout from '@/components/common/Box'
import CareerBgImg from '@/assets/images/careerBgImg.jpg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from 'next/link';
import Thumb1 from "@/assets/images/thumb1.jpg"
import UserImg from "@/assets/images/user.jpg"
import PlayIcon from "@/assets/images/playicon.svg"

import C1 from "@/assets/images/icons/c1.png";
import C2 from "@/assets/images/icons/c2.png";
import C3 from "@/assets/images/icons/c3.png";
import C4 from "@/assets/images/icons/c4.png";

export default function page() {
  return (
    <section>
      <div
        className='min-h-[30vh] h-[30vh] lg:h-[50vh] bg-cover bg-center bg-no-repeat relative z-0 text-center text-primary-foreground'
        style={{ backgroundImage: `url("${CareerBgImg.src}")` }}
      >
        <div className='bg-primary/75 bg-blend-multiply absolute size-full z-0'></div>
        <BoxLayout className="min-h-full relative content-center z-10 space-y-6" >
          <p className='italic'>Careers</p>
          <h1 className='font-extrabold'>Caregiving as a Career</h1>
          <p>Be part of one of the North America's fastest-growing home care companies, commited to making lives better.</p>
        </BoxLayout>
      </div>
      <div className='bg-secondary/10 py-6 lg:py-16'>
        <BoxLayout className="space-y-4" >
          <h2 className='text-center text-primary font-normal'>Find Your Ideal Career Here</h2>
          <div className='bg-background flex flex-col lg:flex-row gap-4 items-center p-2 lg:mx-36'>
            <Input type="text" placeholder='Search...' className="!ring-transparent border-0 border-r" />
            <Select>
              <SelectTrigger className="!ring-transparent border-0" >
                <SelectValue placeholder="Select a Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>US States</SelectLabel> */}
                  <SelectItem value="canada">Canada</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className='w-full lg:max-w-fit rounded-none size-full px-12 py-2'>Go</Button>
          </div>
        </BoxLayout>
      </div>
      <div>
        <BoxLayout className="py-8 lg:py-16 flex flex-col lg:flex-row gap-4 lg:gap-36" >
          <div className='text-primary space-y-2 lg:space-y-6 order-2 lg:order-1'>
            <h4>YOU love coming to work</h4>
            <h2>Our People Promise</h2>
            <p>Through our People Promise, we provide a premium caregiving experience to match our premium employer brand. We believe in paying competitively,  developing team members and spending time building relationships.</p>
            <Button> Watch Now <PlayCircleIcon /> </Button>
          </div>
          <Link href="https://www.youtube.com/watch?v=KunmlDaaijU" target="_blank" className="order-1 lg:order-2 bg-cover bg-center block bg-no-repeat w-full min-h-[340px] content-center relative" style={{ backgroundImage: `url(${Thumb1.src})` }}>
            <img src={PlayIcon.src} className='w-16 m-auto' alt="" />
          </Link>
        </BoxLayout>
      </div>
      <div className='bg-primary/10 text-primary text-center py-8 lg:py-20'>
        <BoxLayout className="space-y-12 lg:space-y-24" >
          <h2>Join Our Bold Kind Culture</h2>
          <div className='flex flex-col lg:flex-row gap-4 lg:gap-20 items-center'>
            {[
              {
                title: `We Pay <class="hidden lg:inline" br/> Bold Wages`,
                desc: "We pay above market so team members are well taken care of. We believe you should be paid what you’re worth.",
                icon: C1.src
              },
              {
                title: `We Offer Growth <class="hidden lg:inline" br/> Opportunities`,
                desc: "Do you aspire to have the career of your dreams? We can help you reach your goals.",
                icon: C2.src
              }, {
                title: `We Believe in <class="hidden lg:inline" br/> Happier Aging`,
                desc: "Seniors should be doing things they love. We provide quality care, giving caregivers steady hours and more time with clients.",
                icon: C3.src
              }, {
                title: `We Support Bold <class="hidden lg:inline" br/> Dreams and Goals`,
                desc: "We help our team own their development and career growth. This means helping them put their dreams into action.",
                icon: C4.src
              }
            ].map((item, i) => (
              <div key={i} className='basis-1/4 space-y-4'>
                <img src={item.icon} className='mx-auto max-w-16' />
                <h3 className='mx-4 leading-tight' dangerouslySetInnerHTML={{ __html: item.title }}/>
                <p className='text-base'>{item.desc}</p>
              </div>
            ))}
          </div>
        </BoxLayout>
      </div>
      <div className='bg-primary text-primary-foreground'>
        <BoxLayout className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center py-5 lg:py-10" >
          <img src={Thumb1.src} alt="" className='min-h-80 object-cover' />
          <div className='space-y-6'>
            <div className='space-y-4'>
              <p>Careers Just a Phone Call Away.</p>
              <h2>We’re All About Choice</h2>
              <p>If applying over email isn’t for you, please call us. We’re available 24/7.</p>
            </div>
            <Button variant="secondary">Call +1-877-355-3660</Button>
          </div>
        </BoxLayout>
      </div>
      <div>
        <BoxLayout className="text-center space-y-6 py-16 lg:py-24">
          <h2 className='text-primary mx-6'>Here’s what our team has to say</h2>
          <div className='space-y-6 mx-6 lg:mx-60'>
            <img src={UserImg.src} alt="" className='m-auto rounded-full size-24 object-cover' />
            <p className='text-base'>“I feel supported and understood as a new caregiver to One-On-One. I feel that One-On-One is helpful, efficient and organized as well.”
              Amber”</p>
          </div>
        </BoxLayout>
      </div>
      <div className='bg-secondary/10 py-6 lg:py-16 text-center'>
        <BoxLayout className="space-y-2" >
          <h2 className='text-center text-primary font-normal'>Find Your Passion</h2>
          <p className='text-base'>Are you a kind, caring individual who wants to make a difference in the lives of seniors? We want to hear from you!</p>
          <div className='flex flex-col lg:flex-row gap-4 justify-center lg:gap-8 items-center p-2 pt-8 lg:mx-36'>
            <Button className='w-full lg:max-w-fit rounded-none size-full px-12 py-4' variant="secondary">Call 1-877-355-3660</Button>
            <Button className='w-full lg:max-w-fit rounded-none size-full px-12 py-4'>Browse all listings</Button>
          </div>
        </BoxLayout>
      </div>
      <div>
        <BoxLayout className="text-primary text-center space-y-6 py-12">
          <h2>Why One-On-One?</h2>
          <div className='text-center space-y-2 flex flex-col lg:flex-row gap-6 lg:gap-16'>
            {[
              {
                title: "Who We Are",
                desc: "Founded in 2001 in Vancouver, BC, Canada, One-On-One Home Care Services is a global home care brand that helps seniors stay at home. We operate internationally with 400+ locations."
              },
              {
                title: "What Sets Us Apart",
                desc: "We are more than just a private-duty home care provider: we are a thought leader in the home care industry. We believe seniors should have choice in everything they do. That’s part of our care philosophy called Happier Aging."
              },
              {
                title: "How We Provide Care",
                desc: "We don’t just “package our services.” We design our care plans around a person’s individual needs, desires and personality. This approach is unrivaled in the industry. We are a premium brand and go beyond the basics of care."
              },
              {
                title: "What Drives Us",
                desc: "We don’t believe in mediocrity. We aim to disrupt. We surpass our goals by thinking bigger than we currently are, and exponentially leapfrogging our business. We challenge our current reality with a 10x growth mindset."
              },
            ].map((item) => (
              <div>
                <h4>{item.title}</h4>
                <p className='text-base'>{item.desc}</p>
              </div>
            ))
            }
          </div>
        </BoxLayout>
      </div>
      <div>
        <BoxLayout className="flex flex-col lg:flex-row gap-4 lg:gap-20 items-center py-32">
          <div className='space-y-8'>
            <div>
              <h2>Our Bold Kind Culture</h2>
              <p>making lives better for you and our clients</p>
            </div>
            <div>
              We use Bold Kindness to summarize our culture. It’s a kinder, more compassionate way of showing up in our lives. We are self-led leaders who are empowered to take responsibility for what we do. We are a culture of helping each other, free of blame or judgment.
              <br></br>
              <br></br>
              If you feel like Bold Kindness resonates with you, we’d love to chat.
            </div>
          </div>
          <img src={Thumb1.src} alt="" />
        </BoxLayout>
      </div>
      <BoxLayout className="bg-primary p-10 py-20 text-center space-y-8">
        <div className='text-primary-foreground'>
          <h2>Explore Careers</h2>
          <p className='text-base'>Do you want to work for a company with purpose and heart? We have openings across North America.</p>
        </div>
        <div className='bg-background flex flex-col lg:flex-row gap-4 items-center p-2 lg:mx-36'>
          <Input type="text" placeholder='Search...' className="!ring-transparent border-0 border-r" />
          <Select>
            <SelectTrigger className="!ring-transparent border-0" >
              <SelectValue placeholder="Select a Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>US States</SelectLabel> */}
                <SelectItem value="canada">Canada</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button className='w-full lg:max-w-fit rounded-none size-full px-12 py-2'>Go</Button>
        </div>
      </BoxLayout>
      <div className='h-10 lg:h-20'></div>
    </section >

  )
}