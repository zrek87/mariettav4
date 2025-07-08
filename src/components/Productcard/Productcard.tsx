import React from "react";
import {Link} from '@/i18n/routing';
import Image from "next/image";

interface ProductcardProps {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  className?: string;
}

const Productcard = ({
  id,
  imageUrl,
  title,
  description,
  className = "",
}: ProductcardProps) => {
  return (
    <Link href={`/productpage/${id}`}>
      <div
        className={`bg-gray-100 border border-gray-300 rounded-lg p-5 text-center transition-shadow ease-in-out hover:shadow-lg cursor-pointer ${className}`}
      >
        <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 relative rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-light text-gray-900">{title}</h3>
          <h3 className="text-sm font-bold text-gray-900">{description}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Productcard;
