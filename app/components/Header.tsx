'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-neutral-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-secondary text-xs font-bold">TC</span>
            </div>
            <span className="text-primary font-bold text-lg">Thrift Country</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-neutral-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Accueil
            </Link>
            <Link 
              href="/catalogue" 
              className="text-neutral-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Catalogue
            </Link>
            <Link 
              href="/about" 
              className="text-neutral-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              À propos
            </Link>
          </div>

          {/* CTA */}
          <Link 
            href="/catalogue"
            className="btn-primary text-sm"
          >
            Découvrir
          </Link>
        </nav>
      </div>
    </motion.header>
  )
} 