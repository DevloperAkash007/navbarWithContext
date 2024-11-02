import {Link} from 'react-router-dom'

import './index.css'

import ThemeContext from '../../context/ThemeContext'

const websiteDarkLogo =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
const websiteLightLogo =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

const lightTheme = 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

const darkTheme = 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

const Navbar = () => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {toggleTheme, isDarkTheme} = value
        const backgroundNavbar = isDarkTheme ? 'dark-bg' : 'light-bg'
        const websiteLogo = isDarkTheme ? websiteDarkLogo : websiteLightLogo
        const theme = isDarkTheme ? darkTheme : lightTheme
        const navItemColor = isDarkTheme
          ? 'nav-item-dark-color'
          : 'nav-item-white-color'

        const onClickThemeBtn = () => toggleTheme()

        return (
          <nav className={`navbar ${backgroundNavbar}`}>
            <div className="nav-content">
              <button type="button">
                <Link to="/">
                  <img alt="website logo" className="logo" src={websiteLogo} />
                </Link>
              </button>
              <ul className="nav-link-container">
                <li>
                  <Link to="/" className={`nav-link ${navItemColor}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={`nav-link ${navItemColor}`}>
                    About
                  </Link>
                </li>
              </ul>
              <button
                data-testid="theme"
                type="button"
                onClick={onClickThemeBtn}
              >
                <img alt="theme" className="logo" src={theme} />
              </button>
            </div>
          </nav>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default Navbar
