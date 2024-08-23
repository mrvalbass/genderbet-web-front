"use client";

import LoginCard from "@/components/LoginCard";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [rotationSpeed, setRotationSpeed] = useState<number>(16);

  return (
    <main className="bg-orange-100 flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-BabyFont font-[500] text-4xl md:text-5xl">
        Notre P'tit Bébé
      </h1>
      <Image
        src="/baby-womb.png"
        width={300}
        height={300}
        alt="Baby in womb"
        style={{ animation: `spin ${rotationSpeed}s linear infinite` }}
        onClick={() =>
          setRotationSpeed((prev) => {
            if (prev > 1) return prev - 5;
            else return 16;
          })
        }
      />
      <LoginCard />
    </main>
  );
}
