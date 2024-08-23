interface ConnexionButtonProps {
  className?: string;
}

export default function ConnexionButton({ className }: ConnexionButtonProps) {
  return (
    <button
      className={`bg-[#ef7c51] rounded font-bold text-orange-100 py-1 ${className}`}
    >
      Connexion
    </button>
  );
}
