"use client";
import { useContext, useState } from "react";
import Header from "../../components/Header";
import GenderCard from "./components/GenderCard";
import UserContext from "@/app/context/UserContext";

export default function Gender() {
  const { user } = useContext(UserContext);
  const [prediction, setPrediction] = useState<"♂" | "♀" | null>(
    user.predictions.gender
  );

  const setGender = async (gender: "♂" | "♀" | null) => {
    setPrediction(gender);
    user.predictions.gender = gender;
    const options = {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token,
        gender,
      }),
    };
    await fetch(
      "https://genderbet-back.vercel.app/users/updateGender",
      options
    );
  };

  return (
    <>
      <Header back />
      <main className="h-[90svh] bg-orange-100 flex flex-col items-center overflow-auto">
        <h1 className="text-4xl md:text-5xl font-[500] pt-10 font-BabyFont text-center">
          Fille ou Garçon ?
        </h1>
        <div className="flex flex-col md:flex-row w-full justify-center items-center grow p-10 max-w-[1250px] gap-10">
          {prediction === "♂" ? (
            <>
              <GenderCard className="bg-boyBackground scale-105" />
              <GenderCard
                clickable
                shaded
                className="bg-girlBackground scale-95"
                onClick={() => setGender("♀")}
              />
            </>
          ) : prediction === "♀" ? (
            <>
              <GenderCard
                clickable
                shaded
                className="bg-boyBackground scale-95"
                onClick={() => setGender("♂")}
              />
              <GenderCard className="bg-girlBackground scale-105" />
            </>
          ) : (
            <>
              <GenderCard
                clickable
                className="bg-boyBackground"
                onClick={() => setGender("♂")}
              />
              <GenderCard
                clickable
                className="bg-girlBackground"
                onClick={() => setGender("♀")}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
}
