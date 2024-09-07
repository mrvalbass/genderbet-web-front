import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default async function handleSignIn(
  router: AppRouterInstance,
  signInEmail: string,
  signInPassword: string,
  updateUser: (token: string | null) => void
) {
  const options = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: signInEmail,
      password: signInPassword,
    }),
  };

  const response = await fetch(
    "https://genderbet-back.vercel.app/users/signIn",
    options
  ).then((r) => r.json());

  if (response.result) {
    updateUser(response.user.token);
    router.replace("/");
  } else {
    const errorMessage = [];
    if (response.error.includes("User not found")) {
      errorMessage.push(
        "L'adresse indiquée ne correspond a aucun utilisateur connu"
      );
    }
    if (response.error.includes("Password is incorrect")) {
      errorMessage.push("Le mot de passe est invalide");
    }
    alert(errorMessage.join("\n"));
  }
}
