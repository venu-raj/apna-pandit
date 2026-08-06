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

import { GalleryItem } from "@/types/gallery";
import { Modal } from "../ui/dialog";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";

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
  item?: GalleryItem | null;
};

export function BookingFormDialog({
  open,
  onOpenChange,
  item,
}: BookingFormDialogProps) {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      location: "",
      language: "",
      package: "",
      date: "",
    },
  });

  function onSubmit(data: BookingFormValues) {
    console.log({
      service: item,
      ...data,
    });

    onOpenChange(false);
  }

  return (
    <Modal
      showModal={open}
      setShowModal={onOpenChange}
      onClose={() => {}}
      className=" max-w-lg"
    >
      <div className=" flex flex-col px-5 pb-4">
        <div className="flex flex-col items-center justify-center space-y-3 px-4 py-4 pt-8 sm:px-16">
          <h3 className="text-lg font-medium">Get a quote now</h3>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FieldGroup>
            <Field>
              <FieldLabel>Name</FieldLabel>

              <Input placeholder="Your name" {...form.register("name")} />

              {form.formState.errors.name && (
                <FieldError errors={[form.formState.errors.name]} />
              )}
            </Field>

            <Field>
              <FieldLabel>Location</FieldLabel>

              <Input placeholder="Bangalore" {...form.register("location")} />
            </Field>

            <Field>
              <FieldLabel>Language</FieldLabel>

              <Input placeholder="Kannada" {...form.register("language")} />
            </Field>

            <Field>
              <FieldLabel>Package</FieldLabel>

              <Input placeholder="Premium" {...form.register("package")} />
            </Field>

            <Field>
              <FieldLabel>Date</FieldLabel>

              <Input type="date" {...form.register("date")} />
            </Field>

            <Button type="submit">Submit</Button>
          </FieldGroup>
        </form>
      </div>
    </Modal>
  );
}
