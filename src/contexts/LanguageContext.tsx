import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pl' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pl: {
    // Header
    'nav.products': 'Asortyment',
    'nav.about': 'O firmie',
    'nav.quality': 'Jakość',
    'nav.certificates': 'Certyfikaty',
    'nav.contact': 'Kontakt',
    'nav.download_price': 'Skontaktuj się',
    
    // Hero Section
    'hero.badge': 'Wiodący Eksporter w Polsce',
    'hero.title': 'Polski Drób',
    'hero.title_highlight': 'Najwyższej Jakości',
    'hero.description': 'Specjalizujemy się w eksporcie świeżego i mrożonego mięsa drobiowego. Dostarczamy produkty najwyższej jakości do największych sieci handlowych, zakładów przetwórczych i importerów w ponad 40 krajach świata.',
    'hero.cta_offer': 'Sprawdź naszą ofertę',
    'hero.cta_phone': '+48 123 456 789',
    'hero.stats.years': 'lat doświadczenia',
    'hero.stats.countries': 'krajów eksportu',
    'hero.stats.tons': 'ton rocznie',
    'hero.stats.satisfaction': 'zadowolonych klientów',
    
    // Benefits Section
    'benefits.title': 'Dlaczego wybierają nas?',
    'benefits.subtitle': 'Jesteśmy liderem w eksporcie polskiego drobiu dzięki naszemu doświadczeniu i najwyższym standardom jakości',
    'benefits.quality.title': 'Pełna Kontrola Jakości',
    'benefits.quality.desc': 'Ścisła kontrola HACCP na każdym etapie produkcji. Własne laboratoria badawcze.',
    'benefits.delivery.title': 'Terminowość Dostaw',
    'benefits.delivery.desc': 'Gwarantujemy dostawy zgodnie z harmonogramem. Własna flota transportowa.',
    'benefits.team.title': 'Doświadczony Team',
    'benefits.team.desc': 'Zespół ekspertów z 20-letnim doświadczeniem w eksporcie drobiu.',
    'benefits.price.title': 'Konkurencyjne Ceny',
    'benefits.price.desc': 'Najlepsze ceny przy zachowaniu najwyższej jakości produktów.',
    
    // Products Section
    'products.title': 'Pełny Asortyment Drobiowy',
    'products.subtitle': 'Oferujemy kompletną gamę produktów drobiowych - od świeżego mięsa po produkty przetworzone. Wszystkie produkty pochodzą od certyfikowanych dostawców i są przetwarzane zgodnie z najwyższymi standardami UE.',
    'products.badge.fresh': 'Świeże mięso',
    'products.badge.frozen': 'Produkty mrożone',
    'products.badge.processed': 'Przetwory',
    'products.badge.private': 'Private label',
    
    // Product Cards
    'product.chicken_breast.title': 'Piersi z kurczaka bez kości',
    'product.chicken_breast.desc': 'Premium filety bez kości i skóry. Dostępne w różnych wagach: 140-200g, 200-300g, powyżej 300g. Pakowane próżniowo.',
    'product.chicken_wings.title': 'Skrzydełka kurczaka',
    'product.chicken_wings.desc': 'Świeże skrzydełka w różnych formatach: całe, 2-segmentowe, mid joints, drumettes. Różne kategorie wagowe.',
    'product.chicken_quarters.title': 'Ćwiartki kurczaka',
    'product.chicken_quarters.desc': 'Ćwiartki górne (skrzydło + pierś) i dolne (udo + podudzie). Idealne dla hurtowni i gastronomii.',
    'product.whole_chicken.title': 'Kurczak cały',
    'product.whole_chicken.desc': 'Kurczaki całe klasy A, waga 1000-2500g. Dostępne świeże i mrożone. Certyfikowane pochodzenie z polskich ferm.',
    'product.giblets.title': 'Podroby drobiowe',
    'product.giblets.desc': 'Wysokiej jakości podroby: serca, żołądki, wątróbki, szyje. Idealne do dalszego przetwórstwa.',
    'product.processed.title': 'Produkty przetworzone',
    'product.processed.desc': 'Gotowe produkty według specyfikacji klienta: nuggetsy, stripsy, kotlety. Możliwość private label.',
    'product.carcasses.title': 'Tuszki drobiowe',
    'product.carcasses.desc': 'Świeże i mrożone tuszki drobiowe, różne wagi i pakowania. Idealne do dalszego przetwórstwa i eksportu.',
    'product.drumsticks.title': 'Podudzia',
    'product.drumsticks.desc': 'Podudzia z kurczaka klasy A, dostępne świeże i mrożone. Pakowane próżniowo lub MAP.',
    'product.cut_feet.title': 'Łapy cięte',
    'product.cut_feet.desc': 'Łapy drobiowe cięte i sortowane, eksportowane głównie na rynki azjatyckie. Pakowanie na zamówienie.',
    
    // Special Products
    'special.title': 'Specjalne Produkty na Zamówienie',
    'special.subtitle': 'Przygotowujemy produkty według indywidualnych specyfikacji klientów. Oferujemy usługi private label oraz packaging zgodny z wymaganiami rynków docelowych.',
    'special.production.title': 'Własne Linie Produkcyjne',
    'special.production.desc': 'Nowoczesne zakłady z certyfikatami EU',
    'special.private.title': 'Private Label',
    'special.private.desc': 'Produkty pod marką klienta',
    'special.export.title': 'Export Worldwide',
    'special.export.desc': 'Dostawy do 40+ krajów',
    'special.cta': 'Pobierz pełny katalog produktów (PDF)',
    
    // Quality Section
    'quality.title': 'Najwyższe Standardy Jakości',
    'quality.description': 'Nasza filozofia opiera się na bezwzględnym przestrzeganiu najwyższych standardów jakości i bezpieczeństwa żywności. Współpracujemy wyłącznie z certyfikowanymi farmami i zakładami, które spełniają surowe wymagania europejskie.',
    'quality.control.title': 'Kontrola na każdym etapie',
    'quality.control.desc': 'Od farmy do finalnego produktu - wielostopniowa kontrola jakości',
    'quality.lab.title': 'Własne laboratoria',
    'quality.lab.desc': 'Badania mikrobiologiczne i chemiczne w akredytowanych laboratoriach',
    'quality.cold.title': 'Chłodny łańcuch dostaw',
    'quality.cold.desc': 'Nieprzerwany łańcuch chłodniczy od uboju do klienta końcowego',
    'quality.trace.title': 'Śledzenie pochodzenia',
    'quality.trace.desc': 'Pełna traceability - od farmy do półki sklepowej',
    'quality.guarantee': '100% Bezpieczeństwo',
    'quality.guarantee.sub': 'Gwarancja najwyższej jakości',
    
    // Certifications
    'cert.title': 'Certyfikaty i Akredytacje',
    'cert.subtitle': 'Posiadamy wszystkie niezbędne certyfikaty i akredytacje wymagane do eksportu produktów drobiowych. Nasze zakłady są regularnie kontrolowane przez polskie i międzynarodowe organy certyfikujące.',
    'cert.haccp.desc': 'System analizy zagrożeń i krytycznych punktów kontroli zgodny z wymogami UE',
    'cert.iso.desc': 'Międzynarodowy standard systemu zarządzania bezpieczeństwem żywności',
    'cert.gap.desc': 'Globalne standardy dobrej praktyki rolniczej i hodowlanej',
    'cert.ifs.desc': 'International Featured Standards dla bezpieczeństwa i jakości żywności',
    'cert.additional.title': 'Dodatkowe Certyfikaty Eksportowe',
    'cert.vet.title': 'Certyfikat Weterynaryjny',
    'cert.vet.desc': 'Wydawany przez PIW dla każdej partii eksportowej',
    'cert.halal.title': 'Halal Certification',
    'cert.halal.desc': 'Certyfikacja dla rynków muzułmańskich',
    'cert.eu.title': 'EU Health Certificate',
    'cert.eu.desc': 'Certyfikat zdrowia dla eksportu w ramach UE',
    
    // About Section
    'about.title': 'Lider Eksportu Polskiego Drobiu',
    'about.description1': 'Masovia Poultry to wiodący eksporter polskiego drobiu z ponad 20-letnim doświadczeniem na rynku międzynarodowym. Jesteśmy dumni z tego, że polski drób cieszy się uznaniem na całym świecie dzięki naszej pracy i zaangażowaniu.',
    'about.description2': 'Współpracujemy z największymi sieciami handlowymi w Europie, Azji i na Bliskim Wschodzie. Nasze produkty trafiają do sklepów w Niemczech, Francji, Wielkiej Brytanii, Holandii, krajach Bałkańskich oraz na rynki azjatyckie.',
    'about.stats.tons': 'ton rocznie',
    'about.stats.countries': 'krajów eksportu',
    'about.stats.clients': 'zadowolonych klientów',
    'about.stats.delivery': 'punktualność dostaw',
    'about.cta': 'Poznaj naszą historię',
    'about.company': 'Masovia Poultry',
    'about.tagline': 'Polski drób premium od 2004',
    'about.subtitle': 'Eksport do całego świata',
    
    // Contact Section
    'contact.title': 'Rozpocznij Współpracę',
    'contact.subtitle': 'Skontaktuj się z nami już dziś i otrzymaj spersonalizowaną ofertę dostosowaną do Twoich potrzeb. Nasz zespół ekspertów odpowie na wszystkie pytania i pomoże wybrać najlepsze produkty.',
    'contact.badge.response': 'Odpowiedź w 24h',
    'contact.badge.samples': 'Darmowe próbki',
    'contact.badge.prices': 'Konkurencyjne ceny',
    'contact.info.title': 'Dane kontaktowe',
    'contact.phone.title': 'Telefon',
    'contact.phone.export': '+48 123 456 789 (Export Manager)',
    'contact.phone.sales': '+48 987 654 321 (Sales Director)',
    'contact.email.title': 'Email',
    'contact.address.title': 'Siedziba główna',
    'contact.address.street': 'ul. Przemysłowa 15',
    'contact.address.city': '05-800 Pruszków, Polska',
    'contact.hours.title': 'Godziny pracy',
    'contact.hours.weekdays': 'Poniedziałek - Piątek: 8:00 - 18:00',
    'contact.hours.saturday': 'Sobota: 9:00 - 14:00',
    'contact.hours.sunday': 'Niedziela: Zamknięte',
    'contact.hours.urgent': 'W przypadku pilnych spraw eksportowych jesteśmy dostępni 24/7',
    
    // CTA Section
    'cta.title': 'Dołącz do Grona Naszych Partnerów',
    'cta.subtitle': 'Współpracujemy z największymi importerami, sieciami handlowymi i zakładami przetwórczymi w Europie. Polski drób premium to gwarancja sukcesu na Twoim rynku.',
    'cta.tesco': 'Sieć handlowa - UK',
    'cta.auchan': 'Hipermarkety - Europa',
    'cta.metro': 'Cash & Carry - EMEA',
    'cta.special_offer': 'Otrzymaj ofertę specjalną',
    'cta.meeting': 'Umów spotkanie biznesowe',
    
    // Footer
    'footer.tagline': 'Wiodący eksporter najwyższej jakości polskiego drobiu na rynki międzynarodowe.',
    'footer.company_info': 'Polski drób premium od 2004',
    'footer.products.title': 'Produkty',
    'footer.products.breast': 'Piersi z kurczaka',
    'footer.products.wings': 'Skrzydełka kurczaka',
    'footer.products.quarters': 'Ćwiartki kurczaka',
    'footer.products.whole': 'Kurczak cały',
    'footer.products.giblets': 'Podroby drobiowe',
    'footer.products.processed': 'Produkty przetworzone',
    'footer.company.title': 'Firma',
    'footer.company.about': 'O nas',
    'footer.company.history': 'Historia firmy',
    'footer.company.certificates': 'Certyfikaty jakości',
    'footer.company.farms': 'Nasze farmy',
    'footer.company.career': 'Kariera',
    'footer.company.news': 'Aktualności',
    'footer.contact.title': 'Kontakt',
    'footer.copyright': '© 2024 Masovia Poultry. Wszystkie prawa zastrzeżone. | Polski drób premium | Eksport worldwide',
  },
  fr: {
    // Header
    'nav.products': 'Assortiment',
    'nav.about': 'À propos',
    'nav.quality': 'Qualité',
    'nav.certificates': 'Certificats',
    'nav.contact': 'Contact',
    'nav.download_price': 'Télécharger tarifs',
    
    // Hero Section
    'hero.badge': 'Exportateur Leader en Pologne',
    'hero.title': 'Volaille Polonaise',
    'hero.title_highlight': 'de Qualité Supérieure',
    'hero.description': 'Nous nous spécialisons dans l\'exportation de viande de volaille fraîche et surgelée. Nous livrons des produits de la plus haute qualité aux plus grandes chaînes de distribution, entreprises de transformation et importateurs dans plus de 40 pays du monde.',
    'hero.cta_offer': 'Découvrez notre offre',
    'hero.cta_phone': '+48 123 456 789',
    'hero.stats.years': 'années d\'expérience',
    'hero.stats.countries': 'pays d\'exportation',
    'hero.stats.tons': 'tonnes par an',
    'hero.stats.satisfaction': 'clients satisfaits',
    
    // Benefits Section
    'benefits.title': 'Pourquoi nous choisir ?',
    'benefits.subtitle': 'Nous sommes leader dans l\'exportation de volaille polonaise grâce à notre expérience et aux plus hauts standards de qualité',
    'benefits.quality.title': 'Contrôle Qualité Complet',
    'benefits.quality.desc': 'Contrôle HACCP strict à chaque étape de production. Laboratoires de recherche propres.',
    'benefits.delivery.title': 'Ponctualité des Livraisons',
    'benefits.delivery.desc': 'Nous garantissons les livraisons selon le calendrier. Flotte de transport propre.',
    'benefits.team.title': 'Équipe Expérimentée',
    'benefits.team.desc': 'Équipe d\'experts avec 20 ans d\'expérience dans l\'exportation de volaille.',
    'benefits.price.title': 'Prix Compétitifs',
    'benefits.price.desc': 'Les meilleurs prix tout en maintenant la plus haute qualité des produits.',
    
    // Products Section
    'products.title': 'Assortiment Complet de Volaille',
    'products.subtitle': 'Nous offrons une gamme complète de produits de volaille - de la viande fraîche aux produits transformés. Tous les produits proviennent de fournisseurs certifiés et sont transformés selon les plus hauts standards UE.',
    'products.badge.fresh': 'Viande fraîche',
    'products.badge.frozen': 'Produits surgelés',
    'products.badge.processed': 'Transformés',
    'products.badge.private': 'Marque privée',
    
    // Product Cards
    'product.chicken_breast.title': 'Filets de poulet désossés',
    'product.chicken_breast.desc': 'Filets premium sans os ni peau. Disponibles en différents poids : 140-200g, 200-300g, plus de 300g. Emballage sous vide.',
    'product.chicken_wings.title': 'Ailes de poulet',
    'product.chicken_wings.desc': 'Ailes fraîches en différents formats : entières, 2 segments, mid joints, pilons. Différentes catégories de poids.',
    'product.chicken_quarters.title': 'Quartiers de poulet',
    'product.chicken_quarters.desc': 'Quartiers supérieurs (aile + blanc) et inférieurs (cuisse + pilon). Idéaux pour grossistes et restauration.',
    'product.whole_chicken.title': 'Poulet entier',
    'product.whole_chicken.desc': 'Poulets entiers classe A, poids 1000-2500g. Disponibles frais et surgelés. Origine certifiée des fermes polonaises.',
    'product.giblets.title': 'Abats de volaille',
    'product.giblets.desc': 'Abats de haute qualité : cœurs, gésiers, foies, cous. Idéaux pour transformation ultérieure.',
    'product.processed.title': 'Produits transformés',
    'product.processed.desc': 'Produits finis selon spécifications client : nuggets, strips, escalopes. Possibilité marque privée.',
    'product.carcasses.title': 'Carcasses de volaille',
    'product.carcasses.desc': 'Carcasses fraîches et surgelées, différents poids et conditionnements. Idéales pour transformation et export.',
    'product.drumsticks.title': 'Pilons',
    'product.drumsticks.desc': 'Pilons de poulet de classe A, disponibles frais et surgelés. Conditionnement sous vide ou MAP.',
    'product.cut_feet.title': 'Pattes coupées',
    'product.cut_feet.desc': 'Pattes de volaille coupées et triées, principalement exportées vers l\'Asie. Conditionnement sur demande.',
    
    // Special Products
    'special.title': 'Produits Spéciaux sur Commande',
    'special.subtitle': 'Nous préparons des produits selon les spécifications individuelles des clients. Nous offrons des services de marque privée et emballage conforme aux exigences des marchés cibles.',
    'special.production.title': 'Lignes de Production Propres',
    'special.production.desc': 'Installations modernes avec certificats UE',
    'special.private.title': 'Marque Privée',
    'special.private.desc': 'Produits sous marque client',
    'special.export.title': 'Export Mondial',
    'special.export.desc': 'Livraisons vers 40+ pays',
    'special.cta': 'Télécharger le catalogue complet des produits (PDF)',
    
    // Quality Section
    'quality.title': 'Standards de Qualité les Plus Élevés',
    'quality.description': 'Notre philosophie repose sur le respect absolu des plus hauts standards de qualité et de sécurité alimentaire. Nous collaborons exclusivement avec des fermes et installations certifiées qui répondent aux exigences européennes strictes.',
    'quality.control.title': 'Contrôle à chaque étape',
    'quality.control.desc': 'De la ferme au produit final - contrôle qualité multi-niveaux',
    'quality.lab.title': 'Laboratoires propres',
    'quality.lab.desc': 'Tests microbiologiques et chimiques dans des laboratoires accrédités',
    'quality.cold.title': 'Chaîne du froid',
    'quality.cold.desc': 'Chaîne du froid ininterrompue de l\'abattage au client final',
    'quality.trace.title': 'Traçabilité d\'origine',
    'quality.trace.desc': 'Traçabilité complète - de la ferme au rayon du magasin',
    'quality.guarantee': '100% Sécurité',
    'quality.guarantee.sub': 'Garantie de la plus haute qualité',
    
    // Certifications
    'cert.title': 'Certificats et Accréditations',
    'cert.subtitle': 'Nous possédons tous les certificats et accréditations nécessaires requis pour l\'exportation de produits de volaille. Nos installations sont régulièrement contrôlées par des organismes de certification polonais et internationaux.',
    'cert.haccp.desc': 'Système d\'analyse des dangers et points critiques de contrôle conforme aux exigences UE',
    'cert.iso.desc': 'Standard international du système de gestion de la sécurité alimentaire',
    'cert.gap.desc': 'Standards globaux de bonnes pratiques agricoles et d\'élevage',
    'cert.ifs.desc': 'International Featured Standards pour la sécurité et qualité alimentaire',
    'cert.additional.title': 'Certificats d\'Exportation Supplémentaires',
    'cert.vet.title': 'Certificat Vétérinaire',
    'cert.vet.desc': 'Délivré par PIW pour chaque lot d\'exportation',
    'cert.halal.title': 'Certification Halal',
    'cert.halal.desc': 'Certification pour les marchés musulmans',
    'cert.eu.title': 'Certificat Sanitaire UE',
    'cert.eu.desc': 'Certificat de santé pour l\'exportation dans l\'UE',
    
    // About Section
    'about.title': 'Leader de l\'Exportation de Volaille Polonaise',
    'about.description1': 'Masovia Poultry est un exportateur leader de volaille polonaise avec plus de 20 ans d\'expérience sur le marché international. Nous sommes fiers que la volaille polonaise soit reconnue dans le monde entier grâce à notre travail et engagement.',
    'about.description2': 'Nous collaborons avec les plus grandes chaînes de distribution en Europe, Asie et au Moyen-Orient. Nos produits arrivent dans les magasins en Allemagne, France, Grande-Bretagne, Pays-Bas, pays des Balkans et sur les marchés asiatiques.',
    'about.stats.tons': 'tonnes par an',
    'about.stats.countries': 'pays d\'exportation',
    'about.stats.clients': 'clients satisfaits',
    'about.stats.delivery': 'ponctualité des livraisons',
    'about.cta': 'Découvrez notre histoire',
    'about.company': 'Masovia Poultry',
    'about.tagline': 'Volaille polonaise premium depuis 2004',
    'about.subtitle': 'Export vers le monde entier',
    
    // Contact Section
    'contact.title': 'Commencez la Collaboration',
    'contact.subtitle': 'Contactez-nous dès aujourd\'hui et recevez une offre personnalisée adaptée à vos besoins. Notre équipe d\'experts répondra à toutes vos questions et vous aidera à choisir les meilleurs produits.',
    'contact.badge.response': 'Réponse en 24h',
    'contact.badge.samples': 'Échantillons gratuits',
    'contact.badge.prices': 'Prix compétitifs',
    'contact.info.title': 'Coordonnées',
    'contact.phone.title': 'Téléphone',
    'contact.phone.export': '+48 123 456 789 (Responsable Export)',
    'contact.phone.sales': '+48 987 654 321 (Directeur Commercial)',
    'contact.email.title': 'Email',
    'contact.address.title': 'Siège social',
    'contact.address.street': 'ul. Przemysłowa 15',
    'contact.address.city': '05-800 Pruszków, Pologne',
    'contact.hours.title': 'Heures d\'ouverture',
    'contact.hours.weekdays': 'Lundi - Vendredi : 8h00 - 18h00',
    'contact.hours.saturday': 'Samedi : 9h00 - 14h00',
    'contact.hours.sunday': 'Dimanche : Fermé',
    'contact.hours.urgent': 'Pour les affaires d\'exportation urgentes, nous sommes disponibles 24h/24 7j/7',
    
    // CTA Section
    'cta.title': 'Rejoignez le Cercle de Nos Partenaires',
    'cta.subtitle': 'Nous collaborons avec les plus grands importateurs, chaînes de distribution et entreprises de transformation en Europe. La volaille polonaise premium est une garantie de succès sur votre marché.',
    'cta.tesco': 'Chaîne de distribution - UK',
    'cta.auchan': 'Hypermarchés - Europe',
    'cta.metro': 'Cash & Carry - EMEA',
    'cta.special_offer': 'Recevoir une offre spéciale',
    'cta.meeting': 'Planifier un rendez-vous d\'affaires',
    
    // Footer
    'footer.tagline': 'Exportateur leader de volaille polonaise de la plus haute qualité vers les marchés internationaux.',
    'footer.company_info': 'Volaille polonaise premium depuis 2004',
    'footer.products.title': 'Produits',
    'footer.products.breast': 'Filets de poulet',
    'footer.products.wings': 'Ailes de poulet',
    'footer.products.quarters': 'Quartiers de poulet',
    'footer.products.whole': 'Poulet entier',
    'footer.products.giblets': 'Abats de volaille',
    'footer.products.processed': 'Produits transformés',
    'footer.company.title': 'Entreprise',
    'footer.company.about': 'À propos',
    'footer.company.history': 'Histoire de l\'entreprise',
    'footer.company.certificates': 'Certificats qualité',
    'footer.company.farms': 'Nos fermes',
    'footer.company.career': 'Carrière',
    'footer.company.news': 'Actualités',
    'footer.contact.title': 'Contact',
    'footer.copyright': '© 2024 Masovia Poultry. Tous droits réservés. | Volaille polonaise premium | Export mondial',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pl');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
