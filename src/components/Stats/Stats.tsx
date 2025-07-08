"use client";

import { useTranslations } from "next-intl";
import { Counter } from '@/hooks/Counter';

const Stats = () => {
  const t = useTranslations("homepage.stats");

  const stats = [
    { id: 1, countTo: 50, suffix: '+', label: t("successfulProjects") },
    { id: 2, countTo: 6, prefix: '+', suffix: '', label: t("yearsInMarket") },
    { id: 3, countTo: 10, suffix: '+', label: t("partners") },
    { id: 4, countTo: 16, suffix: '+', label: t("citiesSupport") },
  ];

  return (
    <div className="container flex flex-col mx-auto bg-white">
      <div className="w-full">
        <div className="container flex flex-col items-center gap-16 mx-auto my-32">
          <div className="grid w-full grid-cols-1 gap-y-8 lg:grid-cols-4 md:grid-cols-2">
            {stats.map((stat) => {
              const count = Counter({ end: stat.countTo, duration: 2500 });
              return (
                <div key={stat.id} className="flex flex-col items-center">
                  <h3 className="text-5xl font-extrabold leading-tight text-center text-gray-700">
                    {stat.prefix}
                    {count}
                    {stat.suffix}
                  </h3>
                  <p className="text-base font-medium leading-7 text-center text-mar">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
