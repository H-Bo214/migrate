import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Error from "../Error/Error"
import { MemoryRouter } from "react-router-dom"

describe("Error", () => {
  it("should not display an error on load", () => {
    const errorMsg = ""
    render(<Error errorMsg={errorMsg} />, { wrapper: MemoryRouter })
    const msg = screen.queryByText(
      /An error occurred. Please refresh the browser./i
    )
    expect(msg).not.toBeInTheDocument()
  })

  it("should display an error if an error has occurred", () => {
    const errorMsg = "An error occurred. Please refresh the browser."
    render(<Error errorMsg={errorMsg} />, { wrapper: MemoryRouter })
    const msg = screen.queryByText(
      /An error occurred. Please refresh the browser./i
    )
    expect(msg).toBeInTheDocument()
  })
  
})
