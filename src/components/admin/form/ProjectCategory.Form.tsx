"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import React, { useState } from "react";
import ToggleButton from "./elements/ToggleButton";
import TextInput from "./elements/TextInput";
import TextArea from "./elements/TextArea";
import Form from "./elements/Form";
import FormGroup from "./elements/FormGroup";

export default function ProjectCategoryForm(props: {
  onCancel: () => void;
  onSubmit: (data: {
    name: string;
    description: string;
    order: "manual" | "auto";
  }) => void;
}) {
  const [order, setOrder] = useState<"manual" | "auto">("auto");

  const {
    handleSubmit,

    register,
    formState: { errors },
  } = useForm();

  const reset = (e: any) => {
    e?.target.reset();
    setOrder("auto");
  };

  const _onSubmit: SubmitHandler<FieldValues> = (data, e) => {
    props.onSubmit({
      name: data.name,
      description: data.description,
      order: order,
    });

    reset(e);
  };

  const _onCancel = (e: any) => {
    props.onCancel();
    reset(e);
  };

  return (
    <Form onSubmit={handleSubmit(_onSubmit)} onReset={_onCancel}>
      <ToggleButton
        enabled={order === "manual"}
        setEnabled={() =>
          order === "auto" ? setOrder("manual") : setOrder("auto")
        }
      >
        <span className="font-medium text-gray-900">
          {order === "manual" ? "Manual" : "Auto"} Order
        </span>
      </ToggleButton>
      <FormGroup label="Name" htmlFor="name">
        <TextInput
          register={register}
          errors={errors}
          name="name"
          required="Category's name is required"
        />
      </FormGroup>
      <FormGroup label="Description" htmlFor="description">
        <TextArea
          register={register}
          errors={errors}
          name="description"
          required="Category's description is required"
        />
      </FormGroup>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-gray-500 rounded-lg text-white font-semibold hover:bg-gray-800"
          type="submit"
        >
          Submit
        </button>
        <button
          className="px-4 py-2 bg-red-900 rounded-lg text-white font-semibold hover:bg-red-950"
          type="reset"
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}
