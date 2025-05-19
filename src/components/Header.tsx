// components/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaImages,
  FaBlog,
  FaPhone,
  FaBriefcase,
  FaSignInAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-20 z-50 flex justify-center">
      <div
        className="relative w-[95%] max-w-7xl 
        backdrop-blur-md  
        rounded-4xl shadow-xl 
        px-4 sm:px-6 md:px-8 py-4 
        flex items-center justify-between"
        style={{ backgroundColor: "rgba(236, 176, 98, 0.3)" }}
      >
        {/* LOGO */}
        <div className="absolute -top-10 sm:-top-12 left-4 sm:left-6 md:left-8">
          <Image
            src="/images/logo-akartalas.png"
            alt="Logo"
            width={100} // DEFAULT: MOBILE
            height={100}
            className="
              w-[140px] h-auto      // MOBILE
              sm:w-[90px]         // SMALL TABLET
              pt-4 md:w-[150px]        // DESKTOP
            "
          />
        </div>

        {/* BRAND TITLE - optional bisa diisi kalau kamu mau */}
        <div className="ml-20 text-base md:text-xl font-bold text-gray-800">
          {/* Dapur Akartalas */}
        </div>

        {/* DESKTOP MENU */}
        <nav
          className="hidden md:flex flex-wrap gap-4 md:gap-6 
            text-[#5D4037] text-sm md:text-base font-medium items-center"
        >
          <Link href="#beranda" className="flex items-center gap-1 hover:underline">
            <FaHome /> Beranda
          </Link>
          <Link href="#tentang" className="flex items-center gap-1 hover:underline">
            <FaInfoCircle /> Tentang
          </Link>
          <Link href="#layanan" className="flex items-center gap-1 hover:underline">
            <FaConciergeBell /> Layanan
          </Link>
          <Link href="#galeri" className="flex items-center gap-1 hover:underline">
            <FaImages /> Galeri
          </Link>
          <Link href="#portfolio" className="flex items-center gap-1 hover:underline">
            <FaBriefcase /> Portfolio
          </Link>
          <Link href="#kontak" className="flex items-center gap-1 hover:underline">
            <FaPhone /> Kontak
          </Link>
          <Link href="#blog" className="flex items-center gap-1 hover:underline">
            <FaBlog /> Blog
          </Link>
          <Link href="#login" className="flex items-center gap-1 hover:underline">
            <FaSignInAlt /> Login
          </Link>
        </nav>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#5D4037] text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-35 right-4
    max-w-sm w-[50%] bg-white/50 backdrop-blur-md 
    rounded-2xl shadow-xl z-40 py-6 px-4 
    space-y-4 text-[#5D4037] text-sm font-medium">
          <Link href="#beranda" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
            <FaHome /> Beranda
          </Link>
          <Link href="#tentang" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
            <FaInfoCircle /> Tentang
          </Link>
          <Link href="#layanan" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
            <FaConciergeBell /> Layanan
          </Link>
          <Link href="#galeri" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
            <FaImages /> Galeri
          </Link>
          <Link href="#portfolio" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
            <FaBriefcase /> Portfolio
          </Link>
          <Link href="#kontak" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
            <FaPhone /> Kontak
          </Link>
          <Link href="#blog" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
            <FaBlog /> Blog
          </Link>
          <Link href="#login" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
            <FaSignInAlt /> Login
          </Link>
        </div>
      )}
    </header>
  );
}