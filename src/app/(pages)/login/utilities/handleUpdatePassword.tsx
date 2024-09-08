import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default async function handleSignIn(
  router: AppRouterInstance,
  signInEmail: string,
  signInPassword: string,
  updateUser: (token: string | null) => void
) {
  const options = {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: signInEmail,
      password: signInPassword,
    }),
  };
  const response = await fetch(
    "https://genderbet-back.vercel.app/users/updatePassword",
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
    if (response.error.includes("password must be at least 6 characters")) {
      errorMessage.push(
        "Le mot de passe doit contenir au minimum 6 caractères"
      );
    }
    alert(errorMessage.join("\n"));
  }
}
