'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(6, {
    message: 'Please enter a valid phone number.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export default function Contact() {
  const t = useTranslations('Contact');
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    
    toast({
      title: t('form.success.title'),
      description: t('form.success.description'),
    });
    
    form.reset();
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t('info.address.title'),
      content: ['Musterstraße 123', '36088 Hünfeld', 'Deutschland'],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: t('info.phone.title'),
      content: ['+49 (0) 6652 12345', t('info.phone.emergency')],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: t('info.email.title'),
      content: ['info@zahnarzt-huenfeld.de'],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('info.hours.title'),
      content: [
        t('info.hours.weekdays'),
        t('info.hours.friday'),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
            <p className="text-lg text-gray-600 mb-12">{t('subtitle')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex space-x-4">
                  <div className="flex-shrink-0 text-primary">{info.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.content.map((line) => (
                      <p key={line} className="text-gray-600">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="mt-12 h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.532892315165!2d9.763234776897392!3d50.67276637160447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a3359b44444444%3A0x3b3b3b3b3b3b3b3b!2sH%C3%BCnfeld!5e0!3m2!1sen!2sde!4v1620000000000!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">{t('form.title')}</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('form.name')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('form.namePlaceholder')} {...field} />
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
                      <FormLabel>{t('form.email')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('form.emailPlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('form.phone')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('form.phonePlaceholder')} {...field} />
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
                      <FormLabel>{t('form.message')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('form.messagePlaceholder')}
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? t('form.submitting') : t('form.submit')}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}