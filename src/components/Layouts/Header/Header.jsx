import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header className="main-header">
      <nav className="nav-container">
        <ul className="nav-list">
          <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Inicio</NavLink></li>
          <li><NavLink to="/profile" className={({isActive}) => isActive ? 'active' : ''}>Profile</NavLink></li>
          <li><NavLink to="/studies" className={({isActive}) => isActive ? 'active' : ''}>Studies</NavLink></li>
          <li><NavLink to="/experience" className={({isActive}) => isActive ? 'active' : ''}>Experience</NavLink></li>
          <li><NavLink to="*">Links Rotos</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
