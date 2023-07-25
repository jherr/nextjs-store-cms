"use client";
import { useProductContext } from "../productData/ProductProvider";

export default function Title() {
  const useProduct = useProductContext();
  const { title, setTitle } = useProduct();

  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
        className="text-black"
      />
    </div>
  );
}
