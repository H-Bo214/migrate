import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import CityRating from "../CityRating/CityRating"
import { MemoryRouter } from "react-router-dom"

describe("CityRating", () => {
  it("should render a city name", () => {
    const cityName = "Seattle"
    const rating = 60
    render(
      <CityRating 
        cityName={cityName} 
        rating={rating} 
      />,
      { wrapper: MemoryRouter }
    )
    const name = screen.getByText(/Seattle/i)
    const img = screen.getByAltText(/Blue star icon/i)
    const score = screen.getByText(/60/i)
    expect(name).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })
  
})
