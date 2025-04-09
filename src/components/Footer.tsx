'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-dark-300 border-t border-dark-100">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light-100">About</h3>
            <p className="text-light-400">
              Computer Science student at Yale University with research experience in bioelectronics, neural acoustic processing, and VLSI architecture.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-light-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-light-400 hover:text-secondary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-light-400 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light-100">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/dezash123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-400 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="mailto:desmond.mehta@yale.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-400 hover:text-secondary transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/desmond-mehta-68a13129b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-400 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-100 text-center text-light-400">
          <p>© {currentYear} Desmond Mehta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 