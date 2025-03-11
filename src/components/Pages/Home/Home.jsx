import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-section">
        <div className="profile-content">
          <h1>Estiven Villanueva Moscoso</h1>
          <h2>Frontend Developer</h2>
          
          <div className="description">
            <p>¡Hola! Soy un desarrollador frontend de 18 años apasionado por crear experiencias web excepcionales.</p>
            
            <div className="highlights">
              <div className="highlight-item">
                <h3>Educación</h3>
                <ul>
                  <li>Técnico en Programación de Software - SENA</li>
                  <li>Tecnólogo en Análisis y Desarrollo de Software - SENA (En curso)</li>
                </ul>
              </div>

              <div className="highlight-item">
                <h3>Especialización</h3>
                <p>Especializado en desarrollo Frontend con enfoque en:</p>
                <ul>
                  <li>React.js</li>
                  <li>HTML & CSS</li>
                  <li>JavaScript </li>
                  <li>Diseño Responsivo</li>
                  <li>Githud</li>
                  <li>Control de verciones vercel</li>
                </ul>
              </div>

              <div className="highlight-item">
                <h3>Objetivos</h3>
                <p>Busco oportunidades para:</p>
                <ul>
                  <li>Crear interfaces innovadoras</li>
                  <li>Desarrollar mas la creatividad</li>
                  <li>Aprender nuevas tecnologías</li>
                  <li>Colaborar en proyectos </li>
                </ul>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  )
}
