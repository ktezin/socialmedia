import { model, models, Schema } from "mongoose";

export interface IUser {
	email: string;
	password: string;
	name: string;
	avatar?: string;
}

const schema = new Schema<IUser>({
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	name: { type: String, required: true },
	avatar: String,
});

const User = models.User || model("User", schema);

export default User;
