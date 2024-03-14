export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-screen w-full flex justify-center items-center bg-slate-50">
			{children}
		</div>
	);
}
