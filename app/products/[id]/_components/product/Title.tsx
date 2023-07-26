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
        className="bg-gray-800 text-white border border-gray-700 rounded-lg py-2 px-4 block w-full leading-5 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  );
}
