import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Mail, MapPin, Award, Truck, Shield, Globe } from "lucide-react";
import ContactForm from '../components/ContactForm';
import ProductCard from '../components/ProductCard';
import CertificationBadge from '../components/CertificationBadge';
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PD</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-800">Masovia Polutry</h1>
                <p className="text-sm text-green-600">Eksporter najwyższej jakości</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#produkty" className="text-green-700 hover:text-green-900 font-medium transition-colors">Produkty</a>
              <a href="#o-nas" className="text-green-700 hover:text-green-900 font-medium transition-colors">O nas</a>
              <a href="#certyfikaty" className="text-green-700 hover:text-green-900 font-medium transition-colors">Certyfikaty</a>
              <a href="#kontakt" className="text-green-700 hover:text-green-900 font-medium transition-colors">Kontakt</a>
            </div>
            <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2">
              Zapytaj o ofertę
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Najwyższa Jakość<br />
              <span className="text-yellow-300">Polskiego Drobiu</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Zaufany eksporter mięsa drobiowego dla importerów, hurtowni i sieci detalicznych w całej Europie, Azji i na Bliskim Wschodzie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold px-8 py-4 text-lg">
                Pobierz katalog produktów
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Skontaktuj się z nami
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-16 text-white fill-current">
            <path d="M0,50 C480,100 960,0 1440,50 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-green-800">100% Jakość</h3>
              <p className="text-gray-600">Ścisła kontrola na każdym etapie produkcji</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-green-800">Certyfikaty</h3>
              <p className="text-gray-600">HACCP, ISO 22000, GlobalG.A.P.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-green-800">Szybka Dostawa</h3>
              <p className="text-gray-600">Sprawna logistyka międzynarodowa</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-green-800">Globalny Zasięg</h3>
              <p className="text-gray-600">Eksport do ponad 30 krajów</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produkty" className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Nasze Produkty</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy pełną gamę najwyższej jakości mięsa drobiowego, dostosowaną do potrzeb różnych rynków międzynarodowych
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard title="Piersi z kurczaka" description="Premium filety bez kości, idealne dla gastronomii i przetwórstwa" features={["Bez antybiotyków", "Chłodzone", "Mrożone dostępne"]} image="photo-1465146344425-f00d5f5c8f07" />
            <ProductCard title="Skrzydełka" description="Soczyste skrzydełka w różnych formatach i rozmiarach" features={["Różne cięcia", "Świeże i mrożone", "Pakowanie na zamówienie"]} image="photo-1506744038136-46273834b3fb" />
            <ProductCard title="Ćwiartki" description="Ćwiartki górne i dolne dla hurtowni i sieci handlowych" features={["Optymalne opakowanie", "Długa trwałość", "Konkurencyjne ceny"]} image="photo-1517022812141-23620dba5c23" />
            <ProductCard title="Cały kurczak" description="Kurczaki całe o różnej wadze, dla różnych zastosowań" features={["Waga 1-2.5kg", "Klasa A", "Certyfikowane pochodzenie"]} image="photo-1493962853295-0fd70327578a" />
            <ProductCard title="Podroby" description="Wysokiej jakości podroby dla wymagających klientów" features={["Serca, żołądki", "Wątróbki", "Kontrola weteryjna"]} image="photo-1465379944081-7f47de8d74ac" />
            <ProductCard title="Przetwory" description="Gotowe produkty i półprodukty według specyfikacji klienta" features={["Według receptur", "Private label", "Własna marka"]} image="photo-1465146344425-f00d5f5c8f07" />
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4">
              Zobacz pełny katalog produktów
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certyfikaty" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">Certyfikaty i Standardy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nasze produkty spełniają najwyższe międzynarodowe standardy jakości i bezpieczeństwa żywności
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <CertificationBadge name="HACCP" description="System analizy zagrożeń i krytycznych punktów kontroli" icon={<Shield className="h-12 w-12 text-green-600" />} />
            <CertificationBadge name="ISO 22000" description="Międzynarodowy standard zarządzania bezpieczeństwem żywności" icon={<Award className="h-12 w-12 text-green-600" />} />
            <CertificationBadge name="GlobalG.A.P." description="Globalne standardy dobrej praktyki rolniczej" icon={<CheckCircle className="h-12 w-12 text-green-600" />} />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="o-nas" className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">O Firmie Polski Drób Premium</h2>
              <p className="text-lg text-gray-700 mb-6">
                Od ponad 15 lat jesteśmy wiodącym eksporterem polskiego drobiu, który zdobył zaufanie klientów w całej Europie, Azji i na Bliskim Wschodzie. Nasza misja to dostarczanie najwyższej jakości mięsa drobiowego przy zachowaniu najwyższych standardów bezpieczeństwa i świeżości.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Współpracujemy z najlepszymi polskimi hodowcami i przetwórniami, zapewniając pełną transparentność łańcucha dostaw i ścisłą kontrolę jakości na każdym etapie produkcji.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-3xl font-bold text-green-800">15+</h3>
                  <p className="text-gray-600">Lat doświadczenia</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-3xl font-bold text-green-800">30+</h3>
                  <p className="text-gray-600">Krajów eksportu</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-3xl font-bold text-green-800">500+</h3>
                  <p className="text-gray-600">Zadowolonych klientów</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-3xl font-bold text-green-800">99.9%</h3>
                  <p className="text-gray-600">Jakość produktów</p>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                Poznaj naszą historię
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-4xl">PD</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Polski Drób Premium</h3>
                  <p className="text-green-600">Trusted Quality Since 2009</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">Skontaktuj się z nami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Gotowi na współpracę? Wyślij nam zapytanie ofertowe, a nasz zespół ekspertów skontaktuje się z Tobą w ciągu 24 godzin.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-6">Informacje kontaktowe</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Telefon</h4>
                    <p className="text-gray-600">+48 123 456 789</p>
                    <p className="text-gray-600">+48 987 654 321</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Email</h4>
                    <p className="text-gray-600">export@polskidrob.pl</p>
                    <p className="text-gray-600">info@polskidrob.pl</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Adres</h4>
                    <p className="text-gray-600">ul. Przemysłowa 15</p>
                    <p className="text-gray-600">00-001 Warszawa, Polska</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">Godziny pracy</h4>
                <p className="text-gray-700">Poniedziałek - Piątek: 8:00 - 18:00</p>
                <p className="text-gray-700">Sobota: 9:00 - 14:00</p>
                <p className="text-gray-700">Niedziela: Zamknięte</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Rozpocznij współpracę już dziś</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
            Dołącz do grona naszych zadowolonych klientów z całego świata. Polski drób premium to gwarancja jakości, którą docenią Twoi klienci.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold px-8 py-4">
              Zapytaj o ofertę specjalną
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent px-8 py-4">
              Umów spotkanie
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">PD</span>
                </div>
                <span className="text-xl font-bold">Polski Drób Premium</span>
              </div>
              <p className="text-green-200">
                Wiodący eksporter najwyższej jakości polskiego drobiu na rynki międzynarodowe.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Produkty</h4>
              <ul className="space-y-2 text-green-200">
                <li>Piersi z kurczaka</li>
                <li>Skrzydełka</li>
                <li>Ćwiartki</li>
                <li>Cały kurczak</li>
                <li>Podroby</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Firma</h4>
              <ul className="space-y-2 text-green-200">
                <li>O nas</li>
                <li>Certyfikaty</li>
                <li>Jakość</li>
                <li>Kariera</li>
                <li>Aktualności</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-green-200">
                <li>+48 123 456 789</li>
                <li>export@polskidrob.pl</li>
                <li>ul. Przemysłowa 15</li>
                <li>00-001 Warszawa</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 Polski Drób Premium. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;