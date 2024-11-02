import './index.css'

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        const homeTheme = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        const background = isDarkTheme ? 'dark-container' : 'light-container'
        return (
          <>
            <Navbar />
            <div className={`about-container ${background}`}>
              <img alt="about" className="about-image" src={homeTheme} />
              <h1 className="about-heading">About</h1>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default About
