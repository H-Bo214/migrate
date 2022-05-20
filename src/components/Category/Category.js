import './Category.css'
import { useEffect, useState } from 'react'

const Category = ( { categoryScore, categoryName, icon } ) => {
  const [progressBarStyle, setProgressBarStyle] = useState({})

  useEffect(() => {
    console.log('rendered')
    const startTimeout = () => {
      setTimeout(() => {
        const newStyle = {
          opacity: 1, 
          width: `${categoryScore * 10}%`,
          transition: '1000ms',
        }
        setProgressBarStyle(newStyle)
      }, 500)
    }
    startTimeout()
    return clearTimeout(startTimeout)
  },[])

  const formatCategoryScore = (score) => {
    if (score === 0) return 0
    if (score >= 9.9 || score === 10.0) return 10
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
      <div className='all-scores-container'>
        <section>
          <div className='progress-bar'>
            <div className='progress-bar-fill' style={progressBarStyle}></div>
          </div>
        </section>

        <section className='score-container'>
          <p className='score'>{formatCategoryScore(categoryScore)}</p>
        </section>

      </div>
    </div>
  )
}

export default Category