"use client";

import Link from "next/link";
import React, { useState } from "react";
import { SanityImageComponent } from "./RenderBodyContent";

export default function BlogsList({ posts }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredPosts, setFilteredPosts] = useState(posts);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        // Filter posts based on the search query
        const matchedPosts = posts.filter((post) =>
            post.title.toLowerCase().includes(query)
        );
        setFilteredPosts(matchedPosts);
    };

    return (
        <>
            {/* Search Bar */}
            <div className="mb-5">
                <input
                    type="text"
                    placeholder="Search blog titles..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Blog List */}
            {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => <BlogItem key={post._id} blog={post} />)
            ) : (
                <p>No posts found</p>
            )}
        </>
    );
}


const BlogItem = ({ blog }) => {
    console.log(blog);
    return (
        <Link
            href={`/blog/${blog.slug.current}`}
            className="block p-5 border shadow-sm my-8"
        >
            <article className='flex gap-4 lg:gap-12 justify-between flex-col lg:flex-row'>
                <div className='space-y-4 order-2 lg:order-1'>
                    <h3 className="mb-1 font-medium text-primary">
                        {blog.title}
                    </h3>
                    <p className='text-secondary text-base'>
                        {blog.categories.map((cat, index) => (
                            <>
                                {cat.title}
                                {index !== blog.categories.length - 1 && (
                                    <span> | </span>
                                )}
                            </>
                        ))}
                    </p>
                    <p className="mb-3 font-normal text-sm text-gray-600">
                        {new Date(blog.publishedAt).toDateString()}
                    </p>
                    <hr className='h-[3px] bg-primary/60 w-2/3' />
                    <p className='text-sm flex gap-2 items-center'>
                        {blog.author.image ?
                            <SanityImageComponent className="my-0" value={blog.author?.image} />
                            :
                            <img src="https://ciie.fpce.up.pt/assets/img/pub-generica.png" className='object-cover size-9 rounded-full' alt="" />
                        }
                        {blog.author.name}</p>
                </div>
                <SanityImageComponent className="my-0 order-1 lg:order-2" maxHeight={240} value={blog.mainImage} />
            </article>
        </Link>
    );
};