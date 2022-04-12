import seattle from '../../assets/images/seattle-skyline.jpeg'

const RandomCity = () => {
  return (
    <div className='city-img-container'>
      <img 
        className='city-img' 
        alt="city skyline" 
        src={seattle}
      />
      <h3 className='city-name'>Seattle</h3>
    </div>
  )
}

export default RandomCity