import Post from "@/components/post";

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
	media: {
		type: "",
		url: "",
	},
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
				<Post post={post} key={key} />
			))}
		</div>
	);
}
