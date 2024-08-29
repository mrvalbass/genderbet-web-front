import Header from "../../components/Header";
import GenderCard from "./components/GenderCard";

export default function Gender() {
  return (
    <>
      <Header back />
      <main className="h-[90lvh] bg-orange-100 flex flex-col items-center">
        <h1 className="text-5xl font-[500] py-10 font-BabyFont">
          Fille ou Garçon ?
        </h1>
        <div className="flex w-full justify-center items-center grow p-10 max-w-[1250px] gap-10">
          <GenderCard className="bg-boyBackground" />
          <GenderCard className="bg-girlBackground" />
        </div>
      </main>
    </>
  );
}
