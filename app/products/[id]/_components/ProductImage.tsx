import Image from "next/image";

export default async function ProductImage({ id }: { id: number }) {
  const imageReq = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-cache",
  });
  const { image, title } = await imageReq.json();
  return (
    <Image
      className={`aspect-[2/2] w-full rounded-xl object-cover`}
      src={`/images/${image}` ?? ""}
      alt={`${title} image`}
      width={1024}
      height={1024}
    />
  );
}
