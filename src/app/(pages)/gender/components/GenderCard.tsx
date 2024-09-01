interface GenderCardsProps {
  className?: string;
  clickable?: boolean;
  shaded?: boolean;
  onClick?: () => void;
}

export default function GenderCard({
  className,
  clickable,
  shaded,
  onClick,
}: GenderCardsProps) {
  return (
    <div
      className={`bg-center bg-cover rounded-lg grow h-full w-full basis-1/2 flex justify-center items-center ${
        clickable && "hover:scale-105 active:scale-95"
      } transition-all cursor-pointer ${className} `}
      onClick={onClick}
    >
      {shaded && <div className="bg-black/50 rounded-lg w-full h-full"></div>}
    </div>
  );
}
