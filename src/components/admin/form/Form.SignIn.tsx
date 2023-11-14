"use client";

import Form from "./elements/Form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FormGroup from "./elements/FormGroup";
import TextInput from "./elements/TextInput";
import PasswordInput from "./elements/PasswordInput";

import { useRouter } from "next/navigation";
import login from "@/api-calls/login";
import { AdminLoginInfo } from "@/types";

export default function SignIn() {
  const {
    handleSubmit,

    register,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const _onSubmit: SubmitHandler<FieldValues> = (data, e) => {
    login(data.email, data.password).then(() => {
      router.push("/admin");
    });
  };

  const onReset = (e: any) => {
    router.back();
  };

  return (
    <Form onSubmit={handleSubmit(_onSubmit)} onReset={onReset}>
      <FormGroup label="Email" htmlFor="email">
        <TextInput
          register={register}
          errors={errors}
          name="email"
          required="email required"
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
