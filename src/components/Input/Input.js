import magnifyingGlass from '../../assets/images/magnifying-glass.svg'
import './Input.css'
const Input = () => {
  return (
    <section className='input-container'>
      <img alt='blue magnifying glass' src={magnifyingGlass} />
      <input
      type='text'
      placeholder='search a city'
      />
    </section>
  )
}

export default Input