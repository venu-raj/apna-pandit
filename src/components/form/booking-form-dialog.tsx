"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Modal } from "../ui/dialog";
import { Button } from "../ui/button";

import { Dispatch, SetStateAction, useEffect } from "react";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  location: z.string().min(2, "Location is required"),
  language: z.string().min(2, "Language is required"),
  package: z.string().min(1, "Package is required"),
  date: z.string().min(1, "Date is required"),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

type BookingFormDialogProps = {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;

  initialValues?: {
    location?: string;
    service?: string;
  };
};

export function BookingFormDialog({
  open,
  onOpenChange,
  initialValues,
}: BookingFormDialogProps) {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),

    defaultValues: {
      name: "",
      location: initialValues?.location ?? "Bangalore",
      language: "",
      package: initialValues?.service ?? "",
      date: "",
    },
  });

  useEffect(() => {
    if (!open) return;

    form.setValue("location", initialValues?.location ?? "Bangalore");

    form.setValue("package", initialValues?.service ?? "");
  }, [open, initialValues?.location, initialValues?.service, form]);

  function onSubmit(data: BookingFormValues) {
    console.log(data);

    onOpenChange(false);
  }

  return (
    <Modal
      showModal={open}
      setShowModal={onOpenChange}
      onClose={() => {}}
      className="max-w-lg"
    >
      <div className="flex flex-col px-5 pb-4">
        <div className="flex flex-col items-center justify-center space-y-3 px-4 py-4 pt-8 sm:px-16">
          <h3 className="text-lg font-medium">Get a quote now</h3>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FieldGroup>
            {/* NAME */}
            <Field>
              <FieldLabel>Name</FieldLabel>

              <Input placeholder="Your name" {...form.register("name")} />

              {form.formState.errors.name && (
                <FieldError errors={[form.formState.errors.name]} />
              )}
            </Field>

            {/* LOCATION */}
            <Field>
              <FieldLabel>Location</FieldLabel>

              <Input placeholder="Bangalore" {...form.register("location")} />

              {form.formState.errors.location && (
                <FieldError errors={[form.formState.errors.location]} />
              )}
            </Field>

            {/* LANGUAGE */}
            <Field>
              <FieldLabel>Language</FieldLabel>

              <Input placeholder="Kannada" {...form.register("language")} />

              {form.formState.errors.language && (
                <FieldError errors={[form.formState.errors.language]} />
              )}
            </Field>

            {/* SERVICE */}
            <Field>
              <FieldLabel>Service</FieldLabel>

              <Input
                placeholder="Griha Pravesh Puja"
                {...form.register("package")}
              />

              {form.formState.errors.package && (
                <FieldError errors={[form.formState.errors.package]} />
              )}
            </Field>

            {/* DATE */}
            <Field>
              <FieldLabel>Date</FieldLabel>

              <Input type="date" {...form.register("date")} />

              {form.formState.errors.date && (
                <FieldError errors={[form.formState.errors.date]} />
              )}
            </Field>

            <Button type="submit">Submit</Button>
          </FieldGroup>
        </form>
      </div>
    </Modal>
  );
}
