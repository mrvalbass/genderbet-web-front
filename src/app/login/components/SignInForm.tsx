import { useState } from "react";
import handleSignIn from "@/app/login/utilities/handleSignIn";
import TextInput from "../../components/TextInput";
import ConnexionButton from "./ConnexionButton";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const [signInEmail, setSignInEmail] = useState<string>("");
  const [signInPassword, setSignInPassword] = useState<string>("");
  const router = useRouter();

  return (
    <form
      className="flex flex-col justify-between gap-3 px-10 md:py-10"
      onSubmit={(e) => {
        e.preventDefault();
        handleSignIn(router, signInEmail, signInPassword);
      }}
    >
      <p className="text-center font-bold text-lg">Se connecter</p>
      <div className="w-full flex flex-col gap-2">
        <TextInput
          type="email"
          placeholder="E-mail"
          value={signInEmail}
          setValue={setSignInEmail}
        />
        <TextInput
          type="password"
          placeholder="Mot de passe"
          value={signInPassword}
          setValue={setSignInPassword}
        />
      </div>
      <ConnexionButton />
    </form>
  );
}
