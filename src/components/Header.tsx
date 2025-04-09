'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-dark-400/90 backdrop-blur-sm sticky top-0 z-10 border-b border-dark-100">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="gradient-text">Desmond Mehta</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-light-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-light-300 hover:text-secondary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-light-300 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-light-300" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="block text-light-300 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block text-light-300 hover:text-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="block text-light-300 hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
} 