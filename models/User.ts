import Password from "@/app/forgot-password/page";
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new mongoose.Schema(
    {
        name: String,
        email: { type: String, unique: true },
        Password: String,
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user",
        },
    },
    { timestamps: true}
);


export default mongoose.models.User || mongoose.model("User", UserSchema);