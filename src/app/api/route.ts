import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectURL } from "@/dbConnect";
import { User } from "@clerk/nextjs/server";
export async function GET() {
  try {
    await mongoose.connect(connectURL);
    return NextResponse.json({
      message: "successful",
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({error: error});
  }
}
