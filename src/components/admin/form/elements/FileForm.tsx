import { Image as ImageType } from "@/types";
import isImageType from "@/utils/isImageType";
import Image from "next/image";

import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";

const FileForm = (props: {
  label: string;
  name: string;
  file: File | ImageType | null;
  setFile: (file: File | null) => void;
  required: string | boolean;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
}) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor={props.name} className="btn btn-secondary">
          {props.label}
        </label>
        <input
          type="file"
          id={props.name}
          {...props.register(props.name, {
            required: props.required,
          })}
          className="hidden"
          onChange={(e) => {
            props.setFile(e.target.files?.item(0) ?? null);
          }}
        />
        {props.errors[props.name]?.type === "required" && (
          <span className="text-red-500 text-sm">
            {props.errors[props.name]?.message as string}
          </span>
        )}
      </div>
      {props.file && (
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="relative h-40 w-40">
            <Image
              src={
                isImageType(props.file)
                  ? props.file.src
                  : URL.createObjectURL(props.file)
              }
              alt="new image"
              fill
              className="rounded-md object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FileForm;
