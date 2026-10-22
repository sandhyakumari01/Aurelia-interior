
"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaShoppingBag,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useCart } from "@/src/context/cartContext";

interface NavbarProps {
  onOpenCart?: () => void;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Collections", href: "/collections" },
];

function NavbarContent({ onOpenCart }: NavbarProps) {
  const { cart } = useCart();
  const pathname = usePathname();

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = search.trim();

    if (query) {
      window.location.href = `/collections?search=${encodeURIComponent(query)}`;
    }
  };

  const closeMenu = () => setMenuOpen(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-[#964B00]/15 bg-[#F9F8F6]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-4 sm:px-8 lg:px-16">
        <Link href="/" className="shrink-0" onClick={closeMenu}>
          <span className="block text-lg font-bold tracking-[0.12em] text-[#5C2E00] sm:text-xl">
            AURELIA
          </span>
          <span className="block text-[9px] tracking-[0.3em] text-[#964B00]">
            INTERIOR
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-4 text-sm font-medium text-[#5C2E00] md:flex lg:gap-7">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative py-2 transition hover:text-[#964B00] ${
                isActive(item.href)
                  ? "text-[#964B00] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#964B00]"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <form
          onSubmit={handleSearch}
          className="hidden w-40 shrink-0 items-center rounded-full border border-[#964B00]/20 bg-white px-3 py-2.5 focus-within:border-[#964B00] md:flex lg:w-56"
        >
          <FaSearch className="shrink-0 text-sm text-[#964B00]" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search furniture..."
            aria-label="Search furniture"
            className="ml-2 w-full min-w-0 bg-transparent text-sm text-[#5C2E00] outline-none placeholder:text-neutral-400"
          />
        </form>

        <div className="ml-auto flex shrink-0 items-center gap-3 md:ml-0">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Open shopping cart, ${cartCount} items`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#964B00] text-white transition hover:bg-[#5C2E00]"
          >
            <FaShoppingBag size={15} />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#F9F8F6] bg-[#5C2E00] px-1 text-[10px] font-semibold">
              {cartCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#964B00]/20 text-[#5C2E00] transition hover:bg-[#EFE7DF] md:hidden"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[#964B00]/15 bg-[#F9F8F6] px-5 py-4 md:hidden">
          <nav className="flex flex-col items-start gap-4 text-sm font-medium text-[#5C2E00]">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`w-fit border-b-2 pb-1 transition ${
                  isActive(item.href)
                    ? "border-[#964B00] text-[#964B00]"
                    : "border-transparent hover:text-[#964B00]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <form
            onSubmit={handleSearch}
            className="mt-5 flex items-center rounded-full border border-[#964B00]/20 bg-white px-4 py-3 focus-within:border-[#964B00]"
          >
            <FaSearch className="text-sm text-[#964B00]" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search furniture..."
              aria-label="Search furniture"
              className="ml-3 w-full bg-transparent text-sm text-[#5C2E00] outline-none"
            />
          </form>
        </div>
      )}
    </header>
  );
}

export default function Navbar(props: NavbarProps) {
  return (
    <Suspense
      fallback={
        <header className="h-16 border-b border-[#964B00]/15 bg-[#F9F8F6]" />
      }
    >
      <NavbarContent {...props} />
    </Suspense>
  );
}
