
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ProductCard = ({ title, description, features, image }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-sage-100">
      <div className="aspect-video bg-gradient-to-br from-sage-100 to-sage-200 relative overflow-hidden">
        <img 
          src={`https://images.unsplash.com/${image}?w=400&h=240&fit=crop`}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-sage-600 text-white border-none">Premium</Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl text-sage-800">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-sage-600" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button className="w-full bg-gradient-to-r from-sage-300 to-sage-400 hover:from-sage-400 hover:to-sage-500 text-sage-900">
          Zapytaj o cenę
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
