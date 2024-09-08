"use client";

import { faArrowLeft, faTable } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import UserContext from "../context/UserContext";

interface HeaderProps {
  back: boolean;
}

export default function Header({ back }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useContext(UserContext);
  return (
    <header className="w-full h-[10svh] text-center font-BabyFont text-3xl font-[500] flex justify-center items-center bg-orange-100 border-b-4 border-[#ef7c51] relative">
      {back && (
        <FontAwesomeIcon
          icon={faArrowLeft}
          className=" h-[3svh] md:h-[5svh] absolute left-5 md:left-10 cursor-pointer hover:scale-105 active:scale-95"
          onClick={() => router.back()}
        />
      )}
      <p>Notre P'tit Bébé</p>
      {(user.email === "vvm.guillot@gmail.com" ||
        user.email === "victoire2704@gmail.com") &&
        pathname === "/" && (
          <FontAwesomeIcon
            icon={faTable}
            className=" h-[3svh] md:h-[5svh] absolute right-5 md:right-10 cursor-pointer hover:scale-105 active:scale-95"
            onClick={() => router.push("/dashboard")}
          />
        )}
    </header>
  );
}
