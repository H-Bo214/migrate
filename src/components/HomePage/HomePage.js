import Header from '../Header/Header'
import Input from '../Input/Input'
import RandomCities from '../RandomCities/RandomCities'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [randomCities, setRandomCities] = useState([])
  const [selectedRandomCities, setSelectedRandomCities] = useState([])
  const [error, setError] = useState('')
  const hasRendered = useRef(false)

  const fetchData = () => {
    const urbanAreasAPI = 'https://api.teleport.org/api/continents/geonames%3ANA/urban_areas/'
    if (hasRendered.current === false) {
      hasRendered.current = true
      axios.get(urbanAreasAPI)
      .then(response => setRandomCities(response.data._links['ua:items']))
      .catch(err => console.error(err))
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const getFourRandomCities = () => {

  }
  
  console.log('randomCities: ', randomCities)
  return (
    <section>
      <Header />
      <Input />
      <RandomCities />
    </section>
  )
}

export default HomePage


  // useEffect(() => {
  //   const urbanAreasAPI = 'https://api.teleport.org/api/continents/geonames%3ANA/urban_areas/'
  //   if (hasRendered.current === false) {
  //     hasRendered.current = true
  //     fetch(urbanAreasAPI)
  //     .then(response => response.json())
  //     .then(data => console.log('data: ', data._links['ua:items']))
  //   }
  // }, [])