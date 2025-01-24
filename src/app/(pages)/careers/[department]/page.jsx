import React from 'react'
import DepartmentsJobList from "@/components/career/DepartmentsJobList"
import { getDepartmentsCareerBySlug } from '@/lib/sanity/sanity-utils';

export default async function page({ params }) {

  const posts = await getDepartmentsCareerBySlug(params.department);

  return (
    <DepartmentsJobList departmentData={posts}/>
  )
}
