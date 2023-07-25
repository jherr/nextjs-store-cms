"use client";
import { createContext, useContext } from "react";
import { create } from "zustand";

export const createUseSync = () =>
  create<{
    count: number;
    setCount: (count: number) => void;
  }>((set) => ({
    count: 0,
    setCount: (count) => set({ count }),
  }));

export const SyncContext = createContext<ReturnType<
  typeof createUseSync
> | null>(null);

export const useSyncContext = () => {
  const context = useContext(SyncContext);
  if (context === null) {
    throw new Error("useSync must be used within a SyncProvider");
  }
  return context;
};

export default function SyncProvider({
  children,
  count,
}: {
  children: React.ReactNode;
  count: number;
}) {
  const useSync = createUseSync();
  useSync.setState({ count });

  return (
    <SyncContext.Provider value={useSync}>{children}</SyncContext.Provider>
  );
}
