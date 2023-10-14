"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { ProjectCategory } from "@/types";

import React, { useState } from "react";
import ToggleButton from "../elements/ToggleButton";
import TextInput from "../elements/TextInput";
import TextArea from "../elements/TextArea";
import Form from "../elements/Form";
import FormGroup from "../elements/FormGroup";

import NumberInput from "../elements/NumberInput";

export default function ProjectCategoryForm(props: {
  initialData: ProjectCategory;
  onCancel: () => void;
  onSubmit: (category: ProjectCategory) => void;
}) {
  const [sortedBy, setSortedBy] = useState<"manual" | "auto">(
    props.initialData.sortedBy
  );

  const {
    handleSubmit,

    register,
    formState: { errors },
  } = useForm();

  const reset = (e: any) => {
    e?.target.reset();
    setSortedBy("auto");
  };

  const _onSubmit: SubmitHandler<FieldValues> = (data, e) => {
    props.onSubmit({
      id: props.initialData.id,
      title: data.title,
      description: data.description,
      order: parseInt(data.order),
      sortedBy,
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
        enabled={sortedBy === "manual"}
        setEnabled={() =>
          sortedBy === "auto" ? setSortedBy("manual") : setSortedBy("auto")
        }
      >
        <span className="font-medium text-gray-900">
          {sortedBy === "manual" ? "Manual" : "Auto"} Order
        </span>
      </ToggleButton>
      <FormGroup label="Order" htmlFor="order">
        <NumberInput
          defaultValue={"" + props.initialData.order}
          register={register}
          errors={errors}
          name="order"
          required="Category's order is required"
        />
      </FormGroup>
      <FormGroup label="Title" htmlFor="title">
        <TextInput
          defaultValue={props.initialData.title}
          register={register}
          errors={errors}
          name="title"
          required="Category's title is required"
        />
      </FormGroup>
      <FormGroup label="Description" htmlFor="description">
        <TextArea
          defaultValue={props.initialData.description}
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
