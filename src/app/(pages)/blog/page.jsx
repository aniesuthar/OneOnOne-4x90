import React from 'react'
import Link from 'next/link';
import BoxLayout from '@/components/common/Box';
import BlogsList from "@/components/blog/Blogs"
import { getBlogPosts, imageBuilder } from '@/lib/sanity/sanity-utils'
import { SanityImageComponent } from '@/components/blog/RenderBodyContent';

export default async function page() {

    const posts = await getBlogPosts();

    return (
        <BoxLayout className="py-5">
            {/* {posts?.length > 0 ? (
                posts.map((post) => <BlogItem key={post._id} blog={post} />)
            ) : (
                <p>No posts found</p>
            )} */}
            <BlogsList posts={posts}/>
        </BoxLayout>
    )
}