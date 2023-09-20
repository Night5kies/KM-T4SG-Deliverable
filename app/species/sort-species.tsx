'use client'
import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";



const FormSchema = z.object({
  category: z
    .string(),
  direction: z
    .boolean()
})

export function SortSpeciesSelect() {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
  });


  return (
    <Form {...form}>
            <FormItem>
              <FormLabel>Sort by:</FormLabel>
              <Select defaultValue={"id"}>
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
    </Form>
  )
}
