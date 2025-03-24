'use client';

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTransition, useState } from "react";
import { submitContactForm } from "@/actions/form";
import { useTranslations } from 'next-intl';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function ContactForm() {
  const t = useTranslations('HomePage');
  const [isPending, startTransition] = useTransition();
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  
  // Define form schema
  const formSchema = z.object({
    name: z.string().min(2, {
      message: t('contact.form.validation.nameRequired') || "Name must be at least 2 characters."
    }),
    email: z.string().email({
      message: t('contact.form.validation.emailInvalid') || "Please enter a valid email address."
    }),
    message: z.string().min(10, {
      message: t('contact.form.validation.messageLength') || "Message must be at least 10 characters."
    }),
  });
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormStatus(null);

    startTransition(async () => {
      try {
        const result = await submitContactForm(values);
        
        if (result.success) {
          form.reset();
          setFormStatus({
            success: true,
            message: t('contact.form.successMessage') || "Your message has been sent successfully!"
          });
        } else {
          setFormStatus({
            success: false,
            message: result.message || t('contact.form.errorMessage') || "Failed to send your message. Please try again."
          });
          
          // If there are validation errors, set them in the form
          if (result.errors) {
            result.errors.forEach(error => {
              form.setError(error.path as any, { 
                type: "server", 
                message: error.message 
              });
            });
          }
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setFormStatus({
          success: false,
          message: t('contact.form.errorMessage') || "An unexpected error occurred. Please try again later."
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form id="contact" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-4 rounded-lg shadow-sm">
        {formStatus && (
          <Alert variant={formStatus.success ? "default" : "destructive"}>
            <AlertDescription>{formStatus.message}</AlertDescription>
          </Alert>
        )}
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('contact.form.name')}</FormLabel>
              <FormControl>
                <Input placeholder={t('contact.form.namePlaceholder') || "John Doe"} {...field} />
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
              <FormLabel>{t('contact.form.email')}</FormLabel>
              <FormControl>
                <Input placeholder={t('contact.form.emailPlaceholder') || "john@example.com"} {...field} />
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
              <FormLabel>{t('contact.form.message')}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t('contact.form.messagePlaceholder') || "Your message here..."} 
                  className="h-24 resize-none"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={isPending}
        >
          {isPending ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t('contact.form.sending') || "Sending..."}
            </>
          ) : (
            t('contact.form.submit') || "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
} 