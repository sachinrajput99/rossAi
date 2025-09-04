/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rzbokqqxviyyiacxbnlb.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin_avatars/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
