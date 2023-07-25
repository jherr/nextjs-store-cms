import { NextResponse } from "next/server";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return NextResponse.json({
    reviews: [
      {
        id: 1,
        title: "Great product",
      },
      {
        id: 2,
        title: "Not so great product",
      },
    ],
  });
}
