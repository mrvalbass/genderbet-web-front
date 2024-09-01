"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

interface HeaderProps {
  back: boolean;
}

export default function Header({ back }: HeaderProps) {
  const router = useRouter();
  return (
    <header className="w-full h-[10lvh] text-center font-BabyFont text-3xl font-[500] flex justify-center items-center bg-orange-100 border-b-4 border-[#ef7c51] relative">
      {back && (
        <FontAwesomeIcon
          icon={faArrowLeft}
          className=" h-[3lvh] md:h-[5lvh] absolute left-5 md:left-10 cursor-pointer hover:scale-105 active:scale-95"
          onClick={() => router.back()}
        />
      )}
      <p>Notre P'tit Bébé</p>
    </header>
  );
}
