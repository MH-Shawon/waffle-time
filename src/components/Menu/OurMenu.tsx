"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import MenuItemCard from "./MenuItemCard";


// Define the MenuItem and Category types
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
}

const categories: Category[] = [
  {
    id: "nutella",
    name: "Nutella Desserts",
  },
  {
    id: "crepes",
    name: "Crepes",
  },
  {
    id: "waffles",
    name: "Waffles",
  },
  {
    id: "drinks",
    name: "Drinks",
  },
];

const menuItems: MenuItem[] = [
  {
    id: "death-by-nutella",
    name: "Death by Nutella",
    description:
      "Crepe filled with Nutella, topped with strawberries and banana slices",
    price: 12,
    image: "/assets/Images/menuItem/item1.png",
    category: "nutella",
  },
  {
    id: "nutella-heaven",
    name: "Nutella Heaven",
    description: "Warm waffle topped with Nutella, whipped cream and hazelnuts",
    price: 14,
    image: "/assets/Images/menuItem/item2.png",
    category: "nutella",
  },
  {
    id: "nutella-dream",
    name: "Nutella Dream",
    description:
      "Crepe filled with Nutella and banana, topped with vanilla ice cream",
    price: 13,
    image: "/assets/Images/menuItem/item3.png",
    category: "nutella",
  },
  {
    id: "nutella-bliss",
    name: "Nutella Bliss",
    description: "Warm brownie topped with Nutella and vanilla ice cream",
    price: 15,
    image: "/assets/Images/menuItem/item4.png",
    category: "nutella",
  },
  {
    id: "nutella-delight",
    name: "Nutella Delight",
    description: "Warm waffle topped with Nutella, whipped cream and hazelnuts",
    price: 14,
    image: "/assets/Images/menuItem/item1.png",
    category: "nutella",
  },
  {
    id: "classic-crepe",
    name: "Classic Crepe",
    description: "Traditional crepe with butter and sugar",
    price: 8,
    image: "/assets/Images/menuItem/item2.png",
    category: "crepes",
  },
  {
    id: "strawberry-crepe",
    name: "Strawberry Crepe",
    description: "Crepe filled with fresh strawberries and whipped cream",
    price: 10,
    image: "/assets/Images/menuItem/item3.png",
    category: "crepes",
  },
  {
    id: "belgian-waffle",
    name: "Belgian Waffle",
    description: "Classic Belgian waffle with maple syrup and butter",
    price: 9,
    image: "/assets/Images/menuItem/item4.png",
    category: "waffles",
  },
  {
    id: "chocolate-waffle",
    name: "Chocolate Waffle",
    description: "Belgian waffle with chocolate chips and chocolate sauce",
    price: 11,
    image: "/assets/Images/menuItem/item1.png",
    category: "waffles",
  },
  {
    id: "iced-coffee",
    name: "Iced Coffee",
    description: "Cold brewed coffee served over ice",
    price: 5,
    image: "/assets/Images/menuItem/item2.png",
    category: "drinks",
  },
  {
    id: "milkshake",
    name: "Milkshake",
    description: "Creamy vanilla milkshake with whipped cream",
    price: 7,
    image: "/assets/Images/menuItem/item3.png",
    category: "drinks",
  },
];

const OurMenu =()=> {
  const [activeCategory, setActiveCategory] = useState("nutella");
  const [startIndex, setStartIndex] = useState(0);
  const sectionRef = useRef(null);

  // Animations trigger every time the section comes into view
  const isInView = useInView(sectionRef, { amount: 0.3 });

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  // Reset visible items when category changes
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setStartIndex(0);
  };

  const showNextItem = () => {
    setStartIndex((prev) => {
      const maxStart = filteredItems.length - 4;
      return Math.min(prev + 1, maxStart);
    });
  };

  // Get items to display based on visibleItems count
  const itemsToDisplay = filteredItems.slice(startIndex, startIndex + 4);

  // Check if there are more items to show
  const hasMoreItems = startIndex < filteredItems.length - 4;

  return (
    <div className="min-h-screen bg-white -mt-20">
      <div
        ref={sectionRef}
        className="container mx-auto px-4 py-12 relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h1
            className="text-7xl font-bold font-denk mb-4 inline-block"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 100, scale: 0.8 }
            }
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              delay: 0.1,
            }}
          >
            <motion.span
              className="text-[#EB292A]"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: isInView ? 0.2 : 0,
              }}
            >
              Our{" "}
            </motion.span>
            <motion.span
              className="text-yellow-500"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: isInView ? 0.4 : 0,
              }}
            >
              Menu
            </motion.span>
          </motion.h1>

          <motion.p
            className="max-w-lg mx-auto text-[#000000]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              delay: isInView ? 0.6 : 0,
            }}
          >
            We serve the most delicious food at every branch. Explore our menu
            and indulge in the crunch you won't want to miss!
          </motion.p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-8 py-3 rounded-md transition-all text-xl font-sans font-bold ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-primary hover:bg-red-50"
              }`}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.8 }
              }
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: isInView ? 0.8 + index * 0.1 : 0,
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                },
              }}
              whileTap={{
                scale: 0.95,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                },
              }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Menu items */}
        <div className="relative">
          <div className="flex justify-center gap-6 pb-8">
            {itemsToDisplay.map((item, index) => (
              <MenuItemCard
                key={item.id}
                item={item}
                index={index}
                inView={isInView}
              />
            ))}
          </div>

          {/* Arrow button - positioned on the right side */}
          {filteredItems.length > 4 && hasMoreItems && (
            <motion.button
              onClick={showNextItem}
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:shadow-xl transition-shadow"
              aria-label="Show next item"
              initial={{ opacity: 0, scale: 0, rotate: -90 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : { opacity: 0, scale: 0, rotate: -90 }
              }
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: isInView ? .5 : 0,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                },
              }}
              whileTap={{
                scale: 0.9,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                },
              }}
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
export default OurMenu;