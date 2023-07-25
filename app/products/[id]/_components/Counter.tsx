"use client";
import { useSyncContext } from "./SyncProvider";

export default function Counter() {
  const useSync = useSyncContext();
  const { count, setCount } = useSync();

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
