import React from "react";
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface FeatureCardProps {
  icon: string; 
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <Image width={105} height={105}  src={icon} alt={title} className="w-25 h-20 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const t = useTranslations('featuresSection');

  return (
    <div className="py-12 bg-white">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        {t('title')}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        <FeatureCard
          icon={t('feature1.icon')}
          title={t('feature1.title')}
          description={t('feature1.description')}
        />
        <FeatureCard
          icon={t('feature2.icon')}
          title={t('feature2.title')}
          description={t('feature2.description')}
        />
        <FeatureCard
          icon={t('feature3.icon')}
          title={t('feature3.title')}
          description={t('feature3.description')}
        />
      </div>
    </div>
  );
};


export default FeaturesSection;
