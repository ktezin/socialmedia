import Sidebar from "@/components/sidebar";

export default function FeedLayout({
	children,
	posts,
	explore,
}: Readonly<{
	children: React.ReactNode;
	posts: React.ReactNode;
	explore: React.ReactNode;
}>) {
	return (
		<div className="flex justify-center h-screen">
			<div className="hidden lg:block w-96 border-r border-slate-200">
				<Sidebar />
			</div>
			<div className="flex-1 overflow-y-auto max-w-3xl bg-slate-50">
				{children}
				{posts}
			</div>
			<div className="hidden sm:block w-96 border-l border-slate-200">
				{explore}
			</div>
		</div>
	);
}
