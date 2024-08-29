import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default async function handleSignUp(
  router: AppRouterInstance,
  name: string,
  signUpEmail: string,
  signUpPassword: string,
  updateUser: (token: string | null) => void
) {
  const options = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email: signUpEmail,
      password: signUpPassword,
    }),
  };

  const response = await fetch(
    "http://localhost:3000/users/signUp",
    options
  ).then((r) => r.json());

  if (response.result) {
    updateUser(response.user.token);
    router.replace("/");
  } else {
    const errorMessage = [];
    if (response.error.includes("Missing Name")) {
      errorMessage.push("Veuillez indiquer un nom");
    }
    if (response.error.includes("Missing E-mail")) {
      errorMessage.push("Veuillez indiquer une adresse e-mail");
    }
    if (response.error.includes("invalid email address")) {
      errorMessage.push("L'adresse e-mail est invalide");
    }
    if (response.error.includes("duplicate key")) {
      errorMessage.push("L'adresse e-mail est déjà utilisée");
    }
    if (response.error.includes("password must be at least 6 characters")) {
      errorMessage.push(
        "Le mot de passe doit contenir au minimum 6 caractères"
      );
    }
    alert(errorMessage.join("\n"));
  }
}
