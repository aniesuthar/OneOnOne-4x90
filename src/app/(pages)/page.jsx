"use client"
import React from 'react'
import HeroSection from '@/components/common/SectionComponents'
import HomeOne from '@/components/home/HomeOne'
import HomeOne2 from '@/components/home/HomeOne2'
import HomeThree from '@/components/home/HomeThree'
import HomeTwo from '@/components/home/HomeTwo'
import OurTeamSection from '@/components/home/OurTeamSection'
import VideoSection from '@/components/home/VideoSection'
import HomeHeroImg from '@/assets/images/home-hero.jpg'
import CaringJournal from '@/components/services/CaringJournal'
import TestimonialSection from '@/components/home/Testimonial'
import { usePopup } from '@/contexts/PopupProvider'
import OfferPopup from '@/components/popups/Offer'

export default function page() {
  // const { showPopup } = usePopup();

  // React.useEffect(() => {
  //   showPopup(<OfferPopup />, 1000);
  //   return () => {
  //   };
  // }, []);

  return (
    <>
      <HeroSection
        hasVideo
        heading="Home Care Services that Make Lives Better"
        description="At One-On-One, we go beyond home care. We believe seniors should have choice in everything they do. We match you or your loved one with the perfect caregiver, with care tailored to fit individual needs. We also provide 24/7 live support, providing you with peace of mind."
        backgroundImage={HomeHeroImg.src}
        checkpoints={[" Live 24/7 Support", "Licensed and Personalized Caregivers for happier and safer home healthcare"]}
      />
      {/* <HomeOne /> */}
      <HomeOne2 />
      <HomeTwo />
      <HomeThree />
      <VideoSection />
      <OurTeamSection />
      <TestimonialSection/>
      <CaringJournal />
    </>
  )
}
