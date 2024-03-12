import Card from "@/components/card";

export default function FeedPage() {
	return (
		<div className="p-4 border-b">
			<h1 className="text-center text-2xl text-slate-700 font-bold py-4">Your Feed</h1>
			<Card>
				<input type="text" placeholder="What's happening right now?" />
				<button>Post</button>
			</Card>
		</div>
	);
}
