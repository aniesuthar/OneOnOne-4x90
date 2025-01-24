/** @type {import('next').NextConfig} */
const hostnames = [
    'cdn.sanity.io',
    'ciie.fpce.up.pt'
]

const nextConfig = {
    images: {
        remotePatterns: hostnames.map(hostname => ({
            protocol: 'https',
            hostname
        }))
    },
};

export default nextConfig;