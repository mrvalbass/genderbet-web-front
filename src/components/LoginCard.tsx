import ConnexionButton from "./ConnexionButton";
import TextInput from "./TextInput";

export default function LoginCard() {
  return (
    <div className="flex flex-col gap-4 w-3/4 max-w-[500px]">
      <div className="flex flex-col gap-3 px-10">
        <p className="text-center font-bold text-lg">Première connexion</p>
        <TextInput type="text" placeholder="Nom" />
        <TextInput type="email" placeholder="E-mail" />
        <ConnexionButton />
      </div>
      <hr className="border-2 my-4 border-[#ef7c51] rounded-full" />
      <div className="flex flex-col gap-3 px-10">
        <p className="text-center font-bold text-lg">Se connecter</p>
        <TextInput type="email" placeholder="E-mail" />
        <ConnexionButton />
      </div>
    </div>
  );
}
