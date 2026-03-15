import Link from "next/link";

export default function Navbar() {
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

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6">
      <div className="flex justify-between items-center container-custom  w-full ">
        <div className="flex gap-106">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[22px] font-fragment-mono font-medium tracking-widest text-primary/70 hover:text-primary transition-colors"
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
              className="text-[22px] font-fragment-mono font-medium tracking-widest text-primary/70 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
