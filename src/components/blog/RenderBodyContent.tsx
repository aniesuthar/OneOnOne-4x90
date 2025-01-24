
import { Blog } from "@/lib/sanity/sanity-types";
import sanityConfig from "@/lib/sanity/sanityConfig";
import { cn } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";

// lazy-loaded image component
export const SanityImageComponent = ({ value, isInline, maxHeight, className }: any) => {
    const { width, height } = getImageDimensions(value);
    const maxHEight = maxHeight ? maxHeight : height;
    return (
        <div className={cn("my-10 max-w-full overflow-hidden", className)}
            style={{
                position: "relative",
                width: `${width}px`,
                height: `${maxHEight > height ? height : maxHEight}px`,
            }}
        >
            <Image
                src={
                    urlBuilder(sanityConfig)
                        .image(value)
                        .fit("max")
                        .auto("format")
                        .url() as string
                }
                // width={width}
                // height={maxHEight > height ? height : maxHEight}
                alt={value.alt || "blog image"}
                loading="lazy"
                // style={{
                //     // display: isInline ? "inline-block" : "block",
                //     // aspectRatio: width / height,
                //     objectFit: "cover"
                // }}
                fill // Makes the image fill the container
                className="object-cover"
            />
        </div>
    );
};

const components = {
    types: {
        image: SanityImageComponent,
    },
};

const RenderBodyContent = ({ post }: { post: Blog }) => {
    return (
        <>
            <PortableText value={post?.body as any} components={components} />
        </>
    );
};

export default RenderBodyContent;