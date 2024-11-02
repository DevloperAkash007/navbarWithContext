import './index.css'

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        const homeTheme = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
        const background = isDarkTheme ? 'dark-container' : 'light-container'
        return (
          <>
            <Navbar />
            <div className={`home-container ${background}`}>
              <img alt="home" className="image" src={homeTheme} />
              <h1 className="home-heading">Home</h1>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default Home
