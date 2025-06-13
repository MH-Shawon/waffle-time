"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Define the MenuItem type for this component
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
  inView: boolean;
}

export default function MenuItemCard({
  item,
  index,
  inView,
}: MenuItemCardProps) {
  return (
    <motion.div
      className="relative w-[280px] h-[380px] rounded-3xl border border-red-500 p-6 bg-white shadow-sm flex flex-col hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, x: 100, scale: 0.9 }}
      animate={
        inView
          ? { opacity: 1, x: 0, scale: 1 }
          : { opacity: 0, x: 100, scale: 0.9 }
      }
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: inView ? 1.2 + index * 0.1 : 0,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25,
        },
      }}
    >
      {/* Price tag */}
      <motion.div
        className="absolute -right-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white font-bold text-xl shadow-md"
        initial={{ scale: 0, rotate: -180 }}
        animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: inView ? 1.4 + index * 0.1 : 0,
        }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        }}
      >
        ${item.price}
      </motion.div>

      {/* Image */}
      <motion.div
        className="flex justify-center h-[150px] mb-6 overflow-hidden rounded-xl"
        whileHover={{ scale: 1.05 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          width={200}
          height={150}
          className="object-contain"
        />
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-center text-2xl font-bold uppercase tracking-wide mb-3 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          delay: inView ? 1.6 + index * 0.1 : 0,
        }}
      >
        {item.name}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-center text-gray-700 flex-grow overflow-hidden line-clamp-3 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          delay: inView ? 1.8 + index * 0.1 : 0,
        }}
      >
        {item.description}
      </motion.p>
    </motion.div>
  );
}
