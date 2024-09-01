"use client";
import Header from "@/app/components/Header";
import FirstNameCard from "./components/FirstNameCard";
import { useContext, useEffect, useState } from "react";
import UserContext from "@/app/context/UserContext";

export default function FirstName() {
  const { user } = useContext(UserContext);
  const [boyNames, setBoyNames] = useState<string[]>(
    user.predictions.firstName.boy
  );
  const [girlNames, setGirlNames] = useState<string[]>(
    user.predictions.firstName.girl
  );
  const [message, setMessage] = useState("Enregistrer");

  useEffect(() => {
    setBoyNames(user.predictions.firstName.boy);
    setGirlNames(user.predictions.firstName.girl);
  }, [user]);

  useEffect(() => {
    if (message !== "Enregistrer")
      setTimeout(() => setMessage("Enregistrer"), 2000);
  }, [message]);

  const saveNames = async () => {
    user.predictions.firstName = {
      boy: boyNames.map((name) => {
        if (name) return name[0].toUpperCase() + name.slice(1).toLowerCase();
        else return name;
      }),
      girl: girlNames.map((name) => {
        if (name) return name[0].toUpperCase() + name.slice(1).toLowerCase();
        else return name;
      }),
    };

    const options = {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token,
        boy: boyNames.map((name) => {
          if (name) return name[0].toUpperCase() + name.slice(1).toLowerCase();
        }),
        girl: girlNames.map((name) => {
          if (name) return name[0].toUpperCase() + name.slice(1).toLowerCase();
          else return name;
        }),
      }),
    };
    const response = await fetch(
      "http://localhost:3000/users/updateFirstName",
      options
    ).then((r) => r.json());
    if (response.result) setMessage("✔");
    else setMessage("✖");
  };

  return (
    <>
      <Header back />
      <main className="h-[90lvh] bg-orange-100 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-[500] pt-5 md:pt-10 font-BabyFont text-center mx-10 leading-relaxed">
          Timéo, Brigitte, Maurice, Loula ...
        </h1>
        <div className="flex flex-col grow justify-center gap-5 md:gap-10 items-center m-5 md:m-10 max-w-[1250px]">
          <FirstNameCard
            className="bg-[#648ea8]"
            symbol="♂"
            names={boyNames}
            setNames={setBoyNames}
          />
          <FirstNameCard
            className="bg-[#ecb1b1]"
            symbol="♀"
            names={girlNames}
            setNames={setGirlNames}
          />
          <button
            className="mb-10 bg-[#ef7c51] rounded px-10 py-2 font-bold text-orange-100 text-xl active:scale-95 w-1/5"
            onClick={saveNames}
          >
            {message}
          </button>
        </div>
      </main>
    </>
  );
}
