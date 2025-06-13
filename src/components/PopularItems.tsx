"use client";

import { motion, useScroll, useTransform } from "framer-motion"; // ✅ use 'framer-motion' instead of 'motion/react'
import { useRef } from "react";

// Define a type for food items
type FoodItem = {
  id: number;
  name: string;
  price: string;
  image: string;
  alt: string;
};

const PopularItems = () => {
  return (
    <div className="">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-[80px] font-bold font-denk text-[#F6AF03]"
        >
          Popular <span className=" text-[#EB292A]">Items</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="font-bai text-[#2D2D2D]"
        >
          We have some best Waffle in every branch.
          <br />
          Don&apos;t forget to check it out.
        </motion.p>
      </div>

      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] -mt-20">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6">
          {foodItems.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Card component with props type
const Card = ({ card }: { card: FoodItem }) => {
  return (
    <div className="group relative w-[280px] h-[380px] border border-[#EB292A] overflow-hidden rounded-[10px]">
      <div
        style={{
          backgroundImage: `url(${card.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 top-40 grid place-content-center">
        <div className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl font-denk text-white backdrop-blur-lg leading-7">
          <p>{card.name}</p>

          <p className="bg-[#EB292A] text-white px-4 py-1 text-[16px] text-center mt-3 font-bai rounded-tr-lg rounded-bl-lg">
            Price: {card.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularItems;

// Food items array
const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Nutella Orio",
    price: "$20",
    image: "/assets/Images/popular/popularItems1.jpg",
    alt: "Waffle with strawberries",
  },
  {
    id: 2,
    name: "Nutella Orio",
    price: "$20",
    image: "/assets/Images/popular/popularItems2.jpg",
    alt: "Waffle with mixed berries",
  },
  {
    id: 3,
    name: "Nutella Orio",
    price: "$20",
    image: "/assets/Images/popular/popularItems3.jpg",
    alt: "Waffle with strawberries and cream",
  },
  {
    id: 4,
    name: "Nutella Orio",
    price: "$20",
    image: "/assets/Images/popular/popularItems4.jpg",
    alt: "Waffle dessert",
  },
  {
    id: 5,
    name: "Nutella Orio",
    price: "$20",
    image: "/assets/Images/popular/popularItems1.jpg",
    alt: "Waffle special",
  },
  {
    id: 6,
    name: "Nutella Orio",
    price: "$20",
    image: "/assets/Images/popular/popularItems2.jpg",
    alt: "Waffle deluxe",
  },
];
