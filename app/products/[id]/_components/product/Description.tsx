"use client";
import { useProductContext } from "../productData/ProductProvider";

export default function Description() {
  const useProduct = useProductContext();
  const { description, setDescription } = useProduct();

  return (
    <div>
      <label htmlFor="description">Description</label>
      <input
        id="description"
        value={description}
        onChange={(evt) => setDescription(evt.target.value)}
        className="text-black"
      />
    </div>
  );
}
