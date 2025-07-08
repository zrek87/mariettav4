import React, { useRef } from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mx-auto p-2 w-full max-w-lg">
      {/* Left Navigation Button (Outside Container) */}
      <button
        onClick={scrollLeft}
        className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 bg-gray-400 p-1 rounded-full shadow-md focus:outline-none sm:hidden"
      >
        &larr;
      </button>

      {/* Categories Container */}
      <div
        ref={containerRef}
        className="flex space-x-4 p-2 rounded-full bg-gray-100 overflow-x-auto items-center scrollbar-hide"
        style={{
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For IE and Edge
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`${
              selectedCategory === category
                ? "bg-white text-black shadow-md"
                : "bg-transparent text-gray-600"
            } px-3 py-1 rounded-full ease-in-out focus:outline-none whitespace-nowrap`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Right Navigation Button (Outside Container) */}
      <button
        onClick={scrollRight}
        className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 bg-gray-400 p-1 rounded-full shadow-md focus:outline-none sm:hidden"
      >
        &rarr;
      </button>
    </div>
  );
};

export default CategoryFilter;
