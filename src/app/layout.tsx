import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SocialMedia",
	description: "A social media app built using Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={
					inter.className +
					" bg-gradient-to-r from-indigo-800 to-indigo-950 text-white"
				}
			>
				{children}
			</body>
		</html>
	);
}
