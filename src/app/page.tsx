import { redirect } from "next/navigation";

export default function Home({}) {
	redirect("/feed");

	return <div className="p-6 ">Homepage</div>;
}
