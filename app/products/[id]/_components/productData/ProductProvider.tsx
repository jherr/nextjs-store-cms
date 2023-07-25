"use client";
import { createContext, useContext } from "react";
import { create } from "zustand";

export const createProductStore = () =>
  create<{
    title: string;
    setTitle: (title: string) => void;
    description: string;
    setDescription: (description: string) => void;
  }>((set) => ({
    title: "",
    setTitle: (title: string) => set({ title }),
    description: "",
    setDescription: (description: string) => set({ description }),
  }));

export const ProductContext = createContext<ReturnType<
  typeof createProductStore
> | null>(null);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === null) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export default function SyncProvider({
  children,
  id,
  title,
  description,
}: {
  children: React.ReactNode;
  id: number;
  title: string;
  description: string;
}) {
  const useSync = createProductStore();
  useSync.setState({ title, description });

  return (
    <ProductContext.Provider value={useSync}>
      {children}
    </ProductContext.Provider>
  );
}
