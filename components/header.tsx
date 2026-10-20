"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Header({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const navItems = [
    { name: "Servicios", href: "#servicios-section" },
    { name: "Metodologia", href: "#metodologia-section" },
    { name: "Nosotros", href: "#nosotros-section" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const isDark = variant === "dark"

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="w-full py-5 px-6 relative z-20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-marea-dark"}`}>
              marea
            </span>
            <span className="text-2xl font-bold text-marea-accent">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isDark
                    ? "text-white/60 hover:text-white hover:bg-white/[0.06]"
                    : "text-marea-dark/50 hover:text-marea-dark hover:bg-marea-dark/[0.04]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#cta-section" className="hidden md:block">
            <Button className="bg-marea-accent text-marea-dark hover:bg-marea-accent/90 hover:scale-[1.02] active:scale-[0.98] px-6 py-2 rounded-full font-semibold text-sm shadow-sm transition-all duration-300">
              Contactanos
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className={`${isDark ? "text-white hover:bg-white/10" : "text-marea-dark hover:bg-marea-dark/5"} transition-colors duration-300`}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu de navegacion</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="bg-white border-t border-marea-dark/10 text-marea-dark rounded-t-2xl">
              <SheetHeader>
                <SheetTitle className="text-left text-2xl font-bold text-marea-dark tracking-tight">
                  <span>marea</span>
                  <span className="text-marea-accent">.</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-marea-dark/60 hover:text-marea-dark text-lg py-3 px-2 rounded-lg hover:bg-marea-dark/[0.04] transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="#cta-section" className="w-full mt-4">
                  <Button className="bg-marea-accent text-marea-dark hover:bg-marea-accent/90 px-6 py-3 h-auto rounded-full font-semibold text-base shadow-sm w-full transition-all duration-300">
                    Contactanos
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
