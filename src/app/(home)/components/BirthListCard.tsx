export default function BirthListCard() {
  return (
    <div className="bg-birthListBackground bg-cover bg-center rounded-lg md:h-full hover:scale-105 active:scale-95 transition-all cursor-pointer mt-10 md:mt-0 basis-1/4 w-4/5 ">
      <div className=" bg-[#00000055] w-full h-full rounded-lg backdrop-blur-[2px] flex flex-col justify-center items-center text-orange-100">
        <p className="text-3xl font-bold text-center">Liste de Naissance</p>
      </div>
    </div>
  );
}
