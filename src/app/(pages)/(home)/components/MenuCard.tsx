import Link from "next/link";
import { ReactNode } from "react";

interface MenuCardProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  prediction: string | ReactNode | null;
}

export default function MenuCard({
  children,
  href,
  className,
  prediction,
}: MenuCardProps) {
  return (
    <Link
      href={href}
      className={`bg-cover bg-center rounded-lg md:h-full hover:scale-105 active:scale-95 transition-all cursor-pointer basis-1/3 w-full ${className}`}
    >
      <div className=" from-[#000000AA] bg-gradient-to-t w-full h-full rounded-lg backdrop-blur-[2px] flex flex-col justify-center md:justify-end items-start text-orange-100 py-5 md:py-0">
        <p className="text-3xl font-bold pl-5 md:pl-10">{children}</p>
        <p className="text-lg px-5 md:px-10 md:pb-10">
          Ta prédiction : <span className="font-bold">{prediction}</span>
        </p>
      </div>
    </Link>
  );
}
