import Link from "next/link";

export default function Sidebar() {
	return (
		<div className="p-6 flex flex-col justify-center gap-16 h-full">
			<Link href="/profile">
				<div className="border p-4 flex flex-col justify-center items-center rounded-lg hover:bg-slate-50">
					<img
						className="w-10 h-10 rounded-full"
						src="/favicon.ico"
						alt="Avatar"
					/>
					<span className="font-bold text-gray-700">John Doe</span>
					<span className="text-gray-400">@johndoe</span>
				</div>
			</Link>
			<ul className="text-xl">
				<Link href="/">
					<li className="p-4 rounded-lg hover:bg-slate-50">Homepage</li>
				</Link>
				<Link href="/">
					<li className="p-4 rounded-lg hover:bg-slate-50">Profile</li>
				</Link>
				<Link href="/">
					<li className="p-4 rounded-lg hover:bg-slate-50">Settings</li>
				</Link>
				<Link href="/">
					<li className="p-4 rounded-lg hover:bg-slate-50">Sign Out</li>
				</Link>
			</ul>

			<button className="p-4 rounded-lg bg-sky-400 text-white font-bold hover:bg-sky-500">
				Post
			</button>
		</div>
	);
}
