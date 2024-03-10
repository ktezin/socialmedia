import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./sidebar";

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
			<body className={inter.className + "bg-white text-black"}>
				<main className="flex justify-center h-screen">
					<div className="hidden lg:block w-64 border-r border-slate-200">
						<Sidebar />
					</div>
					<div className="flex-1 overflow-y-auto max-w-3xl">{children}</div>
					<div className="hidden sm:block w-64 border-l border-slate-200">
						<Sidebar />
					</div>
				</main>
			</body>
		</html>
	);
}
