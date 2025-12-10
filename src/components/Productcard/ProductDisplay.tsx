"use client"; // This is a client component since it uses useState

import { useState } from "react";
import { productsData } from "./productsData"; // Import product data
import Productcard from "./Productcard"; // Import the Productcard component
import CategoryFilter from "./CategoryFilter"; // Import the CategoryFilter component
 
export default function ProductDisplay() {
  // Get unique categories from the product data
  const categories = [...new Set(productsData.map((product) => product.category))];

  // State to keep track of the selected category and fade class
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [fadeClass, setFadeClass] = useState("fade-in"); // Fade-in by default

  // Filter the products based on the selected category
  const filteredProducts = productsData.filter(
    (product) => product.category === selectedCategory
  );

  // Handle category change with a fade-out and fade-in transition
  const handleCategoryChange = (category: string) => {
    setFadeClass("fade-out"); // Trigger fade out
    setTimeout(() => {
      setSelectedCategory(category); // Change the category
      setFadeClass("fade-in"); // Trigger fade in
    }); // Match the transition duration (0.3s)
  };

  return (
    <div className="bg-white p-10">
      {/* Render the CategoryFilter */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategoryChange} // Pass function to update selected category
      />
      {/* Render the filtered products with fade transition */}
      <div
        className={`grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-5 p-5 justify-center max-w-[1200px] mx-auto ${fadeClass}`}
      >
        {filteredProducts.map((product) => (
          <Productcard
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
