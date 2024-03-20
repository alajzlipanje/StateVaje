import { useEffect } from "react";
import { useState } from "react";
import { cn } from "./lib/utils";
import { Slider } from "@/components/ui/slider";

export function Counter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  return (
    <>
      <Slider defaultValue={[33]} max={100} min={1} step={1} />
      <button
        className={cn(
          "border p-3 font-bold",
          count % 2 === 0 ? "bg-red-500" : "bg-blue-500",
        )}
        onClick={() => {
          setCount(count + count1);
        }}
      >
        Kliknil si me {count}-krat!
      </button>
      <button
        className="border p-3 font-bold"
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Kliki se povecujejo za {count1}
      </button>
    </>
  );
}
