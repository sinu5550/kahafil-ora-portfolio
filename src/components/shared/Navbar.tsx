"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    handleHashChange(); // Set initial hash
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "THOUGHTS", href: "/#thoughts" },
  ];

  const socialLinks = [
    { name: "MAIL", href: "mailto:kahafil@goinnovior.com" },
    { name: "X", href: "https://x.com" },
    { name: "FB", href: "https://facebook.com" },
    { name: "LI", href: "https://linkedin.com" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && !activeHash;
    if (href === "/about") return pathname === "/about";
    if (href.startsWith("/#") || href.startsWith("#")) {
      const hash = href.includes("#") ? "#" + href.split("#")[1] : "";
      return activeHash === hash;
    }
    return pathname === href;
  };

  // Custom Hamburger Icon (4 bars alternating)
  const MenuIcon = () => (
    <svg 
      width="28" 
      height="28" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary -mt-2"
    >
      <rect x="4" y="6" width="24" height="2.5" rx="1.25" fill="currentColor" />
      <rect x="4" y="12" width="18" height="2.5" rx="1.25" fill="currentColor" />
      <rect x="4" y="18" width="24" height="2.5" rx="1.25" fill="currentColor" />
      <rect x="4" y="24" width="18" height="2.5" rx="1.25" fill="currentColor" />
    </svg>
  );

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6">
      <div className="flex justify-between items-center container-custom w-full">
        {/* Mobile Toggle - Left Aligned */}
        <div className="lg:hidden z-50">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -ml-2 hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} className="text-primary" /> : <MenuIcon  />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex 150:gap-50 125:gap-80 3xl:gap-106 -ml-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                if (link.href.startsWith("#")) {
                  setActiveHash(link.href);
                } else {
                  setActiveHash("");
                }
              }}
              className={`text-[22px] font-fragment-mono font-medium text-primary px-3 pr-2 tracking-widest transition-all pb-1 border-b ${
                isActive(link.href)
                  ? "border-primary"
                  : "border-transparent hover:border-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Social Links */}
        <div className="hidden lg:flex gap-8">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[22px] font-fragment-mono font-medium tracking-widest text-primary transition-colors pb-1 border-transparent border-b"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden absolute top-0 left-0 w-full min-h-[400px] bg-background border-b border-primary/10 shadow-2xl pt-24 pb-12 px-8 z-40"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      if (link.href.startsWith("#")) {
                        setActiveHash(link.href);
                      } else {
                        setActiveHash("");
                      }
                      setIsOpen(false);
                    }}
                    className={`text-3xl font-fragment-mono font-medium tracking-tighter ${
                      isActive(link.href) ? "text-primary border-b-2 border-primary" : "text-primary/60"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="h-px bg-primary/20 mt-4 mb-2" />
              
              <div className="flex flex-wrap gap-6">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xl font-fragment-mono font-medium tracking-widest text-primary/70 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
