import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import CitySelectionForm from "../CitySelectionForm/CitySelectionForm"
import { MemoryRouter } from "react-router-dom"

describe("CitySelectionForm", () => {
  it("should render a city search input", () => {
    const handleSearch = jest.fn((e) => e.preventDefault())
    const setSearchError = jest.fn()
    render(
      <CitySelectionForm
        setSearchError={setSearchError}
        handleSearch={handleSearch}
      />,
      { wrapper: MemoryRouter }
    )
    const search = screen.getByRole("search")
    expect(search).toBeInTheDocument()
  })

  it("should render magnifying glass icon", () => {
    const handleSearch = jest.fn((e) => e.preventDefault())
    const setSearchError = jest.fn()
    render(
      <CitySelectionForm
        setSearchError={setSearchError}
        handleSearch={handleSearch}
      />,
      { wrapper: MemoryRouter }
    )
    const magnifyingGlass = screen.getByRole("img", {
      name: /blue magnifying glass search icon\./i,
    })

    expect(magnifyingGlass).toBeInTheDocument()
  })

  it("should render a button", () => {
    const handleSearch = jest.fn((e) => e.preventDefault())
    const setSearchError = jest.fn()
    render(
      <CitySelectionForm
        setSearchError={setSearchError}
        handleSearch={handleSearch}
      />,
      { wrapper: MemoryRouter }
    )
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  })

  it("should render placeholder text", () => {
    const handleSearch = jest.fn((e) => e.preventDefault())
    const setSearchError = jest.fn()
    render(
      <CitySelectionForm
        setSearchError={setSearchError}
        handleSearch={handleSearch}
      />,
      { wrapper: MemoryRouter }
    )
    const placeholder = screen.getByText("Search or select a city")
    expect(placeholder).toBeInTheDocument()
  })

  it("should render an combobox", () => {
    const handleSearch = jest.fn((e) => e.preventDefault())
    const setSearchError = jest.fn()
    render(
      <CitySelectionForm
        setSearchError={setSearchError}
        handleSearch={handleSearch}
      />,
      { wrapper: MemoryRouter }
    )
    const combobox = screen.getByRole("combobox")
    expect(combobox).toBeInTheDocument()
  })

  it("should render a city name within the combobox", () => {
    const handleSearch = jest.fn((e) => e.preventDefault())
    const setSearchError = jest.fn()
    render(
      <CitySelectionForm
        setSearchError={setSearchError}
        handleSearch={handleSearch}
      />,
      { wrapper: MemoryRouter }
    )
    const combobox = screen.getByRole("combobox")
    expect(combobox).toBeInTheDocument()
    fireEvent.change(combobox, { target: { value: "Seattle" } })
    expect(combobox.getAttribute("value")).toBe("Seattle")
  })

  it("should initiate a request for city information on click", () => {
    const handleSearch = jest.fn((e) => e.preventDefault())
    const setSearchError = jest.fn()
    render(
      <CitySelectionForm
        setSearchError={setSearchError}
        handleSearch={handleSearch}
      />,
      { wrapper: MemoryRouter }
    )
    const magnifyingGlass = screen.getByRole("img", {
      name: /blue magnifying glass search icon\./i,
    })
    expect(magnifyingGlass).toBeInTheDocument()

    const combobox = screen.getByRole("combobox")
    expect(combobox).toBeInTheDocument()

    fireEvent.change(combobox, { target: { value: "Seattle" } })
    expect(combobox.getAttribute("value")).toBe("Seattle")

    fireEvent.click(magnifyingGlass)

    expect(handleSearch).toHaveBeenCalledTimes(1)
  })

  it("should empty out the city value once the click event takes place", () => {
    const handleSearch = jest.fn((e) => e.preventDefault())
    const setSearchError = jest.fn()
    render(
      <CitySelectionForm
        setSearchError={setSearchError}
        handleSearch={handleSearch}
      />,
      { wrapper: MemoryRouter }
    )
    const magnifyingGlass = screen.getByRole("img", {
      name: /blue magnifying glass search icon\./i,
    })
    expect(magnifyingGlass).toBeInTheDocument()

    const combobox = screen.getByRole("combobox")
    expect(combobox).toBeInTheDocument()

    fireEvent.change(combobox, { target: { value: "Seattle" } })
    expect(combobox.getAttribute("value")).toBe("Seattle")

    fireEvent.click(magnifyingGlass)

    expect(handleSearch).toHaveBeenCalledTimes(1)

    fireEvent.change(combobox, { target: { value: "" } })
    expect(combobox.getAttribute("value")).toBe("")
  })

  it("should initiate a request for city information on Enter key press", () => {
    const handleSearch = jest.fn((e) => e.preventDefault())
    const setSearchError = jest.fn()
    const handleKeyDown = jest.fn()
    render(
      <CitySelectionForm
        setSearchError={setSearchError}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
      />,
      { wrapper: MemoryRouter }
    )
    const magnifyingGlass = screen.getByRole("img", {
      name: /blue magnifying glass search icon\./i,
    })
    expect(magnifyingGlass).toBeInTheDocument()

    const combobox = screen.getByRole("combobox")
    expect(combobox).toBeInTheDocument()

    fireEvent.change(combobox, { target: { value: "Seattle" } })
    expect(combobox.getAttribute("value")).toBe("Seattle")

    fireEvent.keyDown(combobox, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    })
    expect(handleKeyDown).toHaveBeenCalledTimes(1)
  })
  
})
