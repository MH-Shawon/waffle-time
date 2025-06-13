"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, useAnimation, useInView } from "framer-motion";

// Register ScrollTrigger with GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const scrollbarHideStyles = `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`;

export default function PopularItems() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const controls = useAnimation();

  // Food items data with images from your folder
  const foodItems = [
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

  // Animate header when it comes into view
  useEffect(() => {
    if (isHeaderInView) {
      controls.start("visible");
    }
  }, [isHeaderInView, controls]);

  // Set up the GSAP scroll animation with pinning
  useEffect(() => {
    // Skip if we're not in the browser or refs aren't available
    if (
      typeof window === "undefined" ||
      !scrollRef.current ||
      !sectionRef.current
    )
      return;

    const scrollElement = scrollRef.current;
    const sectionElement = sectionRef.current;

    // Calculate the distance to scroll
    const scrollWidth = scrollElement.scrollWidth;
    const containerWidth = scrollElement.offsetWidth;
    const maxScroll = scrollWidth - containerWidth;

    // Create the scroll animation with ScrollTrigger and pin the section
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionElement,
      start: "top 00%", // Start pinning when the top of the section reaches 20% from the top of viewport
      end: `+=${maxScroll}`, // End pinning after scrolling the equivalent of the horizontal scroll distance
      pin: true, // Pin the section
      anticipatePin: 5, // Helps prevent jittering
      pinSpacing: true, // Adds space after the element to allow scrolling
      scrub: 1, // Smoother scrubbing effect with less delay
      onUpdate: (self) => {
        // Use a smoother interpolation for the scroll position
        const scrollPos = self.progress * maxScroll;
        gsap.to(scrollElement, {
          scrollLeft: scrollPos,
          duration: 0.1,
          overwrite: true,
          ease: "power2.out",
        });
      },
    });

    // Clean up
    return () => {
      scrollTrigger.kill();
    };
  }, []);

  // Animation variants for Framer Motion

  const cardVariants = {
    initial: { scale: 0.95, opacity: 0.8 },
    hover: {
      scale: 1.03,
      opacity: 2,
      transition: { duration: 0.5 },
    },
  };

  const priceTagVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="py-8" ref={sectionRef}>
      <style dangerouslySetInnerHTML={{ __html: scrollbarHideStyles }} />
      <div className="text-center mx-auto ">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-[80px] font-bold  font-denk text-[#F6AF03]"
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
          className="font-bai text-[#2D2D2D] "
        >
          We have some best Waffle in every branch.
          <br />
          Don&apos;t forget to check it out.
        </motion.p>
      </div>

      {/* Scrollable container - Added no-scrollbar class */}
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden hide-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex gap-6 min-w-max mt-10">
          {foodItems.map((item) => (
            <motion.div
              key={item.id}
              className="w-72 rounded-lg overflow-hidden bg-white shadow-md"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg?height=300&width=300";
                    }}
                  />
                </motion.div>
              </div>
              <div className="bg-gray-800 bg-opacity-70 p-3 relative">
                <h3 className="text-white text-xl font-medium font-denk">
                  {item.name}
                </h3>
                <div className="mt-2">
                  <motion.span
                    className="bg-red-500 text-white px-4 py-1 rounded-full text-sm inline-block font-bai"
                    variants={priceTagVariants}
                  >
                    Price: {item.price}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
