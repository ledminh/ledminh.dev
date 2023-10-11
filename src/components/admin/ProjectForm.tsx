"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import React, { useState } from "react";

import TextInput from "@/components/admin/form/TextInput";
import TextArea from "@/components/admin/form/TextArea";
import Form from "@/components/admin/form/Form";
import FormGroup from "@/components/admin/form/FormGroup";
import FileForm from "./form/FileForm";

export default function ProjectCategoryForm(props: {
  onCancel: () => void;
  onSubmit: (data: {
    title: string;
    description: string;
    github: string;
    demo: string;
    image: File;
  }) => void;
}) {
  const [order, setOrder] = useState<"manual" | "auto">("auto");
  const [image, setImage] = useState<File | null>(null);

  const {
    handleSubmit,

    register,
    formState: { errors },
  } = useForm();

  const reset = (e: any) => {
    e?.target.reset();
    setOrder("auto");
    setImage(null);
  };

  const _onSubmit: SubmitHandler<FieldValues> = (data, e) => {
    props.onSubmit({
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
