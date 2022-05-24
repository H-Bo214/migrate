import logo from '../../assets/images/migrate-logo.svg'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='img-container'>
        <img alt='Blue gradient circle with a geometric bird in the center.' src={logo} />
      </div>
      <h1 className='question'>Where do you want to live?</h1>
    </header>
  )
}

export default Header