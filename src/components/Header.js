import propTypes from 'prop-types'
import Button from './Button'
const Header = () => {
  return (
    // <body style={backgroundColor: "orange"}></body>
    <header className="header">
        <div className="dogalleryButton">
            <Button text= 'Dogallery' />
        </div>
        <div className="navButton">
            <Button text= 'Home' />
            <Button text= 'About' />
            <Button text= 'Categories' />
            <Button text= 'FAQ' />
            <Button text= 'Contact' />
        
        </div>
        
    </header>
  )
}

export default Header