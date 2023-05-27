import bcrypt from 'bcrypt';


import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    email,
    name,
    password
  } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const pharmacist = await prisma.pharmacist.create({
    data: {
      email,
      name,
      hashedPassword
    }
  });
  // The pharmacist object has been created

  // Return a success response
  return NextResponse.json(pharmacist);
}
