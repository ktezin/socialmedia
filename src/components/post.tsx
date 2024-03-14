import Image from "next/image";
import Card from "./card";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import Link from "next/link";

interface Props {
	text: string;
	author: {
		username: string;
		name: string;
	};
	likes: [
		{
			username: string;
			name: string;
		}
	];
	comments: [
		{
			text: string;
			username: string;
		}
	];
	media: {
		type: string;
		url: string;
	};
}

export default function Post({ post }: { post: Props }) {
	return (
		<Card className="group gap-4 hover:bg-gradient-to-t hover:from-slate-100 hover:to-white">
			<Link
				href="/user/johndoe"
				className="flex items-center gap-2 p-2 w-fit hover:bg-slate-100 rounded-lg"
			>
				<img className="w-8 h-8 rounded-full" src="/favicon.ico" alt="Avatar" />
				<span className="font-bold">{post.author.name}</span>
				<span className="text-gray-400">@{post.author.username}</span>
			</Link>
			<div className="">{post.text}</div>
			{post.media && post.media.url && post.media.type && (
				<div className="max-w-3xl py-2">
					<Image
						className="rounded-lg"
						src={post.media.url}
						alt="post img"
						width={768}
						height={320}
					/>
				</div>
			)}
			<div className="flex items-center gap-2 h-8 group-hover:hidden">
				<span className="text-gray-400 ">{post.likes.length} Likes</span>
				<span className="text-gray-400">{post.comments.length} Comments</span>
			</div>
			<div className="hidden group-hover:flex gap-2 h-8">
				<button
					className="flex justify-center items-center rounded-lg h-full w-8 hover:bg-slate-200"
					title="Like"
				>
					<FaRegHeart size={20} />
				</button>
				<button
					className="flex justify-center items-center rounded-lg h-full w-8 hover:bg-slate-200"
					title="Comment"
				>
					<FaRegComment size={20} />
				</button>
			</div>
		</Card>
	);
}
