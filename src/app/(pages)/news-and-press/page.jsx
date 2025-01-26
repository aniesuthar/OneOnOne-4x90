import BoxLayout from '@/components/common/Box'
import Link from 'next/link'
import React from 'react'

export default function page() {
    const email = "marketing@ONE-ON-ONE-HealthCare.com";
  return (
    <BoxLayout className="py-24">
        <h2>News and Press</h2>
        <p>Our talent is caring and we’re getting noticed. Media across North America have featured Nurse Next Door’s unique approach to caring.</p>
        <p>For media inquiries, please contact <Link href={`mailto:${email}`}>{email}</Link></p>
    </BoxLayout>
  )
}
