import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const background = isDarkTheme ? 'dark-container' : 'light-container'
      return (
        <>
          <Navbar />
          <div className={`not-found-container ${background}`}>
            <img
              className="not-found-image"
              alt="not found"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            />
            <h1>Lost Your Way?</h1>
            <p>We cannot seem to find the page you are looking for.</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
