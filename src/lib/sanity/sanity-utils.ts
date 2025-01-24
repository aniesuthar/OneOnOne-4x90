import ImageUrlBuilder from "@sanity/image-url";
import { createClient, type QueryParams } from "next-sanity";
import sanityConfig from "./sanityConfig";
import { Blog } from "./sanity-types";
import { careerQueryByID, departmentQueryByDepartment, departmentQueryWithSearch, postQuery, postQueryBySlug } from "./sanity-query";

export const sanityClient = createClient(sanityConfig);

export function imageBuilder(source: string) {
  return ImageUrlBuilder(sanityConfig).image(source);
}

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string,
  qParams: QueryParams,
  tags: string[],
}): Promise<QueryResponse> {
  return (
    sanityClient.fetch <
    QueryResponse >
    (query,
    qParams,
    {
      cache: "force-cache",
      next: { tags },
    })
  );
}

export const getBlogPosts = async () => {
  const data: Blog[] = await sanityFetch({
    query: postQuery,
    qParams: {},
    tags: ["post", "author", "category"],
  });
  return data;
};

export const getBlogPostBySlug = async (slug: string) => {
  const data: Blog = await sanityFetch({
    query: postQueryBySlug,
    qParams: { slug },
    tags: ["post", "author", "category"],
  });

  return data;
};

export const getDepartmentsCareerBySlug = async (slug: string) => {
  const data = await sanityFetch({
    query: departmentQueryByDepartment,
    qParams: { slug },
    tags: ["career", "department"],
  });

  return data;
};

export const getCareerPostById = async (id: string) => {
  const data = await sanityFetch({
    query: careerQueryByID,
    qParams: { id },
    tags: ["career", "department"],
  });

  return data;
};


export const getDepartmentsCareerBySlugWithSearch = async (slug: string, searchTerm: string) => {
  const data = await sanityFetch({
    query: departmentQueryWithSearch,
    qParams: { slug, searchTerm },
    tags: ["career", "department"],
  });

  return data;
};