import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import LocationPopulation from "../LocationPopulation/LocationPopulation"
import { MemoryRouter } from "react-router-dom"

describe("LocationPopulation", () => {
  it("should render a link", () => {
    const lat = 45.52345
    const long = -122.67621
    const pop = 632309
    render(
      <LocationPopulation latitude={lat} longitude={long} population={pop} />,
      { wrapper: MemoryRouter }
    )
    const link = screen.getByRole("link", {
      name: /blue pin\-drop icon\. opens google maps to the city coordinates specified\. location 45\.52345, \-122\.67621/i,
    })
    expect(link).toBeInTheDocument()
  })

  it("should render a pin-drop icon", () => {
    const lat = 45.52345
    const long = -122.67621
    const pop = 632309
    render(
      <LocationPopulation latitude={lat} longitude={long} population={pop} />,
      { wrapper: MemoryRouter }
    )
    const img = screen.getByRole("img", {
      name: /blue pin\-drop icon\. opens google maps to the city coordinates specified\./i,
    })
    expect(img).toBeInTheDocument()
  })

  it("should render a heading", () => {
    const lat = 45.52345
    const long = -122.67621
    const pop = 632309
    render(
      <LocationPopulation latitude={lat} longitude={long} population={pop} />,
      { wrapper: MemoryRouter }
    )
    const heading = screen.getByRole("heading", { name: /location/i })
    expect(heading).toBeInTheDocument()
  })

  it("should render latitude coordinates", () => {
    const lat = 45.52345
    const long = -122.67621
    const pop = 632309
    render(
      <LocationPopulation latitude={lat} longitude={long} population={pop} />,
      { wrapper: MemoryRouter }
    )

    const latitude = screen.getByText(/45\.52345,/i)
    expect(latitude).toBeInTheDocument()
  })

  it("should render longitude coordinates", () => {
    const lat = 45.52345
    const long = -122.67621
    const pop = 632309
    render(
      <LocationPopulation latitude={lat} longitude={long} population={pop} />,
      { wrapper: MemoryRouter }
    )

    const longitude = screen.getByText(/\-122\.67621/i)
    expect(longitude).toBeInTheDocument()
  })

  it("should render a population icon", () => {
    const lat = 45.52345
    const long = -122.67621
    const pop = 632309
    render(
      <LocationPopulation latitude={lat} longitude={long} population={pop} />,
      { wrapper: MemoryRouter }
    )
    const img = screen.getByRole("img", {
      name: /blue crowd of people icon\./i,
    })
    expect(img).toBeInTheDocument()
  })

  it("should render a population heading", () => {
    const lat = 45.52345
    const long = -122.67621
    const pop = 632309
    render(
      <LocationPopulation latitude={lat} longitude={long} population={pop} />,
      { wrapper: MemoryRouter }
    )
    const heading = screen.getByRole("heading", { name: /population/i })
    expect(heading).toBeInTheDocument()
  })

  it("should render a population count", () => {
    const lat = 45.52345
    const long = -122.67621
    const pop = 632309
    render(
      <LocationPopulation latitude={lat} longitude={long} population={pop} />,
      { wrapper: MemoryRouter }
    )
    const count = screen.getByText(/632309/i)
    expect(count).toBeInTheDocument()
  })
  
})
