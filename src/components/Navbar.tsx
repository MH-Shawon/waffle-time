"use client";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { name: "Menu", href: "#menu", active: true },
  { name: "Branches", href: "#branches", active: false },
  { name: "Categories", href: "#categories", active: false },
  { name: "Gallery", href: "#gallery", active: false },
];

const NavBar = () => {
  // Refs for navigation container and elements
  const navContainerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLSpanElement>(null);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const floatingIndicatorRef = useRef<HTMLDivElement>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFloating, setIsFloating] = useState(false);

  // Initial dramatic entrance animation
  useEffect(() => {
    if (!navContainerRef.current) return;

    // Create timeline for coordinated animations
    const tl = gsap.timeline();

    // Dramatic navbar entrance from top with bounce
    tl.fromTo(
      navContainerRef.current,
      {
        y: -150,
        opacity: 0,
        scale: 0.8,
        rotationX: -90,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.8)",
      }
    );

    // Logo with magnetic effect
    tl.fromTo(
      logoRef.current,
      { scale: 0, rotation: -180 },
      {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(2)",
      },
      "-=0.8"
    );

    // Brand text with typewriter effect
    tl.fromTo(
      brandRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Stagger animate nav items with wave effect
    tl.fromTo(
      navItemsRef.current,
      { y: -30, opacity: 0, rotationX: -45 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.5)",
      },
      "-=0.6"
    );

    // Floating indicator pulse
    tl.fromTo(
      floatingIndicatorRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    );
  }, []);

  // Enhanced scroll-based floating effects
  useEffect(() => {
    if (!navContainerRef.current) return;

    if (currentScrollY === 0) {
      // Top position: normal state
      setIsNavVisible(true);
      setIsFloating(false);

      gsap.to(navContainerRef.current, {
        y: 0,
        scale: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        borderRadius: "0px",
        backdropFilter: "blur(0px)",
        margin: "0px",
        duration: 0.5,
        ease: "power3.out",
      });

      // Reset floating indicator
      gsap.to(floatingIndicatorRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
      });
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down: hide with dramatic effect
      setIsNavVisible(false);
      setIsFloating(true);

      gsap.to(navContainerRef.current, {
        y: -120,
        scale: 0.95,
        rotationX: -15,
        duration: 0.6,
        ease: "power3.in",
      });
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show with floating effect
      setIsNavVisible(true);
      setIsFloating(true);

      gsap.to(navContainerRef.current, {
        y: 0,
        scale: 1,
        rotationX: 0,
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        boxShadow:
          "0 20px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        borderRadius: "24px",
        backdropFilter: "blur(20px)",
        margin: "12px",
        duration: 0.6,
        ease: "power3.out",
      });

      // Show floating indicator
      gsap.to(floatingIndicatorRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
      });
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // Enhanced logo hover with magnetic effect
  const animateLogo = (isHovering: boolean) => {
    if (!logoRef.current) return;

    if (isHovering) {
      gsap.to(logoRef.current, {
        scale: 1.2,
        rotation: 15,
        boxShadow: "0 10px 30px rgba(239, 68, 68, 0.4)",
        duration: 0.4,
        ease: "back.out(1.5)",
      });

      // Brand text glow effect
      gsap.to(brandRef.current, {
        textShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
        scale: 1.05,
        duration: 0.3,
      });
    } else {
      gsap.to(logoRef.current, {
        scale: 1,
        rotation: 0,
        boxShadow: "0 4px 15px rgba(239, 68, 68, 0.2)",
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(brandRef.current, {
        textShadow: "none",
        scale: 1,
        duration: 0.3,
      });
    }
  };

  // Enhanced nav item hover effects
  const animateNavItem = (index: number, isHovering: boolean) => {
    const item = navItemsRef.current[index];
    if (!item) return;

    if (isHovering) {
      gsap.to(item, {
        y: -3,
        scale: 1.05,
        textShadow: "0 4px 15px rgba(239, 68, 68, 0.3)",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(item, {
        y: 0,
        scale: 1,
        textShadow: "none",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  // Enhanced mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    if (!isMobileMenuOpen && mobileMenuRef.current) {
      // Dramatic opening animation
      gsap.fromTo(
        mobileMenuRef.current,
        {
          height: 0,
          opacity: 0,
          rotationX: -90,
          transformOrigin: "top center",
        },
        {
          height: "auto",
          opacity: 1,
          rotationX: 0,
          duration: 0.5,
          ease: "back.out(1.5)",
        }
      );

      // Stagger animate mobile menu items with bounce
      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll("a"),
        { x: -30, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          delay: 0.2,
          duration: 0.4,
          ease: "back.out(1.5)",
        }
      );
    } else if (isMobileMenuOpen && mobileMenuRef.current) {
      // Closing animation
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        rotationX: -90,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  };

  return (
    <>
      {/* Floating indicator */}
      <div
        ref={floatingIndicatorRef}
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-40 opacity-0 ${
          isFloating ? "block" : "hidden"
        }`}
      >
        <div className="w-2 h-2 bg-[#EB292A] rounded-full animate-pulse shadow-lg"></div>
      </div>

      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/50 transition-all duration-500"
        style={{
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          borderRadius: isFloating ? "24px" : "0px",
          margin: isFloating ? "12px" : "0px",
        }}
      >
        <header className="w-full">
          <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
            {/* Enhanced Logo and Brand */}
            <div className="flex items-center gap-4">
              <div
                ref={logoRef}
                onMouseEnter={() => animateLogo(true)}
                onMouseLeave={() => animateLogo(false)}
                className="relative w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center transform origin-center cursor-pointer shadow-lg"
                style={{ boxShadow: "0 4px 15px rgba(239, 68, 68, 0.2)" }}
              >
                <img
                  src="/assets/Images/logo.png"
                  alt="Waffle Time Logo"
                  className="w-8 h-8 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              </div>
              <span
                ref={brandRef}
                className="text-[#EB292A]  text-3xl tracking-wide font-denk bg-gradient-to-r from-red-500 to-red-600 bg-clip-text cursor-pointer "
              >
                Waffle Time
              </span>
            </div>

            {/* Enhanced Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  ref={(el) => void (navItemsRef.current[index] = el)}
                  href={item.href}
                  onMouseEnter={() => animateNavItem(index, true)}
                  onMouseLeave={() => animateNavItem(index, false)}
                  className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 cursor-pointer font-denk ${
                    item.active
                      ? "text-red-500 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-red-500 after:to-red-600 after:rounded-full after:shadow-lg"
                      : "text-gray-700 hover:text-red-500 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-1 hover:after:w-full hover:after:bg-gradient-to-r hover:after:from-red-500 hover:after:to-red-600 hover:after:rounded-full hover:after:origin-left hover:after:scale-x-100 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-red-500 after:to-red-600 after:rounded-full after:origin-right after:scale-x-0 after:transition-transform after:duration-500 after:ease-out"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-3 rounded-xl bg-gray-50 hover:bg-red-50 transition-all duration-300 hover:scale-110 focus:outline-none group"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 text-gray-700 group-hover:text-red-500 transition-all duration-500 ${
                  isMobileMenuOpen ? "rotate-180 scale-110" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </nav>

          {/* Enhanced Mobile Menu Dropdown */}
          <div
            ref={mobileMenuRef}
            className="md:hidden overflow-hidden h-0 opacity-0"
            style={{ transformOrigin: "top center" }}
          >
            <div className="px-6 py-4 space-y-2 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100/50 backdrop-blur-md ">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-105 font-denk ${
                    item.active
                      ? "text-red-500 bg-gradient-to-r from-red-50 to-red-100 shadow-md"
                      : "text-gray-700 hover:text-red-500 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:shadow-md"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default NavBar;
