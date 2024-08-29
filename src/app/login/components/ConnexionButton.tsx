interface ConnexionButtonProps {
  className?: string;
}

export default function ConnexionButton({ className }: ConnexionButtonProps) {
  return (
    <input
      className={`bg-[#ef7c51] rounded font-bold text-orange-100 py-1 ${className}`}
      type="submit"
      value="Connexion"
    />
  );
}
