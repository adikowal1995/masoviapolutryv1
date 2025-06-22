
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CertificationBadgeProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const CertificationBadge = ({ name, description, icon }: CertificationBadgeProps) => {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-green-100">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>
        <CardTitle className="text-2xl text-green-800">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default CertificationBadge;
