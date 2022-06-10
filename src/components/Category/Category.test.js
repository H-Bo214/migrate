import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Category from "../Category/Category"
import { MemoryRouter } from "react-router-dom"

describe("Category", () => {
  it("should render a single category", () => {
    const title = "Housing"
    const score = 6.7
    const image = "/static/media/house.c37cdbfc2ba07145d50f9bf95b57caf2.svg"
    render(
      <Category 
        categoryName={title} 
        categoryScore={score} 
        icon={image} 
      />,
      { wrapper: MemoryRouter }
    )

    const icon = screen.getByRole("img", { name: /Housing icon/i })
    const categoryTitle = screen.getByText(/housing/i)
    const categoryScore = screen.getByText(/6.7/i)
    expect(icon).toBeInTheDocument()
    expect(categoryTitle).toBeInTheDocument()
    expect(categoryScore).toBeInTheDocument()
  })
  
})
