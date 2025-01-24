"use client"
import React, { useEffect, useState } from 'react'
import DepartmentsJobList from "@/components/career/DepartmentsJobList"
import { getDepartmentsCareerBySlug, getDepartmentsCareerBySlugWithSearch } from '@/lib/sanity/sanity-utils';
import BoxLayout from '@/components/common/Box';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import CareerSearch from '@/components/career/CareerSearch';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const searchparams = useSearchParams();

  const searchTerm = searchparams.get("q");
  const location = searchparams.get("location");

  const [departmentData, setDepartmentData] = useState(null);

  // Fetch department data
  useEffect(() => {
    const fetchDepartmentData = async () => {
      setLoading(true);

      if (searchTerm || location) {
        // Fetch with search parameters if either is provided
        const data = await getDepartmentsCareerBySlugWithSearch(params.department, searchTerm, location);
        setDepartmentData(data);
        console.log("Fetching with search");
      } else if (params.department) {
        // Fetch initial data when no search parameters are provided
        const data = await getDepartmentsCareerBySlug(params.department);
        setDepartmentData(data);
        console.log("Fetching initial data");
      }

      setLoading(false);
    };

    fetchDepartmentData();
  }, [searchTerm, location, params.department]);

  console.log(departmentData);


  return (
    <>
      <div className='bg-primary py-12 lg:py-24'>
        <BoxLayout className="space-y-4">
          <h1 className='capitalize text-primary-foreground'>{params.department}</h1>
          <CareerSearch />
        </BoxLayout>
      </div>

      {
        loading ?
          <BoxLayout>
            <p>Loading...</p>
          </BoxLayout>
          :
          departmentData?.careers.length ?
            <DepartmentsJobList departmentData={departmentData} loading={loading} />
            :
            <BoxLayout className="min-h-[360px] content-center text-center">
              <p><span className='text-5xl block'></span> No Such Result</p>
            </BoxLayout>
      }
    </>

  )
}