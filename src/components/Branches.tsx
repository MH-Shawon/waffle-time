"use client";

import { motion } from "framer-motion";
import { branches } from "@/data/branches";

const Branches = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10 blur-sm">
        <img
          src="/bg-pattern.svg"
          alt="Background Pattern"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-red-600"
        >
          Let’s meet our
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl font-extrabold text-orange-500 mt-2"
        >
          Branches
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 max-w-xl mx-auto text-gray-600"
        >
          We have many branches in Bangladesh. In every branch you will get the
          best waffle. <br />
          Don’t forget to check the nearby branch.
        </motion.p>
      </div>

      {/* Branch Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {branches.map((branch, index) => {
          const row = Math.floor(index / 3); // 0, 1, 2...
          const direction = row % 2 === 0 ? 120 : -120;

          return (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, x: direction }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.2,
                ease: "easeOut",
              }}
              className="p-6 border-2 border-yellow-300 rounded-2xl text-center bg-white shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-4xl mb-4">🏬</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {branch.title}
              </h4>
              <p className="text-gray-500 text-sm mb-4">{branch.description}</p>
              <a
                href={branch.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm underline"
              >
                See Location 📍
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Branches;
