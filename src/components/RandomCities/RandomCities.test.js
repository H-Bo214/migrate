import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import RandomCities from '../RandomCities/RandomCities'
import { MemoryRouter } from 'react-router-dom'
import  cityList from '../../testData'

describe('RandomCities', () => {
  it('should render a statement', () => {
    const setIsLoading = jest.fn()
    render(
      <RandomCities 
        cityList={cityList}
        setIsLoading={setIsLoading}
      />, {wrapper: MemoryRouter}
    )
    const h2 = screen.getByRole('heading', { name:/check out these cities/i})
    expect(h2).toBeInTheDocument()
  })

  it('should render all city images', () => {
    const setIsLoading = jest.fn()
    render(
      <RandomCities 
        cityList={cityList}
        setIsLoading={setIsLoading}
      />, {wrapper: MemoryRouter}
    )

    const rochester = screen.getByRole('img', { name: /Rochester, New York skyline/})
    const cleveland = screen.getByRole('img', { name: /Cleveland, Ohio skyline/})
    const sanSalvador = screen.getByRole('img', { name: /San Salvador, El Salvador skyline/})
    const kingston = screen.getByRole('img', { name: /Kingston, Jamaica skyline/})
    expect(rochester).toBeInTheDocument()
    expect(cleveland).toBeInTheDocument()
    expect(sanSalvador).toBeInTheDocument()
    expect(kingston).toBeInTheDocument()
  })

  it('should render all city names', () => {
    const setIsLoading = jest.fn()
    render(
      <RandomCities 
        cityList={cityList}
        setIsLoading={setIsLoading}
      />, {wrapper: MemoryRouter}
    )

    const rochester = screen.getByText(/Rochester, New York/)
    const cleveland = screen.getByText(/Cleveland, Ohio/)
    const sanSalvador = screen.getByText(/San Salvador, El Salvador/)
    const kingston = screen.getByText(/Kingston, Jamaica/)

    expect(rochester).toBeInTheDocument()
    expect(cleveland).toBeInTheDocument()
    expect(sanSalvador).toBeInTheDocument()
    expect(kingston).toBeInTheDocument()
  })

})