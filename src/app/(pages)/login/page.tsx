"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import animation from "./utilities/animation";
import LoginCard from "@/app/(pages)/login/components/LoginCard";

export default function Login() {
  useGSAP(animation);

  return (
    <main className="bg-orange-100 flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-BabyFont font-[500] text-4xl md:text-5xl">
        Notre P'tit Bébé
      </h1>
      <Image
        priority
        src="/baby-womb.png"
        width={300}
        height={300}
        alt="Baby in womb"
        className="baby-womb rounded-full"
      />
      <LoginCard />
    </main>
  );
}
