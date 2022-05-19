import './Category.css'

const Category = ( { categoryScore, categoryName, icon } ) => {
  
  const formatCategoryScore = (score) => {
    if (score === 0) return 0
    if (score >= 9.5) return 10
    return score.toFixed(1)
  }

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
        <div className='score-container'>
          <p className='score'>{formatCategoryScore(categoryScore)}</p>
        </div>
      </section>
    </div>
  )
}

export default Category