import { ClientPerspective } from "next-sanity";

const sanityConfig = {
	projectId: "bas4ugja",
	// projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
	dataset: "production",
	apiVersion: "2023-03-09",
	useCdn: false,
	// token: process.env.SANITY_API_KEY as string,
	perspective: 'published' as ClientPerspective,
};

export default sanityConfig;