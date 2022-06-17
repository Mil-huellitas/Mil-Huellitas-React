import './Header.css'
import logo from './img/logo.png'
import LinkCustom from '../linkCustom/LinkCustom'
import navbarLink from '../../constants/navbarLink'

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="nav_logo-text">
          <img src={logo} alt="" className="logo-nav" />
          <p className="text-logo-header">
            Mil <br /> huellitas
          </p>
        </div>

        <input type="checkbox" id="check" />
        <label for="check" className="bar-btn">
          <i className="fa-solid fa-bars"></i>
        </label>

        <ul className="nav_menu-items">
          {navbarLink.map((item, index) => (
            <li key={index}>
              <LinkCustom to={item.to} activeclassName="navLink-select">{item.title}</LinkCustom>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
