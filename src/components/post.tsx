import Image from "next/image";
import Card from "./card";

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
		<Card>
			<div className="flex gap-2">
				<span className="font-bold">{post.author.name}</span>
				<span className="text-gray-400">@{post.author.username}</span>
			</div>
			<div>{post.text}</div>
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
			<div className="flex gap-2">
				<span className="text-gray-400">{post.likes.length} Likes</span>
				<span className="text-gray-400">{post.comments.length} Comments</span>
			</div>
		</Card>
	);
}
