"use client";

import { useState } from "react";
import ToggleButton from "@/components/admin/form/ToggleButton";
import Input from "@/components/admin/form/Input";
import TextArea from "@/components/admin/form/TextArea";
import Form from "@/components/admin/form/Form";
import FormGroup from "@/components/admin/form/FormGroup";

export default function ProjectCategoryForm() {
  const [order, setOrder] = useState<"manual" | "auto">("auto");

  return (
    <Form onSubmit={() => console.log("submitted")}>
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
        <Input type="text" />
      </FormGroup>
      <FormGroup label="Description" htmlFor="description">
        <TextArea />
      </FormGroup>
    </Form>
  );
}
