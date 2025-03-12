import React from 'react'
import './TechnicalSkills.css'

export const TechnicalSkills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Habilidades Técnicas</h1>
      
      <div className="skills-grid">
        <div className="skill-category">
          <h2>Frontend</h2>
          <div className="skill-card">
            <ul>
              <li>React.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Responsive Design</li>
             
            </ul>
          </div>
        </div>

        <div className="skill-category">
          <h2>Control de Versiones</h2>
          <div className="skill-card">
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Vercel para despliegues</li>
              <li>Control de ramas</li>
              <li>Colaboración en equipo</li>
            </ul>
          </div>
        </div>


        <div className="skill-category">
          <h2>Habilidades Blandas</h2>
          <div className="skill-card">
            <ul>
              <li>Liderazgo</li>
              <li>Creatividad</li>
              <li>Trabajo en equipo</li>
              <li>Resolución de problemas</li>
              <li>Comunicación efectiva</li>
              <li>Adaptabilidad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 