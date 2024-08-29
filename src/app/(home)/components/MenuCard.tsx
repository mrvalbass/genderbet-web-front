interface MenuCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function MenuCard({ children, className }: MenuCardProps) {
  return (
    <div
      className={`bg-cover bg-center rounded-lg md:h-full hover:scale-105 active:scale-95 transition-all cursor-pointer basis-1/3 w-full ${className}`}
    >
      <div className=" bg-[#00000055] w-full h-full rounded-lg backdrop-blur-[2px] flex flex-col justify-center md:justify-end items-start text-orange-100">
        <p className="text-3xl font-bold pl-10">{children}</p>
        <p className="pl-10 md:pb-10">Ton pari : </p>
      </div>
    </div>
  );
}
