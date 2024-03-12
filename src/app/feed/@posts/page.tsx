import Card from "@/components/card";
import Image from "next/image";

const fakePost = {
	text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorem voluptates nobis illum, dicta, ea officiis aspernatur veritatis et ab voluptate expedita aliquid omnis. Totam minus quae assumenda consequuntur nisi.",
	author: {
		username: "johndoe",
		name: "John Doe",
	},
	likes: [
		{
			username: "johndoe",
			name: "John Doe",
		},
	],
	comments: [
		{
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quibusdam eius sed illum vel voluptatibus distinctio quas dolorum dicta similique ipsam possimus necessitatibus doloribus praesentium, voluptate quod laudantium ab aperiam!",
			username: "johndoe",
		},
	],
	/*media: {
		type: "image",
		url: "/placeholder.jpg",
	},*/
};

const posts: any[] = [
	fakePost,
	fakePost,
	fakePost,
	fakePost,
	fakePost,
	fakePost,
	fakePost,
	fakePost,
];

export default function Posts() {
	return (
		<div className="flex flex-col gap-2 p-4">
			{posts.map((post, key) => (
				<Card key={key}>
					<div className="flex gap-2">
						<span className="font-bold">{post.author.name}</span>
						<span className="text-gray-400">@{post.author.username}</span>
					</div>
					<div>{post.text}</div>
					{post.media && (
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
						<span className="text-gray-400">
							{post.comments.length} Comments
						</span>
					</div>
				</Card>
			))}
		</div>
	);
}
