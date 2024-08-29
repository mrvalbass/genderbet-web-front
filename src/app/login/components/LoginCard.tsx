import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function LoginCard() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 w-3/4 max-w-[750px]">
      <SignUpForm />
      <div className="border-2 my-4 md:m-0 border-[#ef7c51] rounded-full" />
      <SignInForm />
    </div>
  );
}
