"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import React, { useState } from "react";

import TextInput from "../elements/TextInput";
import TextArea from "../elements/TextArea";
import Form from "../elements/Form";
import FormGroup from "../elements/FormGroup";
import FileForm from "../elements/FileForm";
import NumberInput from "../elements/NumberInput";
import { NewProject } from "@/types";

export default function ProjectCategoryForm(props: {
  onCancel: () => void;
  onSubmit: (newProject: NewProject) => void;
}) {
  const [image, setImage] = useState<File | null>(null);

  const {
    handleSubmit,

    register,
    formState: { errors },
  } = useForm();

  const reset = (e: any) => {
    e?.target.reset();
    setImage(null);
  };

  const _onSubmit: SubmitHandler<FieldValues> = (data, e) => {
    props.onSubmit({
      order: parseInt(data.order),
      title: data.title,
      description: data.description,
      github: data.github,
      demo: data.demo,
      image: image as File,
    });

    reset(e);
  };

  const _onCancel = (e: any) => {
    props.onCancel();
    reset(e);
  };

  return (
    <Form onSubmit={handleSubmit(_onSubmit)} onReset={_onCancel}>
      <FormGroup label="Order" htmlFor="order">
        <NumberInput
          register={register}
          errors={errors}
          name="order"
          required="Order cannot be empty"
        />
      </FormGroup>
      <FormGroup label="Title" htmlFor="title">
        <TextInput
          register={register}
          errors={errors}
          name="title"
          required="Title cannot be empty"
        />
      </FormGroup>
      <FormGroup label="Description" htmlFor="description">
        <TextArea
          register={register}
          errors={errors}
          name="description"
          required="Description cannot be empty"
        />
      </FormGroup>
      <FormGroup label="Github" htmlFor="github">
        <TextInput
          register={register}
          errors={errors}
          name="github"
          required="Github link cannot be empty"
        />
      </FormGroup>
      <FormGroup label="Demo" htmlFor="demo">
        <TextInput
          register={register}
          errors={errors}
          name="demo"
          required="Demo link cannot be empty"
        />
      </FormGroup>
      <FileForm
        label="Upload Image"
        name="uploadedImage"
        file={image}
        setFile={setImage}
        register={register}
        errors={errors}
        required="Image is required"
      />

      <div className="flex gap-2">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <button className="btn btn-attention" type="reset">
          Cancel
        </button>
      </div>
    </Form>
  );
}
