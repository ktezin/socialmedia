import Link from "next/link";

export default function RegisterPage() {
	return (
		<div className="flex flex-col gap-4 w-96 p-8 border rounded-lg bg-white max-w-7xl">
			<h1 className="font-bold text-4xl text-center">Sign Up</h1>
			<label className="font-semibold">Email</label>
			<input
				className="p-4 w-full rounded-lg bg-sky-50"
				placeholder="you@example.com"
			/>
			<label className="font-semibold">Password</label>
			<input
				className="p-4 w-full rounded-lg bg-sky-50"
				placeholder="Enter your password"
			/>
			<label className="font-semibold">Repeat Password</label>
			<input
				className="p-4 w-full rounded-lg bg-sky-50"
				placeholder="Repeat your password"
			/>
			<button className="p-4 w-full rounded-lg bg-sky-400 text-white font-bold hover:bg-sky-500">
				Sign Up
			</button>
			<span className="text-center">
				If you have an account, please {" "}
				<Link href="/login" className="font-bold hover:underline hover:underline-offset-2">
					login
				</Link>
			</span>
		</div>
	);
}
