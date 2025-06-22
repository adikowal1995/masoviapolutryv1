
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Zapytanie wysłane!",
      description: "Skontaktujemy się z Państwem w ciągu 24 godzin.",
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
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="border-green-100">
      <CardHeader>
        <CardTitle className="text-2xl text-green-800">Formularz zapytania ofertowego</CardTitle>
        <CardDescription>
          Wypełnij formularz, a nasz zespład przygotuje dla Ciebie spersonalizowaną ofertę
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Nazwa firmy *</Label>
              <Input
                id="company"
                type="text"
                placeholder="Wpisz nazwę firmy"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                required
                className="border-green-200 focus:border-green-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Imię i nazwisko *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Wpisz imię i nazwisko"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="border-green-200 focus:border-green-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="twoj@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="border-green-200 focus:border-green-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+48 123 456 789"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="border-green-200 focus:border-green-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="country">Kraj *</Label>
              <Select onValueChange={(value) => handleInputChange('country', value)}>
                <SelectTrigger className="border-green-200 focus:border-green-500">
                  <SelectValue placeholder="Wybierz kraj" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="germany">Niemcy</SelectItem>
                  <SelectItem value="france">Francja</SelectItem>
                  <SelectItem value="uk">Wielka Brytania</SelectItem>
                  <SelectItem value="netherlands">Holandia</SelectItem>
                  <SelectItem value="italy">Włochy</SelectItem>
                  <SelectItem value="spain">Hiszpania</SelectItem>
                  <SelectItem value="czech">Czechy</SelectItem>
                  <SelectItem value="slovakia">Słowacja</SelectItem>
                  <SelectItem value="other">Inny</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="productType">Typ produktu *</Label>
              <Select onValueChange={(value) => handleInputChange('productType', value)}>
                <SelectTrigger className="border-green-200 focus:border-green-500">
                  <SelectValue placeholder="Wybierz produkt" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="breast">Piersi z kurczaka</SelectItem>
                  <SelectItem value="wings">Skrzydełka</SelectItem>
                  <SelectItem value="quarters">Ćwiartki</SelectItem>
                  <SelectItem value="whole">Cały kurczak</SelectItem>
                  <SelectItem value="offal">Podroby</SelectItem>
                  <SelectItem value="processed">Przetwory</SelectItem>
                  <SelectItem value="mix">Produkty mieszane</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Przewidywana ilość miesięczna</Label>
            <Input
              id="quantity"
              type="text"
              placeholder="np. 10 ton, 5000 kg"
              value={formData.quantity}
              onChange={(e) => handleInputChange('quantity', e.target.value)}
              className="border-green-200 focus:border-green-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Dodatkowe informacje</Label>
            <Textarea
              id="message"
              placeholder="Opisz swoje wymagania, preferowane opakowanie, certyfikaty, terminy dostaw..."
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="border-green-200 focus:border-green-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
            />
            <Label htmlFor="newsletter" className="text-sm text-gray-600">
              Chcę otrzymywać informacje o nowych produktach i promocjach
            </Label>
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
          >
            <Send className="mr-2 h-5 w-5" />
            Wyślij zapytanie
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
