import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Mail, MapPin, Award, Truck, Shield, Globe, Factory, Users, Clock, Star } from "lucide-react";
import ContactForm from '../components/ContactForm';
import ProductCard from '../components/ProductCard';
import CertificationBadge from '../components/CertificationBadge';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b border-sage-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div>
                <h1 className="text-2xl font-bold text-sage-800">Masovia Poultry</h1>
                <p className="text-sm text-sage-600">{t('nav.tagline')}</p>
              </div>
            </div>
            <LanguageSwitcher />
            <div className="hidden md:flex items-center space-x-8">
              <a href="#produkty" className="text-sage-700 hover:text-sage-900 font-medium transition-colors">{t('nav.products')}</a>
              <a href="#o-nas" className="text-sage-700 hover:text-sage-900 font-medium transition-colors">{t('nav.about')}</a>
              <a href="#jakosc" className="text-sage-700 hover:text-sage-900 font-medium transition-colors">{t('nav.quality')}</a>
              <a href="#certyfikaty" className="text-sage-700 hover:text-sage-900 font-medium transition-colors">{t('nav.certificates')}</a>
              <a href="#kontakt" className="text-sage-700 hover:text-sage-900 font-medium transition-colors">{t('nav.contact')}</a>
            </div>
            <Button className="bg-gradient-to-r from-sage-300 to-sage-400 hover:from-sage-400 hover:to-sage-500 text-sage-900 px-3 md:px-6 py-2">
              {t('nav.download_price')}
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative py-24 text-sage-900 overflow-hidden"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}Masovia%20Polutry%20Farming.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              {t('hero.title')}<br />
              <span className="text-yellow-300">{t('hero.title_highlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-sage-100 max-w-4xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-sage-900 font-bold px-8 py-4 text-lg">
                <Factory className="mr-2 h-5 w-5" />
                {t('hero.cta_offer')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sage-800 bg-transparent px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                {t('hero.cta_phone')}
              </Button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">20+</div>
                <div className="text-sage-100">{t('hero.stats.years')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">40+</div>
                <div className="text-sage-100">{t('hero.stats.countries')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">50k</div>
                <div className="text-sage-100">{t('hero.stats.tons')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">99.8%</div>
                <div className="text-sage-100">{t('hero.stats.satisfaction')}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          {/* SVG wave removed to prevent covering the background image */}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sage-800 mb-4">{t('benefits.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage-200">
                <Shield className="h-10 w-10 text-sage-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-sage-800">{t('benefits.quality.title')}</h3>
              <p className="text-gray-600">{t('benefits.quality.desc')}</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage-200">
                <Clock className="h-10 w-10 text-sage-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-sage-800">{t('benefits.delivery.title')}</h3>
              <p className="text-gray-600">{t('benefits.delivery.desc')}</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage-200">
                <Users className="h-10 w-10 text-sage-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-sage-800">{t('benefits.team.title')}</h3>
              <p className="text-gray-600">{t('benefits.team.desc')}</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage-200">
                <Star className="h-10 w-10 text-sage-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-sage-800">{t('benefits.price.title')}</h3>
              <p className="text-gray-600">{t('benefits.price.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produkty" className="py-24 bg-gradient-to-b from-sage-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-sage-800 mb-6">{t('products.title')}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              {t('products.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2 border-sage-300 text-sage-700">{t('products.badge.fresh')}</Badge>
              <Badge variant="outline" className="px-4 py-2 border-sage-300 text-sage-700">{t('products.badge.frozen')}</Badge>
              <Badge variant="outline" className="px-4 py-2 border-sage-300 text-sage-700">{t('products.badge.processed')}</Badge>
              <Badge variant="outline" className="px-4 py-2 border-sage-300 text-sage-700">{t('products.badge.private')}</Badge>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ProductCard 
              title={t('product.whole_chicken.title')}
              description={t('product.whole_chicken.desc')}
              features={[t('product.whole_chicken.feature1'), t('product.whole_chicken.feature2'), t('product.whole_chicken.feature3'), t('product.whole_chicken.feature4')]} 
              image="/cały kurczak.jpg" 
            />
            <ProductCard 
              title={t('product.carcasses.title')}
              description={t('product.carcasses.desc')}
              features={[t('product.carcasses.feature1'), t('product.carcasses.feature2'), t('product.carcasses.feature3'), t('product.carcasses.feature4')]}
              image="/tuszka drobiowa.jpg"
            />
            <ProductCard 
              title={t('product.processed.title')}
              description={t('product.processed.desc')}
              features={[t('product.processed.feature1'), t('product.processed.feature2'), t('product.processed.feature3'), t('product.processed.feature4')]} 
              image="/jajka.jpg" 
            />
            <ProductCard 
              title={t('product.chicken_breast.title')}
              description={t('product.chicken_breast.desc')}
              features={[t('product.chicken_breast.feature1'), t('product.chicken_breast.feature2'), t('product.chicken_breast.feature3'), t('product.chicken_breast.feature4')]} 
              image="/piersi z kurczaka.jpg" 
            />
            <ProductCard 
              title={t('product.drumsticks.title')}
              description={t('product.drumsticks.desc')}
              features={[t('product.drumsticks.feature1'), t('product.drumsticks.feature2'), t('product.drumsticks.feature3'), t('product.drumsticks.feature4')]}
              image="/podudzia z kurczaka.jpg"
            />
            <ProductCard 
              title={t('product.chicken_quarters.title')}
              description={t('product.chicken_quarters.desc')}
              features={[t('product.chicken_quarters.feature1'), t('product.chicken_quarters.feature2'), t('product.chicken_quarters.feature3'), t('product.chicken_quarters.feature4')]} 
              image="/Ćwiartki kurczaka.jpg" 
            />
            <ProductCard 
              title={t('product.chicken_wings.title')}
              description={t('product.chicken_wings.desc')}
              features={[t('product.chicken_wings.feature1'), t('product.chicken_wings.feature2'), t('product.chicken_wings.feature3'), t('product.chicken_wings.feature4')]} 
              image="/skrzydelka.jpg" 
            />
            <ProductCard 
              title={t('product.giblets.title')}
              description={t('product.giblets.desc')}
              features={[t('product.giblets.feature1'), t('product.giblets.feature2'), t('product.giblets.feature3'), t('product.giblets.feature4')]} 
              image="/Podroby drobiowe.jpg" 
            />
            <ProductCard 
              title={t('product.cut_feet.title')}
              description={t('product.cut_feet.desc')}
              features={[t('product.cut_feet.feature1'), t('product.cut_feet.feature2'), t('product.cut_feet.feature3'), t('product.cut_feet.feature4')]}
              image="/Łapy cięte.jpg"
            />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-sage-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-sage-800 mb-4">{t('special.title')}</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('special.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8 text-sage-600" />
                </div>
                <h4 className="font-bold text-sage-800 mb-2">{t('special.production.title')}</h4>
                <p className="text-gray-600">{t('special.production.desc')}</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-sage-600" />
                </div>
                <h4 className="font-bold text-sage-800 mb-2">{t('special.private.title')}</h4>
                <p className="text-gray-600">{t('special.private.desc')}</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-sage-600" />
                </div>
                <h4 className="font-bold text-sage-800 mb-2">{t('special.export.title')}</h4>
                <p className="text-gray-600">{t('special.export.desc')}</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-sage-300 to-sage-400 hover:from-sage-400 hover:to-sage-500 text-sage-900 px-12 py-4 text-lg">
              {t('special.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="jakosc" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-sage-800 mb-6">{t('quality.title')}</h2>
              <p className="text-lg text-gray-700 mb-8">
                {t('quality.description')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sage-800 mb-2">{t('quality.control.title')}</h4>
                    <p className="text-gray-600">{t('quality.control.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sage-800 mb-2">{t('quality.lab.title')}</h4>
                    <p className="text-gray-600">{t('quality.lab.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sage-800 mb-2">{t('quality.cold.title')}</h4>
                    <p className="text-gray-600">{t('quality.cold.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sage-800 mb-2">{t('quality.trace.title')}</h4>
                    <p className="text-gray-600">{t('quality.trace.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-sage-100 to-sage-200 rounded-3xl p-8">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-sage-300 to-sage-500 rounded-full flex items-center justify-center mb-8">
                    <Shield className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-sage-800 mb-4">{t('quality.guarantee')}</h3>
                  <p className="text-sage-700 text-lg">{t('quality.guarantee.sub')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certyfikaty" className="py-24 bg-gradient-to-b from-sage-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-sage-800 mb-6">{t('cert.title')}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('cert.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <CertificationBadge 
              name="HACCP" 
              description={t('cert.haccp.desc')}
              icon={<Shield className="h-12 w-12 text-sage-600" />} 
            />
            <CertificationBadge 
              name="ISO 22000" 
              description={t('cert.iso.desc')}
              icon={<Award className="h-12 w-12 text-sage-600" />} 
            />
            <CertificationBadge 
              name="GlobalG.A.P." 
              description={t('cert.gap.desc')}
              icon={<CheckCircle className="h-12 w-12 text-sage-600" />} 
            />
            <CertificationBadge 
              name="IFS Food" 
              description={t('cert.ifs.desc')}
              icon={<Star className="h-12 w-12 text-sage-600" />} 
            />
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-sage-100">
            <h3 className="text-2xl font-bold text-sage-800 mb-6 text-center">{t('cert.additional.title')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-bold text-sage-800 mb-2">{t('cert.vet.title')}</h4>
                <p className="text-gray-600">{t('cert.vet.desc')}</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-sage-800 mb-2">{t('cert.halal.title')}</h4>
                <p className="text-gray-600">{t('cert.halal.desc')}</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-sage-800 mb-2">{t('cert.eu.title')}</h4>
                <p className="text-gray-600">{t('cert.eu.desc')}</p>
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
              <h2 className="text-4xl font-bold text-sage-800 mb-6">{t('about.title')}</h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('about.description1')}
              </p>
              <p className="text-lg text-gray-700 mb-8">
                {t('about.description2')}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-sage-50 rounded-xl">
                  <h3 className="text-4xl font-bold text-sage-800">50,000</h3>
                  <p className="text-gray-600 font-medium">{t('about.stats.tons')}</p>
                </div>
                <div className="text-center p-6 bg-sage-50 rounded-xl">
                  <h3 className="text-4xl font-bold text-sage-800">40+</h3>
                  <p className="text-gray-600 font-medium">{t('about.stats.countries')}</p>
                </div>
                <div className="text-center p-6 bg-sage-50 rounded-xl">
                  <h3 className="text-4xl font-bold text-sage-800">1000+</h3>
                  <p className="text-gray-600 font-medium">{t('about.stats.clients')}</p>
                </div>
                <div className="text-center p-6 bg-sage-50 rounded-xl">
                  <h3 className="text-4xl font-bold text-sage-800">99.8%</h3>
                  <p className="text-gray-600 font-medium">{t('about.stats.delivery')}</p>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-sage-300 to-sage-400 hover:from-sage-400 hover:to-sage-500 text-sage-900 px-8 py-4">
                {t('about.cta')}
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-sage-100 to-sage-200 rounded-3xl flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-40 h-40 bg-gradient-to-br from-sage-300 to-sage-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="text-white font-bold text-5xl">MP</span>
                  </div>
                  <h3 className="text-3xl font-bold text-sage-800 mb-4">{t('about.company')}</h3>
                  <p className="text-sage-600 text-lg">{t('about.tagline')}</p>
                  <p className="text-sage-600 mt-2">{t('about.subtitle')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-24 bg-gradient-to-b from-sage-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-sage-800 mb-6">{t('contact.title')}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              {t('contact.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-sage-600 text-white px-4 py-2">{t('contact.badge.response')}</Badge>
              <Badge className="bg-sage-600 text-white px-4 py-2">{t('contact.badge.samples')}</Badge>
              <Badge className="bg-sage-600 text-white px-4 py-2">{t('contact.badge.prices')}</Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-sage-800 mb-8">{t('contact.info.title')}</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-sage-100 rounded-xl flex items-center justify-center">
                    <Phone className="h-8 w-8 text-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-sage-800 mb-2">{t('contact.phone.title')}</h4>
                    <p className="text-gray-600 text-lg">{t('contact.phone.export')}</p>
                    <p className="text-gray-600 text-lg">{t('contact.phone.sales')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-sage-100 rounded-xl flex items-center justify-center">
                    <Mail className="h-8 w-8 text-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-sage-800 mb-2">{t('contact.email.title')}</h4>
                    <p className="text-gray-600 text-lg">export@masoviapoultry.pl</p>
                    <p className="text-gray-600 text-lg">sales@masoviapoultry.pl</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-sage-100 rounded-xl flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-sage-800 mb-2">{t('contact.address.title')}</h4>
                    <p className="text-gray-600 text-lg">{t('contact.address.street')}</p>
                    <p className="text-gray-600 text-lg">{t('contact.address.city')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-sage-50 rounded-2xl">
                <h4 className="font-bold text-xl text-sage-800 mb-4">{t('contact.hours.title')}</h4>
                <div className="space-y-2 text-gray-700">
                  <p>{t('contact.hours.weekdays')}</p>
                  <p>{t('contact.hours.saturday')}</p>
                  <p>{t('contact.hours.sunday')}</p>
                </div>
                <p className="mt-4 text-sm text-sage-700 font-medium">
                  {t('contact.hours.urgent')}
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-sage-300 via-sage-400 to-sage-500 text-sage-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 text-white">{t('cta.title')}</h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto text-sage-100">
            {t('cta.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">Tesco</div>
              <p className="text-sage-100">{t('cta.tesco')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">Auchan</div>
              <p className="text-sage-100">{t('cta.auchan')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">Metro</div>
              <p className="text-sage-100">{t('cta.metro')}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-sage-900 font-bold px-12 py-4 text-lg">
              {t('cta.special_offer')}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sage-800 bg-transparent px-12 py-4 text-lg">
              {t('cta.meeting')}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-2xl font-bold">Masovia Poultry</span>
              </div>
              <p className="text-sage-200 mb-4">
                {t('footer.tagline')}
              </p>
              <p className="text-sage-300 font-bold">{t('footer.company_info')}</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">{t('footer.products.title')}</h4>
              <ul className="space-y-3 text-sage-200">
                <li>{t('footer.products.breast')}</li>
                <li>{t('footer.products.wings')}</li>
                <li>{t('footer.products.quarters')}</li>
                <li>{t('footer.products.whole')}</li>
                <li>{t('footer.products.giblets')}</li>
                <li>{t('footer.products.processed')}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">{t('footer.company.title')}</h4>
              <ul className="space-y-3 text-sage-200">
                <li>{t('footer.company.about')}</li>
                <li>{t('footer.company.history')}</li>
                <li>{t('footer.company.certificates')}</li>
                <li>{t('footer.company.farms')}</li>
                <li>{t('footer.company.career')}</li>
                <li>{t('footer.company.news')}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">{t('footer.contact.title')}</h4>
              <ul className="space-y-3 text-sage-200">
                <li><Phone className="inline h-4 w-4 mr-2" />+48 123 456 789</li>
                <li><Mail className="inline h-4 w-4 mr-2" />export@masoviapoultry.pl</li>
                <li><MapPin className="inline h-4 w-4 mr-2" />ul. Przemysłowa 15</li>
                <li>05-800 Pruszków</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-sage-800 pt-8 text-center text-sage-200">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
