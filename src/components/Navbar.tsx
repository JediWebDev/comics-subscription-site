'use client'

import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b">
      {/* Main Nav Row */}
      <div className="flex items-center py-4 px-4">
        {/* Left Column: Mobile Hamburger, Desktop Brand */}
        <div className="flex-1 flex items-center gap-2">
          {/* Hamburger shows on mobile only */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className="text-2xl">☰</span>
          </button>

          {/* Desktop brand name (hidden on mobile) */}
          <Link href="/" className="hidden md:block text-xl font-bold">
            Squirrely Tails
          </Link>
        </div>

        {/* Center Column: Mobile Brand, Desktop Nav Links */}
        <div className="flex-1 flex justify-center">
          {/* Brand name centered on mobile */}
          <Link href="/" className="md:hidden text-xl font-bold">
            Squirrely Tails
          </Link>
          {/* Desktop links (gallery/comics/games) hidden on mobile */}
          <div className="hidden md:flex gap-4">
            <Link href="/gallery">Gallery</Link>
            <Link href= "/comics">Comics</Link>
            <Link href="/games">Games</Link>
          </div>
        </div>

        {/* Right Column: Subscribe + Account */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <Link href="/subscribe">Subscribe</Link>
          <Link href="/account">
            <Avatar>
              <AvatarImage src="/user.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>

      {/* Mobile menu (collapsible) */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          <Link href="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
          <Link href="/comics" onClick={() => setIsOpen(false)}>
            Comics
          </Link>
          <Link href="/games" onClick={() => setIsOpen(false)}>
            Games
          </Link>
        </div>
      )}
    </nav>
  );
}