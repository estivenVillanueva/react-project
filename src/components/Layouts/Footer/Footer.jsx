import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="main-footer">
      <nav className="social-nav">
        <ul className="social-list">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="social-icon facebook" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-icon instagram" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/tunumero" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="social-icon whatsapp" />
            </a>
          </li>
          <li>
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="social-icon github" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="social-icon linkedin" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
