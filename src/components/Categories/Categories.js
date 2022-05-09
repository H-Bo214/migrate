import Category from "../Category/Category"
import house from '../../assets/images/house.svg'
import document from '../../assets/images/document.svg'
import hand from '../../assets/images/hand.svg'
import leaf from '../../assets/images/leaf.svg'

const Categories = ( { scores } ) => {
  console.log('scores IN CAT', scores['Cost of Living'])
  const costOfLiving = scores['Cost of Living']
  const taxation = scores['Taxation']
  const healthcare = scores['Healthcare']
  const environmentalQuality = scores['Environmental Quality']

  return (
    <section>
      <Category 
        categoryName='Cost of living' 
        categoryScore={costOfLiving}
        icon={house}
      />
      <Category 
        categoryName='Taxation' 
        categoryScore={taxation}
        icon={document}
      />
      <Category 
        categoryName='Healthcare'
        categoryScore={healthcare}
        icon={hand}
      />
      <Category 
        categoryName='Environmental quality'
        categoryScore={environmentalQuality}
        icon={leaf}
      />
    </section>
  )
}

export default Categories