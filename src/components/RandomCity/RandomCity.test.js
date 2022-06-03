import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import RandomCity from '../RandomCity/RandomCity'
import { MemoryRouter } from 'react-router-dom'
import { cityList } from '../../testData.js'

describe('RandomCity', () => {
  it('should render a city name',  () => {
    const handleFetchCityDetails = jest.fn(e => e.preventDefault(e))
    render(
      <RandomCity
        city={cityList[0].name}
        imgSrc={cityList[0].image}
        handleFetchCityDetails={handleFetchCityDetails}
      />, {wrapper: MemoryRouter}
    )
    const rochester = screen.getByText(/Rochester, New York/i)
     expect(rochester).toBeInTheDocument()
  })

  it('should render a city image', () => {
    const handleFetchCityDetails = jest.fn( e => e.preventDefault())
    render(
      <RandomCity
        city={cityList[0].name}
        imgSrc={cityList[0].image}
        handleFetchCityDetails={handleFetchCityDetails}
      />, {wrapper: MemoryRouter}
    )
    const rochesterImg =screen.getByRole('img', { name: /Rochester, New York skyline/})
    expect(rochesterImg).toBeInTheDocument()
  })
  
  it('should initiate an API call when the image is clicked', () => {
    const handleFetchCityDetails = jest.fn()
    render(
      <RandomCity
        city={cityList[0].name}
        imgSrc={cityList[0].image}
        handleFetchCityDetails={handleFetchCityDetails}
      />, {wrapper: MemoryRouter}
    )

    const rochesterImg =screen.getByRole('img', { name: /Rochester, New York skyline/})
    expect(rochesterImg).toBeInTheDocument()

    fireEvent.click(rochesterImg)
    expect(handleFetchCityDetails).toHaveBeenCalledTimes(1)
  })

})