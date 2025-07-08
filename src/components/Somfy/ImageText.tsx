import React from "react";
import Image from "next/image";

interface AboutSomfyProps {
  title: string;
  content: string[];
  imageUrl: string;
}

const AboutSomfy: React.FC<AboutSomfyProps> = ({
  title,
  content,
  imageUrl,
}) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <Image
            src={imageUrl}
            alt="Somfy Image"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="text-black text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4 text-black">{title}</h2>
          {content.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed mb-4 text-gray-600"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSomfy;
