import Category from "../Category/Category"
import house from '../../assets/images/house.svg'
import costOfLiving from '../../assets/images/cost-of-living.svg'
import startUps from '../../assets/images/start-ups.svg'
import ventureCapital from '../../assets/images/venture-capital.svg'
import travel from '../../assets/images/travel.svg'
import commute from '../../assets/images/commute.svg'
import businessFreedom from '../../assets/images/business-freedom.svg'
import safety from '../../assets/images/safety.svg'
import healthcare from '../../assets/images/healthcare.svg'
import education from '../../assets/images/education.svg'
import environmentalQuality from '../../assets/images/environmental-quality.svg'
import economy from '../../assets/images/economy.svg'
import taxation from '../../assets/images/taxation.svg'
import internetAccess from '../../assets/images/internet-access.svg'
import leisureCulture from '../../assets/images/leisure-culture.svg'
import tolerance from '../../assets/images/tolerance.svg'
import outdoors from '../../assets/images/outdoors.svg'
import './Categories.css'

const Categories = ( { scores } ) => {
  const icons = [
    house,
    costOfLiving,
    startUps,
    ventureCapital,
    travel,
    commute,
    businessFreedom,
    safety,
    healthcare,
    education,
    environmentalQuality,
    economy,
    taxation,
    internetAccess,
    leisureCulture,
    tolerance,
    outdoors
  ]

  const allCategoryScores = scores.map((category, index) => {
    const title = Object.keys(category)
    return <Category categoryName={title} categoryScore={category[title]} key={title} icon={icons[index]}/>
  })
  return (
    <section className="all-categories-container">
      {<section>{allCategoryScores}</section>}
    </section>
  )
}

export default Categories