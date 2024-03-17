import connectDB from "@/app/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: any) {
	const { email, password } = await request.json();

	await connectDB();

	const user = await User.findOne({ email });

	if (user) {
		return new NextResponse("Provided email is not available", { status: 400 });
	}

	const hashedPassword = await bcrypt.hash;
}
