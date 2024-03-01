import { MongoClient } from "mongodb";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashed_password = await hash(password, 12);
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    const db = client.db("LinkList");
    const usersCollection = db.collection("users");

    const user = await usersCollection.insertOne({
      name: name,
      email: email.toLowerCase(),
      password: hashed_password,
    });

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
