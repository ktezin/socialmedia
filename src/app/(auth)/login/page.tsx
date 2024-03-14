import { FaGoogle } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

export default function LoginPage() {
	return (
		<div className="flex border rounded-lg max-w-5xl bg-white">
			<div className="hidden md:block flex-1 p-8 border-r rounded-s-lg bg-gradient-to-b from-sky-400 to-emerald-200 text-white">
				<h1 className="text-4xl text-center">Join the world!</h1>
			</div>
			<div className="w-96 p-8 flex flex-col gap-4">
				<h1 className="font-bold text-4xl text-center">Login</h1>
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
				<button className="p-4 w-full rounded-lg bg-sky-400 text-white font-bold hover:bg-sky-500">
					Login
				</button>
				<span className="text-center">Login fast using services</span>
				<div className="flex justify-center gap-4">
					<button
						className="flex justify-center items-center h-12 w-12 rounded-full bg-red-600 text-white"
						title="Login using Google"
					>
						<FaGoogle size={20} />
					</button>
					<button
						className="flex justify-center items-center h-12 w-12 rounded-full bg-white text-black border"
						title="Login using iCloud"
					>
						<FaApple size={20} />
					</button>
				</div>
			</div>
		</div>
	);
}
