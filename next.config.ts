import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			// Basic redirect
			{
				source: "/",
				destination: "/en",
				permanent: false,
			},
		];
	},
};

export default nextConfig;
