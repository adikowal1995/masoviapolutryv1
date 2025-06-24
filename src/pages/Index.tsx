
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Mail, MapPin, Award, Truck, Shield, Globe, Factory, Users, Clock, Star } from "lucide-react";
import ContactForm from '../components/ContactForm';
import ProductCard from '../components/ProductCard';
import CertificationBadge from '../components/CertificationBadge';

const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MP</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-800">Masovia Poultry</h1>
                <p className="text-sm text-green-600">Polski Drób Premium - Eksporter Nr 1</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#produkty" className="text-green-700 hover:text-green-900 font-medium transition-colors">Asortyment</a>
              <a href="#o-nas" className="text-green-700 hover:text-green-900 font-medium transition-colors">O firmie</a>
              <a href="#jakosc" className="text-green-700 hover:text-green-900 font-medium transition-colors">Jakość</a>
              <a href="#certyfikaty" className="text-green-700 hover:text-green-900 font-medium transition-colors">Certyfikaty</a>
              <a href="#kontakt" className="text-green-700 hover:text-green-900 font-medium transition-colors">Kontakt</a>
            </div>
            <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2">
              Pobierz cennik
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-yellow-500 text-green-900 mb-6 px-4 py-2 text-lg font-bold">
              Wiodący Eksporter w Polsce
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Polski Drób<br />
              <span className="text-yellow-300">Najwyższej Jakości</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto">
              Specjalizujemy się w eksporcie świeżego i mrożonego mięsa drobiowego. 
              Dostarczamy produkty najwyższej jakości do największych sieci handlowych, 
              zakładów przetwórczych i importerów w ponad 40 krajach świata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold px-8 py-4 text-lg">
                <Factory className="mr-2 h-5 w-5" />
                Sprawdź naszą ofertę
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                +48 123 456 789
              </Button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">20+</div>
                <div className="text-green-100">lat doświadczenia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">40+</div>
                <div className="text-green-100">krajów eksportu</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">50k</div>
                <div className="text-green-100">ton rocznie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">99.8%</div>
                <div className="text-green-100">zadowolonych klientów</div>
              </div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Dlaczego wybierają nas?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jesteśmy liderem w eksporcie polskiego drobiu dzięki naszemu doświadczeniu i najwyższym standardom jakości
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-green-800">Pełna Kontrola Jakości</h3>
              <p className="text-gray-600">Ścisła kontrola HACCP na każdym etapie produkcji. Własne laboratoria badawcze.</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200">
                <Clock className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-green-800">Terminowość Dostaw</h3>
              <p className="text-gray-600">Gwarantujemy dostawy zgodnie z harmonogramem. Własna flota transportowa.</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-green-800">Doświadczony Team</h3>
              <p className="text-gray-600">Zespół ekspertów z 20-letnim doświadczeniem w eksporcie drobiu.</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200">
                <Star className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-green-800">Konkurencyjne Ceny</h3>
              <p className="text-gray-600">Najlepsze ceny przy zachowaniu najwyższej jakości produktów.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produkty" className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-green-800 mb-6">Pełny Asortyment Drobiowy</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Oferujemy kompletną gamę produktów drobiowych - od świeżego mięsa po produkty przetworzone. 
              Wszystkie produkty pochodzą od certyfikowanych dostawców i są przetwarzane zgodnie z najwyższymi standardami UE.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2 border-green-300 text-green-700">Świeże mięso</Badge>
              <Badge variant="outline" className="px-4 py-2 border-green-300 text-green-700">Produkty mrożone</Badge>
              <Badge variant="outline" className="px-4 py-2 border-green-300 text-green-700">Przetwory</Badge>
              <Badge variant="outline" className="px-4 py-2 border-green-300 text-green-700">Private label</Badge>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ProductCard 
              title="Piersi z kurczaka bez kości" 
              description="Premium filety bez kości i skóry. Dostępne w różnych wagach: 140-200g, 200-300g, powyżej 300g. Pakowane próżniowo." 
              features={["Bez antybiotyków", "Klasa A", "Pakowanie próżniowe", "Shelf life 10 dni"]} 
              image="photo-1548550023-2bdb3c5beed7" 
            />
            <ProductCard 
              title="Skrzydełka kurczaka" 
              description="Świeże skrzydełka w różnych formatach: całe, 2-segmentowe, mid joints, drumettes. Różne kategorie wagowe." 
              features={["Różne cięcia", "Świeże i mrożone", "Opakowania od 1kg do 15kg", "Export quality"]} 
              image="photo-1444731961956-751ed90baaa5" 
            />
            <ProductCard 
              title="Ćwiartki kurczaka" 
              description="Ćwiartki górne (skrzydło + pierś) i dolne (udo + podudzie). Idealne dla hurtowni i gastronomii." 
              features={["Górne i dolne", "Różne wagi", "Opakowanie MAP", "Długa trwałość"]} 
              image="photo-1518191319892-1c2dcb9836c3" 
            />
            <ProductCard 
              title="Kurczak cały" 
              description="Kurczaki całe klasy A, waga 1000-2500g. Dostępne świeże i mrożone. Certyfikowane pochodzenie z polskich ferm." 
              features={["Waga 1-2.5kg", "Klasa A premium", "Własne farmy", "Certyfikat pochodzenia"]} 
              image="photo-1504439904031-93ded9f93e4e" 
            />
            <ProductCard 
              title="Podroby drobiowe" 
              description="Wysokiej jakości podroby: serca, żołądki, wątróbki, szyje. Idealne do dalszego przetwórstwa." 
              features={["Serca, żołądki, wątróbki", "Świeże i mrożone", "Kontrola weterynaryjna", "Pakowanie na zamówienie"]} 
              image="photo-1444665559562-dcea25ea8801" 
            />
            <ProductCard 
              title="Produkty przetworzone" 
              description="Gotowe produkty według specyfikacji klienta: nuggetsy, stripsy, kotlety. Możliwość private label." 
              features={["Według receptur klienta", "Private label", "Różne panierki", "Kontrola jakości"]} 
              image="photo-1506905925346-21bda4d32df4" 
            />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-green-800 mb-4">Specjalne Produkty na Zamówienie</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Przygotowujemy produkty według indywidualnych specyfikacji klientów. 
                Oferujemy usługi private label oraz packaging zgodny z wymaganiami rynków docelowych.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-bold text-green-800 mb-2">Własne Linie Produkcyjne</h4>
                <p className="text-gray-600">Nowoczesne zakłady z certyfikatami EU</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-bold text-green-800 mb-2">Private Label</h4>
                <p className="text-gray-600">Produkty pod marką klienta</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-bold text-green-800 mb-2">Export Worldwide</h4>
                <p className="text-gray-600">Dostawy do 40+ krajów</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-4 text-lg">
              Pobierz pełny katalog produktów (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="jakosc" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Najwyższe Standardy Jakości</h2>
              <p className="text-lg text-gray-700 mb-8">
                Nasza filozofia opiera się na bezwzględnym przestrzeganiu najwyższych standardów jakości 
                i bezpieczeństwa żywności. Współpracujemy wyłącznie z certyfikowanymi farmami i zakładami, 
                które spełniają surowe wymagania europejskie.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-2">Kontrola na każdym etapie</h4>
                    <p className="text-gray-600">Od farmy do finalnego produktu - wielostopniowa kontrola jakości</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-2">Własne laboratoria</h4>
                    <p className="text-gray-600">Badania mikrobiologiczne i chemiczne w akredytowanych laboratoriach</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-2">Chłodny łańcuch dostaw</h4>
                    <p className="text-gray-600">Nieprzerwany łańcuch chłodniczy od uboju do klienta końcowego</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-2">Śledzenie pochodzenia</h4>
                    <p className="text-gray-600">Pełna traceability - od farmy do półki sklepowej</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mb-8">
                    <Shield className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-green-800 mb-4">100% Bezpieczeństwo</h3>
                  <p className="text-green-700 text-lg">Gwarancja najwyższej jakości</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certyfikaty" className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-green-800 mb-6">Certyfikaty i Akredytacje</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Posiadamy wszystkie niezbędne certyfikaty i akredytacje wymagane do eksportu produktów drobiowych. 
              Nasze zakłady są regularnie kontrolowane przez polskie i międzynarodowe organy certyfikujące.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <CertificationBadge 
              name="HACCP" 
              description="System analizy zagrożeń i krytycznych punktów kontroli zgodny z wymogami UE" 
              icon={<Shield className="h-12 w-12 text-green-600" />} 
            />
            <CertificationBadge 
              name="ISO 22000" 
              description="Międzynarodowy standard systemu zarządzania bezpieczeństwem żywności" 
              icon={<Award className="h-12 w-12 text-green-600" />} 
            />
            <CertificationBadge 
              name="GlobalG.A.P." 
              description="Globalne standardy dobrej praktyki rolniczej i hodowlanej" 
              icon={<CheckCircle className="h-12 w-12 text-green-600" />} 
            />
            <CertificationBadge 
              name="IFS Food" 
              description="International Featured Standards dla bezpieczeństwa i jakości żywności" 
              icon={<Star className="h-12 w-12 text-green-600" />} 
            />
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
            <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Dodatkowe Certyfikaty Eksportowe</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-bold text-green-800 mb-2">Certyfikat Weterynaryjny</h4>
                <p className="text-gray-600">Wydawany przez PIW dla każdej partii eksportowej</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-green-800 mb-2">Halal Certification</h4>
                <p className="text-gray-600">Certyfikacja dla rynków muzułmańskich</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-green-800 mb-2">EU Health Certificate</h4>
                <p className="text-gray-600">Certyfikat zdrowia dla eksportu w ramach UE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="o-nas" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Lider Eksportu Polskiego Drobiu</h2>
              <p className="text-lg text-gray-700 mb-6">
                Masovia Poultry to wiodący eksporter polskiego drobiu z ponad 20-letnim doświadczeniem na rynku międzynarodowym. 
                Jesteśmy dumni z tego, że polski drób cieszy się uznaniem na całym świecie dzięki naszej pracy i zaangażowaniu.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Współpracujemy z największymi sieciami handlowymi w Europie, Azji i na Bliskim Wschodzie. 
                Nasze produkty trafiają do sklepów w Niemczech, Francji, Wielkiej Brytanii, Holandii, 
                krajach Bałkańskich oraz na rynki azjatyckie.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <h3 className="text-4xl font-bold text-green-800">50,000</h3>
                  <p className="text-gray-600 font-medium">ton rocznie</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <h3 className="text-4xl font-bold text-green-800">40+</h3>
                  <p className="text-gray-600 font-medium">krajów eksportu</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <h3 className="text-4xl font-bold text-green-800">1000+</h3>
                  <p className="text-gray-600 font-medium">zadowolonych klientów</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <h3 className="text-4xl font-bold text-green-800">99.8%</h3>
                  <p className="text-gray-600 font-medium">punktualność dostaw</p>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4">
                Poznaj naszą historię
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-40 h-40 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="text-white font-bold text-5xl">MP</span>
                  </div>
                  <h3 className="text-3xl font-bold text-green-800 mb-4">Masovia Poultry</h3>
                  <p className="text-green-600 text-lg">Polski drób premium od 2004</p>
                  <p className="text-green-600 mt-2">Eksport do całego świata</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-green-800 mb-6">Rozpocznij Współpracę</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Skontaktuj się z nami już dziś i otrzymaj spersonalizowaną ofertę dostosowaną do Twoich potrzeb. 
              Nasz zespół ekspertów odpowie na wszystkie pytania i pomoże wybrać najlepsze produkty.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-green-600 text-white px-4 py-2">Odpowiedź w 24h</Badge>
              <Badge className="bg-green-600 text-white px-4 py-2">Darmowe próbki</Badge>
              <Badge className="bg-green-600 text-white px-4 py-2">Konkurencyjne ceny</Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-8">Dane kontaktowe</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                    <Phone className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-green-800 mb-2">Telefon</h4>
                    <p className="text-gray-600 text-lg">+48 123 456 789 (Export Manager)</p>
                    <p className="text-gray-600 text-lg">+48 987 654 321 (Sales Director)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-green-800 mb-2">Email</h4>
                    <p className="text-gray-600 text-lg">export@masoviapoultry.pl</p>
                    <p className="text-gray-600 text-lg">sales@masoviapoultry.pl</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-green-800 mb-2">Siedziba główna</h4>
                    <p className="text-gray-600 text-lg">ul. Przemysłowa 15</p>
                    <p className="text-gray-600 text-lg">05-800 Pruszków, Polska</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-green-50 rounded-2xl">
                <h4 className="font-bold text-xl text-green-800 mb-4">Godziny pracy</h4>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">Poniedziałek - Piątek:</span> 8:00 - 18:00</p>
                  <p><span className="font-medium">Sobota:</span> 9:00 - 14:00</p>
                  <p><span className="font-medium">Niedziela:</span> Zamknięte</p>
                </div>
                <p className="mt-4 text-sm text-green-700 font-medium">
                  W przypadku pilnych spraw eksportowych jesteśmy dostępni 24/7
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8">Dołącz do Grona Naszych Partnerów</h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto text-green-100">
            Współpracujemy z największymi importerami, sieciami handlowymi i zakładami przetwórczymi w Europie. 
            Polski drób premium to gwarancja sukcesu na Twoim rynku.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">Tesco</div>
              <p className="text-green-100">Sieć handlowa - UK</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">Auchan</div>
              <p className="text-green-100">Hipermarkety - Europa</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">Metro</div>
              <p className="text-green-100">Cash & Carry - EMEA</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold px-12 py-4 text-lg">
              Otrzymaj ofertę specjalną
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent px-12 py-4 text-lg">
              Umów spotkanie biznesowe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MP</span>
                </div>
                <span className="text-2xl font-bold">Masovia Poultry</span>
              </div>
              <p className="text-green-200 mb-4">
                Wiodący eksporter najwyższej jakości polskiego drobiu na rynki międzynarodowe.
              </p>
              <p className="text-green-300 font-bold">Polski drób premium od 2004</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Produkty</h4>
              <ul className="space-y-3 text-green-200">
                <li>Piersi z kurczaka</li>
                <li>Skrzydełka kurczaka</li>
                <li>Ćwiartki kurczaka</li>
                <li>Kurczak cały</li>
                <li>Podroby drobiowe</li>
                <li>Produkty przetworzone</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Firma</h4>
              <ul className="space-y-3 text-green-200">
                <li>O nas</li>
                <li>Historia firmy</li>
                <li>Certyfikaty jakości</li>
                <li>Nasze farmy</li>
                <li>Kariera</li>
                <li>Aktualności</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Kontakt</h4>
              <ul className="space-y-3 text-green-200">
                <li><Phone className="inline h-4 w-4 mr-2" />+48 123 456 789</li>
                <li><Mail className="inline h-4 w-4 mr-2" />export@masoviapoultry.pl</li>
                <li><MapPin className="inline h-4 w-4 mr-2" />ul. Przemysłowa 15</li>
                <li>05-800 Pruszków</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-800 pt-8 text-center text-green-200">
            <p>© 2024 Masovia Poultry. Wszystkie prawa zastrzeżone. | Polski drób premium | Eksport worldwide</p>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
