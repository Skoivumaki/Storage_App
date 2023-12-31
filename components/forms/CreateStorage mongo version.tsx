"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { StorageValidation } from "@/lib/validations/storagemongo";
import { createStorage } from "@/lib/actions/storage.actions";

interface Props {
  id: string;
  client: string;
  storages: number;
}

function CreateStorage({ id, client, storages }: Props) {
  const router = useRouter();
  const form = useForm<z.input<typeof StorageValidation>>({
    resolver: zodResolver(StorageValidation),
    defaultValues: {
      storageName: "",
      storageCapacity: "",
      streetName: "",
      city: "",
      postcode: "",
      deliveryInstructions: "",
      note: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof StorageValidation>) => {
    try {

      const storageData = {
        storageName: values.storageName,
        storageCapacity: values.storageCapacity,
        address: {
          streetName: values.storageName,
          city: values.city,
          postcode: values.postcode,
        },
        deliveryInstructions: values.deliveryInstructions,
        note: values.note,
      };

      createStorage(storageData, client);

      router.push("/customers/" + id);
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Log Zod validation errors
        console.error("Zod Validation Errors:", error.errors);
      } else {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10 mt-10"
      >
        <FormField
          control={form.control}
          name="storageName"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Storage Name
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Storage name usually by street name" className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="storageCapacity"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Storage Capacity
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="20" className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="streetName"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Street Name
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Kuusikuja" className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                City
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Espoo" className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="postcode"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Postcode
              </FormLabel>
              <FormControl>
                <Input type="text" className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deliveryInstructions"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Delivery Instructions
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Door code, how to access etc" className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Note
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Extra information" className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-primary-500">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default CreateStorage;
