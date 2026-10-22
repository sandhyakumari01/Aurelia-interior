
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

interface NavbarProps {
  onOpenCart?: () => void;
}

export default function Navbar({ onOpenCart }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-neutral-200 px-4 sm:px-4 lg:px-16 py-4 text-[#964B00]">
      <div className="flex max-w-[1440px] mx-auto justify-between items-center">
        <Link href="/" className="text-[#964B00] font-bold">
          AURELIA INTERIOR
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm">
          <Link href="/services" className="hover:text-black transition">
            Services
          </Link>
          <Link href="/collections" className="hover:text-black transition">
            Collections
          </Link>
        </nav>

        <button
          onClick={onOpenCart}
          aria-label="Open shopping cart"
          className="relative flex items-center bg-neutral-300 gap-2 rounded-full p-3"
        >
          <FaShoppingBag />
          <span className="absolute -top-1 -right-1 bg-[#964B00] text-white w-5 h-5 rounded-full flex items-center justify-center">
            0
          </span>
        </button>
      </div>
    </header>
  );
}
