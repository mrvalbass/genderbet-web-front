"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MenuCard from "./components/MenuCard";
import BirthListCard from "./components/BirthListCard";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.replace("/login");
  }, []);

  const handleDisconnection = () => {
    localStorage.removeItem("token");
    router.replace("/login");
  };

  return (
    <>
      <header className="w-full h-[10lvh] text-center font-BabyFont text-3xl font-[500] flex justify-center items-center bg-orange-100 border-b-4 border-[#ef7c51] ">
        Notre P'tit Bébé
      </header>
      <main className="bg-orange-100 h-[90lvh] flex flex-col items-center">
        <div className="flex flex-col justify-center items-center p-10 w-full grow max-w-[1250px] gap-10">
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-5 gap-10 w-full basis-3/4">
            <MenuCard className="bg-genderBackground">Sexe</MenuCard>
            <MenuCard className="bg-firstNameBackground">Prénom</MenuCard>
            <MenuCard className="bg-dateBackground">Date</MenuCard>
          </div>
          <BirthListCard />
        </div>
        <button
          className=" text-[#ef7c51] underline font-bold mb-10 w-fit"
          onClick={handleDisconnection}
        >
          Se déconnecter
        </button>
      </main>
    </>
  );
}
