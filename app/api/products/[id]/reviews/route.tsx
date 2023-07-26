import { NextResponse } from "next/server";

import products from "../../_data/products.json";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return NextResponse.json(
    products.find((product) => product.id === +params.id)?.reviews
  );
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { title, rating } = await req.json();

  const product = products.find((product) => product.id === +params.id);
  if (product) {
    const maxId = Math.max(
      ...products.map(({ reviews }) => reviews.map(({ id }) => id)).flat()
    );
    product.reviews.push({
      id: maxId + 1,
      title,
      rating,
    });
  }
  return product ?? null;
}
