import './Category.css'

const Category = ( { categoryScore, categoryName, icon } ) => {
  return (
    <div className='category-container'>
      <section className='category'>
        <div>
          <img src={icon} alt={`${categoryName} icon`}/>
        </div>
        <p className='category-name'>{categoryName}</p>
      </section>
      <section className='category-score'>
        <div className='fill-bar'>
          <div className='fill-bar-progress'></div>
        </div>
        <div>
          <p className='score'>{categoryScore.toFixed(1)}</p>
        </div>
      </section>
    </div>
  )
}

export default Category