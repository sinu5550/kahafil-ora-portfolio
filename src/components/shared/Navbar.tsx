"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    handleHashChange(); // Set initial hash
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "#about" },
    { name: "THOUGHTS", href: "#thoughts" },
  ];

  const socialLinks = [
    { name: "MAIL", href: "mailto:hello@kahafiloras.com" },
    { name: "X", href: "https://x.com" },
    { name: "FB", href: "https://facebook.com" },
    { name: "LI", href: "https://linkedin.com" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return activeHash === href;
    }
    return pathname === href && (!activeHash || activeHash === "");
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6 ">
      <div className="flex justify-between items-center container-custom  w-full ">
        <div className="flex 150:gap-50 125:gap-80 3xl:gap-106 -ml-3 ">
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
              className={`text-[22px] font-fragment-mono font-medium text-primary px-3 pr-2  tracking-widest transition-all pb-1 border-b ${
                isActive(link.href)
                  ? "border-primary"
                  : " border-transparent hover:border-primary "
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-8">
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
    </nav>
  );
}
