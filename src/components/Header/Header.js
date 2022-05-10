import logo from '../../assets/images/migrate-logo.svg'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='img-container'>
        <img alt='blue gradient circle with geometric bird' src={logo} />
      </div>
      <h1 className='question'>Where do you want to live?</h1>
    </header>
  )
}

export default Header