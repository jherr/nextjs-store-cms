import { NextResponse } from "next/server";

import products from "../_data/products.json";

export function GET(_req: Request, { params }: { params: { id: string } }) {
  return NextResponse.json(
    products.find((product) => product.id === +params.id) ?? null
  );
}

export async function UPDATE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { title, description } = await req.json();

  const product = products.find((product) => product.id === +params.id);
  if (product) {
    product.title = title;
    product.description = description;
  }
  return product ?? null;
}
