import App from "../App/App"
import LocationDisplay from "../App/App"
import { render, screen } from "@testing-library/react"
import { createMemoryHistory } from "history"
import { Router } from "react-router-dom"
import "@testing-library/jest-dom"

describe("App", () => {
  it("should render an icon at the home route", () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    )
    const img = screen.getByRole("img", {
      name: "Blue gradient circle with a geometric bird in the center.",
    })
    expect(img).toBeInTheDocument()
  })

  it("should display an error message landing on a bad page", () => {
    const history = createMemoryHistory()
    history.push("/some/bad/route")
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    )
    expect(
      screen.getByText(/Page not found. Please return to the home page/i)
    ).toBeInTheDocument()
  })

  it("should route to UrbanAreaDetails", () => {
    const history = createMemoryHistory()
    const route = `/urbanAreaDetails`
    history.push(route)
    render(
      <Router location={history.location} navigator={history}>
        <LocationDisplay />
      </Router>
    )

    expect(screen.getByTestId("location-display")).toHaveTextContent(route)
  })
})
