import ErrorLayout from "./ErrorLayout";

import SignIn from "./form/Form.SignIn";

export default function ErrorLoginScreen(props: { errorMessage: string }) {
  return (
    <ErrorLayout>
      <p className="text-xl font-semibold">
        There was an error signing you in.{" "}
      </p>
      <pre className="bg-slate-200 p-2">{props.errorMessage}</pre>
      <p className="font-semibold">Please sign in again</p>
      <div className="shadow-xl">
        <SignIn />
      </div>
    </ErrorLayout>
  );
}
