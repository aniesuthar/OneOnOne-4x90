import { groq } from "next-sanity";
const postData = `{
  title,
  categories[]->{
    title
  },
  slug,
  tags,
  author->{
    _id,
    name,
    slug,
    image,
    bio
  },
  mainImage,
  publishedAt,
  body
}`;

const careerData = `{
  title,
  location,
  id,
  about,
  body,
  "departmentName": department->name
}`;

const departmentData = `{
 name,slug,
  "careers": careers[]->{
    title,
    id,
    location,
    about,
    body
  }
}`;

export const postQuery = groq`*[_type == "post"] ${postData}`;

export const postQueryBySlug = groq`*[_type == "post" && slug.current == $slug][0] ${postData}`;

export const postQueryByTag = groq`*[_type == "post" && $slug in tags[]->slug.current] ${postData}`;

export const postQueryByAuthor = groq`*[_type == "post" && author->slug.current == $slug] ${postData}`;

export const postQueryByCategory = groq`*[_type == "post" && category->slug.current == $slug] ${postData}`;

//Career --------------------
export const careerQueryByID = groq`*[_type == "career" && id.current == $id][0] ${careerData}`;

export const departmentQueryByDepartment = groq`*[_type == "department" && slug.current == $slug][0] ${departmentData}`;