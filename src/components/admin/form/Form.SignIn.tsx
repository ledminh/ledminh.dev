"use client";

import Form from "./elements/Form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FormGroup from "./elements/FormGroup";
import TextInput from "./elements/TextInput";
import PasswordInput from "./elements/PasswordInput";

import { useRouter } from "next/navigation";

export default function SignIn() {
  const {
    handleSubmit,

    register,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const _onSubmit: SubmitHandler<FieldValues> = (data, e) => {
    router.back();
  };

  const onReset = (e: any) => {
    router.back();
  };

  return (
    <Form onSubmit={handleSubmit(_onSubmit)} onReset={onReset}>
      <FormGroup label="Username" htmlFor="user-name">
        <TextInput
          register={register}
          errors={errors}
          name="user-name"
          required="username required"
        />
      </FormGroup>
      <FormGroup label="Password" htmlFor="password">
        <PasswordInput
          register={register}
          errors={errors}
          name="password"
          required="password required"
        />
      </FormGroup>
      <div className="flex gap-2">
        <button className="btn btn-primary" type="submit">
          Log In
        </button>
        <button className="btn btn-attention" type="reset">
          Cancel
        </button>
      </div>
    </Form>
  );
}

// const { data, error } = await supabase.auth.signInWithPassword({
//   email: 'example@email.com',
//   password: 'example-password',
// })
