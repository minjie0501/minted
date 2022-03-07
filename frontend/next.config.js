/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,

  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com", "avatars.githubusercontent.com", "image.shutterstock.com","platform-lookaside.fbsbx.com"],
  },
};
