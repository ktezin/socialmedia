import Card from "@/components/card";
import Link from "next/link";

export default function Explore() {
	return (
		<div className="p-6 ">
			<Card>
				<input type="text" placeholder="Search..." />
			</Card>
			<Card>
				<span className="font-bold text-xl mb-2">You might be interested</span>
				<ul>
					<Link href="/">
						<li className="flex items-center justify-between rounded-lg p-4 hover:bg-slate-100">
							<img
								className="w-8 h-8 rounded-full"
								src="/favicon.ico"
								alt="Avatar"
							/>
							<div className="flex flex-col text-center">
								<span className="font-bold text-slate-700">John Doe</span>
								<span className="text-slate-500">@johndoe</span>
							</div>
							<button className="rounded-lg bg-sky-400 text-white p-4">Follow</button>
						</li>
					</Link>
					<Link href="/">
						<li className="flex items-center justify-between rounded-lg p-4 hover:bg-slate-100">
							<img
								className="w-8 h-8 rounded-full"
								src="/favicon.ico"
								alt="Avatar"
							/>
							<div className="flex flex-col text-center">
								<span className="font-bold text-slate-700">John Doe</span>
								<span className="text-slate-500">@johndoe</span>
							</div>
							<button className="rounded-lg bg-sky-400 text-white p-4">Follow</button>
						</li>
					</Link>
				</ul>
			</Card>
		</div>
	);
}
