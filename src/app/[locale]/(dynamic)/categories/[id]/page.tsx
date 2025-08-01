// app/products/[id]/page.tsx
'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { use } from 'react';
import { useTranslations } from "next-intl";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
  },
};

const products = [
  {
    id: '1',
    title: 'details.curtains.title',
    description: 'details.curtains.description',
    images: [
      '/images/categoreisImages/curtains/3.jpeg',
      '/images/categoreisImages/curtains/1.jpeg',
      '/images/categoreisImages/curtains/3.jpeg',
    ]
  },
  {
    id: '2',
    title: 'details.fabrics.title',
    description: 'details.fabrics.description',
    images: [
      '/images/categoreisImages/fabrics/3.jpeg',
      '/images/categoreisImages/fabrics/1.jpeg',
      '/images/categoreisImages/fabrics/3.jpeg',
    ]
  },
    {
    id: '3',
    title: 'details.Wallpapers.title',
    description: 'details.Wallpapers.description',
    images: [
      '/images/categoreisImages/wallpaper/1.jpeg',
      '/images/categoreisImages/wallpaper/2.jpeg',
      '/images/categoreisImages/wallpaper/3.jpeg',
    ]
  },
      {
    id: '3',
    title: 'details.Wallpapers.title',
    description: 'details.Wallpapers.description',
    images: [
      '/images/categoreisImages/wallpaper/1.jpeg',
      '/images/categoreisImages/wallpaper/2.jpeg',
      '/images/categoreisImages/wallpaper/3.jpeg',
    ]
  },
        {
    id: '4',
    title: 'details.rug.title',
    description: 'details.rug.description',
    images: [
      '/images/categoreisImages/rugs/2.jpeg',
      '/images/categoreisImages/rugs/1.jpeg',
      '/images/categoreisImages/rugs/3.jpeg',
    ]
  },
       {
    id: '5',
    title: 'details.rug.title',
    description: 'details.rug.description',
    images: [
      '/images/categoreisImages/furnitire/2.jpeg',
      '/images/categoreisImages/furnitire/1.jpeg',
      '/images/categoreisImages/furnitire/3.jpeg',
    ]
  },
];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const t = useTranslations("categoriesSection");
  if (!product) {
    notFound();
  }

  return (
<div className="max-w-6xl mx-auto p-8   dark:bg-gray-900 rounded-xl ">
  <motion.div
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12 h-82"
  >
    {product.images.map((src, index) => (
      <motion.div
        key={index}
        variants={itemVariants}
        className={`relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500
          ${index === 0 ? 'col-span-2 row-span-2 sm:col-span-2' : 'col-span-1'}`}
        whileHover={{ scale: 1.03, zIndex: 10 }}
        whileTap={{ scale: 0.98 }}
      >
        <Image
          src={src}
          alt={`Product image ${index + 1}`}
          width={800}
          height={600}
           className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <p className="text-white text-sm font-semibold">{`Image ${index + 1}`}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>

  <div className="text-center">
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={textVariants}
      className="text-6xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tighter leading-tight drop-shadow-md"
    >
        {t(product.title)}
    </motion.h1>

    <motion.p
      initial="hidden"
      animate="visible"
      variants={textVariants}
      transition={{ delay: 0.2 }}
      className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl font-bold mx-auto"
    >
        {t(product.description)}
    </motion.p>
  </div>
</div>
  );
}
