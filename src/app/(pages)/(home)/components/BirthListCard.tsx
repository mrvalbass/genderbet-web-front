import Link from "next/link";

export default function BirthListCard() {
  return (
    <Link
      href={"https://www.minipouce.fr/victoirebatifol"}
      target="_blank"
      className="bg-birthListBackground bg-cover bg-center rounded-lg md:h-full hover:scale-105 active:scale-95 transition-all cursor-pointer basis-1/4 w-full "
    >
      <div className=" bg-[#00000055] w-full h-full rounded-lg backdrop-blur-[2px] flex flex-col justify-center items-center text-orange-100">
        <p className="text-3xl font-bold text-center py-5 px-5 md:px-10">
          Liste de Naissance
        </p>
      </div>
    </Link>
  );
}
