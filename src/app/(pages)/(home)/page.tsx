"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import MenuCard from "./components/MenuCard";
import BirthListCard from "./components/BirthListCard";
import Separator from "./components/Separator";
import Header from "../../components/Header";
import UserContext from "@/app/context/UserContext";
import dayjs from "dayjs";

export default function Home() {
  const router = useRouter();
  const { user, updateUser, loading } = useContext(UserContext);

  useEffect(() => {
    if (!user.name && !loading) {
      router.replace("/login");
    }
  }, [loading]);

  const handleDisconnection = () => {
    updateUser(null);
    router.replace("/login");
  };

  return (
    <>
      <Header back={false} />
      <main className="bg-orange-100 h-[90svh] flex flex-col items-center">
        <div className="flex flex-col justify-center items-center p-10 w-full grow max-w-[1250px] gap-10">
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-5 gap-10 w-full basis-3/4">
            <MenuCard
              className="bg-genderBackground"
              href="/gender"
              prediction={user.predictions.gender}
            >
              Sexe
            </MenuCard>
            <MenuCard
              className="bg-firstNameBackground"
              href="/firstname"
              prediction={
                <>
                  <br />
                  <span>{`♂ : ${user.predictions.firstName.boy
                    .filter((name) => !!name)
                    .join(", ")}`}</span>
                  <br />
                  <span>{`♀ : ${user.predictions.firstName.girl
                    .filter((name) => !!name)
                    .join(", ")}`}</span>
                </>
              }
            >
              Prénom
            </MenuCard>
            <MenuCard
              className="bg-dateBackground"
              href="/birthday"
              prediction={dayjs(user.predictions.birthDay).format("DD/MM/YYYY")}
            >
              Date
            </MenuCard>
          </div>
          <Separator />
          <BirthListCard />
          <Separator />
        </div>
        <div className="flex gap-10">
          <p>
            Prédictions de{" "}
            <span className="font-bold">{user && user.name}</span>
          </p>
          <button
            className=" text-[#ef7c51] underline font-bold mb-10 w-fit"
            onClick={handleDisconnection}
          >
            Se déconnecter
          </button>
        </div>
      </main>
    </>
  );
}
