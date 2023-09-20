'use client'
import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Value } from "@radix-ui/react-select";
import { useState, type BaseSyntheticEvent } from "react";


const FormSchema = z.object({
  category: z
    .string(),
  direction: z
    .boolean()
})

const defaultValues = {
  category: "id",
  direction: true
};

export function SortSpeciesSelect() {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = (input: FormData) => {

  }

  return (
    <Form {...form}>
      <form onSubmit={(e: BaseSyntheticEvent) => void form.handleSubmit(onSubmit)(e)}>
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sort by:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={"id"}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="id">ID order</SelectItem>
                  <SelectItem value="total_population Increasing">Population Increasing</SelectItem>
                  <SelectItem value="total_population Decreasing">Population Decreasing</SelectItem>
                  <SelectItem value="common_name">Alphabetically A to Z</SelectItem>
                  <SelectItem value="common_name">Alphabetically Z to A</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
