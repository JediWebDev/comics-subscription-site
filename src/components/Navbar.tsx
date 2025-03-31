import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b">
      {/* Desktop/Nav container */}
      <div className="flex justify-between items-center py-4 px-4">
        <Link href="/" className="text-xl font-bold">MyGallery</Link>
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/gallery">Gallery</Link>
          <Link href="/subscribe">Subscribe</Link>
          <Link href="/account">
            <Avatar>
              <AvatarImage src="/user.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Link>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {/* Simple 'hamburger' icon (ASCII or actual icon) */}
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile menu (collapsible) */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          <Link href="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
          <Link href="/subscribe" onClick={() => setIsOpen(false)}>
            Subscribe
          </Link>
          <Link href="/account" onClick={() => setIsOpen(false)}>
            <div className="inline-flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/user.jpg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <span>Account</span>
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}