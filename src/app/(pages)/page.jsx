import HomeOne from '@/components/home/HomeOne'
import HomeThree from '@/components/home/HomeThree'
import HomeTwo from '@/components/home/HomeTwo'
import OurTeamSection from '@/components/home/OurTeamSection'
import VideoSection from '@/components/home/VideoSection'
import React from 'react'

export default function page() {
  return (
    <>
      <HomeOne />
      <HomeTwo />
      <HomeThree />
      <VideoSection />
      <OurTeamSection />
    </>
  )
}
