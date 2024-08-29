interface GenderCardsProps {
  className?: string;
}

export default function GenderCard({ className }: GenderCardsProps) {
  return (
    <div
      className={`bg-center bg-cover rounded-lg grow h-full basis-1/2 flex justify-center items-center hover:scale-105 active:scale-95 transition-all cursor-pointer ${className}`}
    ></div>
  );
}
