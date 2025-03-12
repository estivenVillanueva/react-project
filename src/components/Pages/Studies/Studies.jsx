import React from 'react'
import './Studies.css'

export const Studies = () => {
  return (
    <div className="studies-container">
      <h1 className="studies-title">Formación Académica</h1>
      
      <div className="education-grid">
        <div className="education-item">
          <h2>Educación Formal</h2>
          <div className="study-card">
            <h3>Bachiller Técnico en Programación de Software</h3>
            <p>Institución Educativa Jesús Maestro - SENA</p>
            <span className="status completed">Graduado</span>
          </div>
        </div>

        <div className="education-item">
          <h2>Educación en Curso</h2>
          <div className="study-card">
            <h3>Tecnólogo en Análisis y Desarrollo de Software</h3>
            <p>SENA</p>
            <span className="status in-progress">En curso</span>
          </div>
          
          <div className="study-card">
            <h3>Diplomado en Gerencia de Marketing</h3>
            <p>Politécnico de Colombia</p>
            <span className="status in-progress">En curso</span>
          </div>
        </div>

        <div className="education-item">
          <h2>Cursos Virtuales</h2>
          <div className="study-card">
            <h3>GCFGlobal</h3>
            <ul>
              <li>Conceptos Básicos de Diseño Gráfico</li>
              <li>Creación de Sitios Web</li>
              <li>Conceptos Básicos de Programación</li>
            </ul>
            <span className="status completed">Completados</span>
          </div>
        </div>
      </div>
    </div>
  )
}
