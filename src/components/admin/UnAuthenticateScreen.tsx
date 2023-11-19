import SignIn from "./form/Form.SignIn";

export default function UnAuthenticateScreen() {
  return (
    <div className="fixed w-screen h-screen bg-red-100/50 flex justify-center items-center">
      <div className="border-4 border-red-700/60 p-4 flex flex-col justify-center items-center gap-4">
        <p className="text-xl font-semibold">
          You are not authorized to access this area.
        </p>
        <p className="font-semibold">
          Please sign in first
        </p>
        <div className="shadow-xl">
        <SignIn />
        </div>
      </div>
    </div>
  );
}
