// app/products/[id]/page.tsx
'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { use } from 'react';

const products = [
  {
    id: '1',
    title: 'Luxury Leather Bag',
    description: 'Handcrafted premium leather bag with modern design and ultimate durability.',
    images: [
      '/images/bag1.jpg',
      '/images/bag2.jpg',
      '/images/bag3.jpg',
      '/images/bag4.jpg'
    ]
  },
  {
    id: '2',
    title: 'Elegant Wristwatch',
    description: 'A timeless piece with precision engineering and sleek aesthetics.',
    images: [
      '/images/watch1.jpg',
      '/images/watch2.jpg',
      '/images/watch3.jpg'
    ]
  },
  {
    id: '3',
    title: 'Modern Art Lamp',
    description: 'Ambient lighting meets minimalistic art for a modern home.',
    images: [
      '/images/lamp1.jpg',
      '/images/lamp2.jpg',
      '/images/lamp3.jpg'
    ]
  }
];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 mb-8"
      >
        {product.images.map((src, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden rounded-3xl shadow-xl relative group hover:shadow-orange-300/40 transition duration-500 
              ${index === 0 ? 'col-span-2 row-span-2 sm:col-span-2 sm:row-span-2' : 'col-span-1 row-span-1'}`}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={src}
              alt={`Product image ${index + 1}`}
              width={800}
              height={600}
              className="object-cover w-full h-64 sm:h-full transition-transform duration-500 group-hover:scale-110 rounded-3xl"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-4 text-center text-gray-900 tracking-tight drop-shadow-lg"
      >
        {product.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-700 text-center leading-relaxed max-w-3xl mx-auto"
      >
        {product.description}
      </motion.p>
    </div>
  );
}
