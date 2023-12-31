import { NextResponse } from "next/server";

import products from "./_data/products.json";

export function GET() {
  return NextResponse.json(
    products.map((p) => {
      const { reviews, ...rest } = p;
      return rest;
    })
  );
}
