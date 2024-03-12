export default function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col justify-center border rounded-md p-6 my-2 backdrop-blur-sm bg-white hover:bg-white/20">
			{children}
		</div>
	);
}
