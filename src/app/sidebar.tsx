import Link from "next/link";

export default function Sidebar() {
	return (
		<ul className="p-6 text-xl">
			<Link className="" href="/">
				<li className="p-4 rounded-lg hover:bg-slate-50">Homepage</li>
			</Link>
			<Link className="" href="/">
				<li className="p-4 rounded-lg hover:bg-slate-50">Sign In</li>
			</Link>
		</ul>
	);
}
