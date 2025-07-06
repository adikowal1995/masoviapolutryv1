import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    country: '',
    productType: '',
    quantity: '',
    message: '',
    newsletter: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS configuration
      const { serviceId, templateId, publicKey } = emailjsConfig;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        country: formData.country,
        product_type: formData.productType,
        quantity: formData.quantity,
        message: formData.message,
        newsletter: formData.newsletter ? 'Yes' : 'No',
        to_name: 'Masovia Poultry Team'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: t('form.success_title'),
        description: t('form.success_description'),
      });

      // Reset form
      setFormData({
        company: '',
        name: '',
        email: '',
        phone: '',
        country: '',
        productType: '',
        quantity: '',
        message: '',
        newsletter: false
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="border-sage-100">
      <CardHeader>
        <CardTitle className="text-2xl text-sage-800">{t('form.title')}</CardTitle>
        <CardDescription>
          {t('form.description')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">{t('form.company')}</Label>
              <Input
                id="company"
                type="text"
                placeholder={t('form.company_placeholder')}
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                required
                disabled={isLoading}
                className="border-sage-200 focus:border-sage-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">{t('form.name')}</Label>
              <Input
                id="name"
                type="text"
                placeholder={t('form.name_placeholder')}
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                disabled={isLoading}
                className="border-sage-200 focus:border-sage-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t('form.email')}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t('form.email_placeholder')}
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                disabled={isLoading}
                className="border-sage-200 focus:border-sage-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t('form.phone')}</Label>
              <Input
                id="phone"
                type="tel"
                placeholder={t('form.phone_placeholder')}
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                disabled={isLoading}
                className="border-sage-200 focus:border-sage-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="country">{t('form.country')}</Label>
              <Select onValueChange={(value) => handleInputChange('country', value)} disabled={isLoading}>
                <SelectTrigger className="border-sage-200 focus:border-sage-500">
                  <SelectValue placeholder={t('form.country_placeholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="germany">{t('country.germany')}</SelectItem>
                  <SelectItem value="france">{t('country.france')}</SelectItem>
                  <SelectItem value="uk">{t('country.uk')}</SelectItem>
                  <SelectItem value="netherlands">{t('country.netherlands')}</SelectItem>
                  <SelectItem value="italy">{t('country.italy')}</SelectItem>
                  <SelectItem value="spain">{t('country.spain')}</SelectItem>
                  <SelectItem value="czech">{t('country.czech')}</SelectItem>
                  <SelectItem value="slovakia">{t('country.slovakia')}</SelectItem>
                  <SelectItem value="saudi_arabia">{t('country.saudi_arabia')}</SelectItem>
                  <SelectItem value="other">{t('country.other')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="productType">{t('form.product_type')}</Label>
              <Select onValueChange={(value) => handleInputChange('productType', value)} disabled={isLoading}>
                <SelectTrigger className="border-sage-200 focus:border-sage-500">
                  <SelectValue placeholder={t('form.product_type_placeholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="breast">{t('product_type.breast')}</SelectItem>
                  <SelectItem value="wings">{t('product_type.wings')}</SelectItem>
                  <SelectItem value="quarters">{t('product_type.quarters')}</SelectItem>
                  <SelectItem value="whole">{t('product_type.whole')}</SelectItem>
                  <SelectItem value="offal">{t('product_type.offal')}</SelectItem>
                  <SelectItem value="processed">{t('product_type.processed')}</SelectItem>
                  <SelectItem value="mix">{t('product_type.mix')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">{t('form.quantity')}</Label>
            <Input
              id="quantity"
              type="text"
              placeholder={t('form.quantity_placeholder')}
              value={formData.quantity}
              onChange={(e) => handleInputChange('quantity', e.target.value)}
              disabled={isLoading}
              className="border-sage-200 focus:border-sage-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t('form.message')}</Label>
            <Textarea
              id="message"
              placeholder={t('form.message_placeholder')}
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              disabled={isLoading}
              className="border-sage-200 focus:border-sage-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
              disabled={isLoading}
            />
            <Label htmlFor="newsletter" className="text-sm text-gray-600">
              {t('form.newsletter')}
            </Label>
          </div>

          <Button 
            type="submit" 
            size="lg" 
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                {t('form.submit')}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
