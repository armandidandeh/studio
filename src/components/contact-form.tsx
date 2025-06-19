
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from 'lucide-react';
import { useState } from "react";
import { sendContactEmail, type ContactEmailInput } from '@/ai/flows/send-contact-email-flow';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must not exceed 500 characters." }),
});

export default function ContactForm() {
  const { toast } = useToast();
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
  const [submissionMessageType, setSubmissionMessageType] = useState<'success' | 'error'>('success');


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmissionMessage(null);

    try {
      const result = await sendContactEmail(values as ContactEmailInput);

      if (result.success) {
        form.reset();
        setSubmissionMessage("Thank you for reaching out. I'll get back to you soon.");
        setSubmissionMessageType('success');
        setTimeout(() => setSubmissionMessage(null), 5000); 
      } else {
        const errorMessage = result.error || "Could not send your message. Please try again later.";
        setSubmissionMessage(errorMessage);
        setSubmissionMessageType('error');
        toast({
          title: "Error Sending Message",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      const errorMessage = "An unexpected error occurred. Please try again.";
      setSubmissionMessage(errorMessage);
      setSubmissionMessageType('error');
      toast({
        title: "Submission Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  }

  return (
    <AccordionItem value="contact" className="border-none">
      <Card className="shadow-lg mb-4 overflow-hidden">
        <AccordionTrigger className="p-6 text-left w-full hover:no-underline focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-1 rounded-md [&[data-state=open]>svg]:text-accent">
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center gap-3">
              <Send className="w-8 h-8 text-primary" />
              <h2 className="font-headline text-3xl text-primary">Get In Touch</h2>
            </div>
            <p className="text-md text-muted-foreground mt-1"> 
              Have a project in mind or just want to say hi? Fill out the form below.
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-6 pt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="text-md p-3 focus:ring-accent" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md">Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} className="text-md p-3 focus:ring-accent" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." {...field} rows={5} className="text-md p-3 focus:ring-accent" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 transition-colors" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : "Send Message"}
              </Button>
            </form>
          </Form>
          {submissionMessage && (
            <p className={`mt-4 text-center text-sm ${submissionMessageType === 'error' ? 'text-destructive' : 'text-primary'}`}>
              {submissionMessage}
            </p>
          )}
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
