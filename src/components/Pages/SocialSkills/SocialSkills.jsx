import React from 'react'
import './SocialSkills.css'

export const SocialSkills = () => {
  return (
    <div className="social-skills-container">
      <h1 className="social-skills-title">Habilidades Sociales</h1>
      
      <div className="skills-grid">
        <div className="skill-category">
          <h2>Comunicación</h2>
          <div className="skill-card">
            <ul>
              <li>Comunicación efectiva</li>
              <li>Escucha activa</li>
              <li>Capacidad de expresión clara</li>
              <li>Habilidad para dar y recibir feedback</li>
            </ul>
          </div>
        </div>

        <div className="skill-category">
          <h2>Trabajo en Equipo</h2>
          <div className="skill-card">
            <ul>
              <li>Colaboración proactiva</li>
              <li>Adaptabilidad </li>
              <li>Resolución de conflictos</li>
              <li>Apoyo a compañeros</li>
            </ul>
          </div>
        </div>

        <div className="skill-category">
          <h2>Liderazgo</h2>
          <div className="skill-card">
            <ul>
              <li>Iniciativa en proyectos</li>
              <li>Capacidad de organización</li>
              <li>Toma de decisiones</li>
              <li>Motivación de equipos</li>
            </ul>
          </div>
        </div>

        <div className="skill-category">
          <h2>Habilidades Personales</h2>
          <div className="skill-card">
            <ul>
              <li>Gestión del tiempo</li>
              <li>Pensamiento crítico</li>
              <li>Creatividad</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 