import { User } from "../../../models/User";
import mongoose from "mongoose";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashed_password = await hash(password, 12);
    mongoose.connect(process.env.MONGO_URI);    
    const user = await new User({
      name: name,
      email: email.toLowerCase(),
      password: hashed_password,
    }).save();

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
