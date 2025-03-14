import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="main-footer">
      <nav className="social-nav">
        <ul className="social-list">
          <li>
            <a href="https://www.facebook.com/estiven.villanueva.1069" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="social-icon facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/estiven_6_4/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-icon instagram" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/573233610583" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="social-icon whatsapp" />
            </a>
          </li>
          <li>
            <a href="https://github.com/estivenVillanueva" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="social-icon github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/estiven-villanueva-moscoso-88a136352/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="social-icon linkedin" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
