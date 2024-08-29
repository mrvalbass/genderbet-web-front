import handleSignUp from "@/app/(pages)/login/utilities/handleSignUp";
import ConnexionButton from "./ConnexionButton";
import TextInput from "../../../components/TextInput";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import UserContext from "@/app/context/UserContext";

export default function SignUpForm() {
  const [name, setName] = useState<string>("");
  const [signUpEmail, setSignUpEmail] = useState<string>("");
  const [signUpPassword, setSignUpPassword] = useState<string>("");
  const { updateUser } = useContext(UserContext);
  const router = useRouter();

  return (
    <form
      className="flex flex-col justify-between gap-3 px-10 md:py-10"
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUp(router, name, signUpEmail, signUpPassword, updateUser);
      }}
    >
      <p className="text-center font-bold text-lg">Première connexion</p>
      <div className="w-full flex flex-col gap-2">
        <TextInput
          type="text"
          placeholder="Prénom"
          value={name}
          setValue={setName}
        />
        <TextInput
          type="email"
          placeholder="E-mail"
          value={signUpEmail}
          setValue={setSignUpEmail}
        />
        <TextInput
          type="password"
          placeholder="Mot de passe"
          value={signUpPassword}
          setValue={setSignUpPassword}
        />
      </div>
      <ConnexionButton />
    </form>
  );
}
