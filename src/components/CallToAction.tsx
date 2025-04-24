"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Balancer from "react-wrap-balancer";

import { Section, Container } from "@/components/ds";
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

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function CallToAction() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Section>
      <Container className="space-y-8">
        <h2 className="!my-0 text-xl font-bold">Want to talk to us?</h2>
        <p className="text-sm opacity-70 pt-4 md:text-xl">
          <Balancer>
            Send us your email and we&apos;ll get back to you!
          </Balancer>
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="md:w-96"
                      placeholder="example@fjord.dev"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="hidden">Lorem ipsum dolor sit amet.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="secondary">Submit</Button>
          </form>
        </Form>
      </Container>
    </Section>
  );
}

export default CallToAction;
