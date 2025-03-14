import React from 'react'
import './Experience.css'

export const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">Experiencia Laboral</h1>
      
      <div className="experience-grid">
        <div className="experience-item">
          <h2>Asesoría en Desarrollo de Software</h2>
          <div className="job-card">
            <h3>Asesor de Proyectos</h3>
            <p className="job-period">2022 - Presente</p>
            <ul className="job-responsibilities">
              <li>Asesoramiento técnico a estudiantes en proyectos de desarrollo de software</li>
              <li>Orientación en metodologías de desarrollo y buenas prácticas</li>
              <li>Apoyo en la resolución de problemas</li>
              <li>Guía en la implementación de soluciones técnicas</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <h2>Experiencia Administrativa</h2>
          <div className="job-card">
            <h3>Asistente Administrativo</h3>
            <ul className="job-responsibilities">
              <li>Gestión y organización de documentación</li>
              <li>Coordinación de actividades administrativas</li>
              <li>Atención y servicio al cliente</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
