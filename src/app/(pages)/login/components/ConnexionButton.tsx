interface ConnexionButtonProps {
  className?: string;
}

export default function ConnexionButton({ className }: ConnexionButtonProps) {
  return (
    <input
      className={`bg-[#ef7c51] rounded font-bold text-orange-100 py-1 ${className} active:scale-95`}
      type="submit"
      value="Connexion"
    />
  );
}
