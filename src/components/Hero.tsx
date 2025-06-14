"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="min-h-screen mt-8">
      <section className="relative w-full">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2  items-center min-h-[80vh]">
            {/* Left side - Waffle Card */}
            <div className="flex justify-center lg:justify-around order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  delay: 0.3,
                }}
                className="relative group cursor-pointer"
              >
                {/* Orange Card Background with 3D effect */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="bg-gradient-to-br from-amber-400 via-orange-400 to-orange-500 rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white/20"
                >
                  <div className="text-center space-y-6 relative z-10">
                    {/* WAFFLE text with text shadow */}
                    <motion.h2
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.6,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="text-white text-7xl font-black tracking-wider drop-shadow-lg"
                      style={{
                        fontFamily: "system-ui, -apple-system, sans-serif",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                      }}
                    >
                      WAFFLE
                    </motion.h2>

                    {/* Waffle Illustration */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.9,
                      }}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className="relative mx-auto w-52 h-52"
                    >
                      {/* Waffle base */}
                      <div className="absolute inset-0 bg-amber-100 rounded-full shadow-inner border-8 border-amber-200/50"></div>

                      {/* Waffle pattern */}
                      <div className="absolute inset-4 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full">
                        {/* Grid pattern */}
                        <div className="absolute inset-2 grid grid-cols-4 grid-rows-4 gap-1 p-2">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div
                              key={i}
                              className="bg-amber-400/60 rounded-sm"
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Toppings */}
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 2,
                          ease: "easeInOut",
                        }}
                        className="absolute top-2 left-1/2 transform -translate-x-1/2 text-4xl"
                      >
                        🍓
                      </motion.div>
                      <motion.div
                        animate={{ y: [0, -1, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 2.5,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                        className="absolute top-4 right-4 text-3xl"
                      >
                        🫐
                      </motion.div>
                      <motion.div
                        animate={{ rotate: [0, 5, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 3,
                          ease: "easeInOut",
                        }}
                        className="absolute bottom-6 left-6 text-2xl"
                      >
                        🍯
                      </motion.div>
                    </motion.div>

                    {/* TIME text */}
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 1.2,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="text-white text-7xl font-black tracking-wider drop-shadow-lg"
                      style={{
                        fontFamily: "system-ui, -apple-system, sans-serif",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                      }}
                    >
                      TIME!
                    </motion.h2>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Text Content */}
            <div className="space-y-10 order-1 lg:order-2 lg:pr-24 text-right">
              {/* Main Headlines */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2,
                }}
                className="space-y-2 text-right font-denk text-[#F6AF03]"
              >
                <motion.h1
                  className="text-4xl lg:text-7xl font-bold leading-none tracking-tight text-[#F6AF03]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <span className="text-[#EB292A]">Every</span>{" "}
                  <span className="">Bite</span>
                </motion.h1>

                <motion.h1
                  className="text-4xl lg:text-7xl font-bold leading-none tracking-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
                >
                  <span className="text-[#EB292A]">Every</span>{" "}
                  <span className="">Crunch</span>
                </motion.h1>
              </motion.div>

              {/* Description and Button */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 1.0,
                }}
                className="space-y-8"
              >
                <motion.p className="text-[#2D2D2D]  leading-relaxed max-w-lg font-medium ml-auto text-right">
                  We provide best Waffle in Bangladesh. Don't forgot to <br /> check
                  your nearby Waffle Branch Location
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 150 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "#EB292A",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-[59px] px-5 py-2.5 justify-center items-center gap-2.5 rounded-[10px] border border-[#EB292A] bg-white text-[#EB292A] text-lg  ml-auto font-bai cursor-pointer"
                >
                  <motion.span
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                    className="text-xl"
                  >
                    📍
                  </motion.span>
                  <span>See Nearby Location</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
