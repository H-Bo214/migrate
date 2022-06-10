import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import UrbanAreaImage from "../UrbanAreaImage/UrbanAreaImage"
import { MemoryRouter } from "react-router-dom"

describe("UrbanAreaImage", () => {
  it("should render a city image", () => {
    const cityName = "Ottawa, Canada"
    const img =
      "https://d13k13wj6adfdf.cloudfront.net/urban_areas/ottawa-b78a66e47b.jpg"
    render(<UrbanAreaImage cityName={cityName} img={img} />, {
      wrapper: MemoryRouter,
    })
    const cityImg = screen.getByRole("img", {
      name: /ottawa, canada skyline/i,
    })
    expect(cityImg).toBeInTheDocument()
  })

  it("should render a back button icon", () => {
    const cityName = "Ottawa, Canada"
    const img =
      "https://d13k13wj6adfdf.cloudfront.net/urban_areas/ottawa-b78a66e47b.jpg"
    render(<UrbanAreaImage cityName={cityName} img={img} />, {
      wrapper: MemoryRouter,
    })
    const backArrow = screen.getByRole("img", { name: /back button icon/i })
    expect(backArrow).toBeInTheDocument()
  })
  
})
