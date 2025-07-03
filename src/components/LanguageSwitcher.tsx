import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-sage-600" />
      <Select value={language} onValueChange={(value: 'pl' | 'fr' | 'it' | 'en' | 'ar') => setLanguage(value)}>
        <SelectTrigger className="w-20 h-8 border-sage-300 focus:ring-sage-500">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pl">PL</SelectItem>
          <SelectItem value="fr">FR</SelectItem>
          <SelectItem value="it">IT</SelectItem>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="ar">AR</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
