import "./Category.css"
import { useEffect, useState } from "react"
import { formatCategoryScore } from "../../helpers"
import PropTypes from "prop-types"

const Category = ({ categoryScore, categoryName, icon }) => {
  const [progressBarStyle, setProgressBarStyle] = useState({})
  
  useEffect(() => {
    const startTimeout = () => {
      setTimeout(() => {
        const newStyle = {
          opacity: 1,
          width: `${categoryScore * 10}%`,
          transition: "1000ms",
        }
        setProgressBarStyle(newStyle)
      }, 500)
    }
    startTimeout()
    return clearTimeout(startTimeout)
  }, [categoryScore])

  return (
    <div className="category-container">
      <section className="category">
        <div>
          <img 
            src={icon} 
            alt={`${categoryName} icon`} 
            width="22" 
            height="22"
          />
        </div>
        <p className="category-name">{categoryName}</p>
      </section>
      <div className="all-scores-container">
        <section>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={progressBarStyle}></div>
          </div>
        </section>
        <section className="score-container">
          <p className="score">{formatCategoryScore(categoryScore)}</p>
        </section>
      </div>
    </div>
  )
}

Category.propTypes = {
  categoryScore: PropTypes.number,
  icon: PropTypes.string
}

export default Category
