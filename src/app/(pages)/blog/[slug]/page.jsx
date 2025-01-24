
import React from "react";
import RenderBodyContent, { SanityImageComponent } from "@/components/blog/RenderBodyContent";
import BoxLayout from "@/components/common/Box";
import { getBlogPostBySlug } from "@/lib/sanity/sanity-utils";

const SingleBlogPage = async ({ params }) => {
    const post = await getBlogPostBySlug(params.slug);

    return (
        <BoxLayout>
            <article className="my-10">
                <div className="mb-5 pl-4 border-l-4 border-secondary">
                    <h2 className="py-2">{post.title}</h2>
                    <p className="pb-1 text-lg">
                        <span className="font-medium">Published : </span>
                        {new Date(post.publishedAt).toDateString()}
                        <span className="font-medium pl-2">by </span>
                        {post.author.name}
                    </p>

                    <p>{post.metadata}</p>
                </div>
                <SanityImageComponent value={post.mainImage} />

                <article className="prose lg:prose-xl">
                    <RenderBodyContent post={post} />
                </article>
            </article>
        </BoxLayout>

    );
};

export default SingleBlogPage;