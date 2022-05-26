import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CitySelectionForm from '../CitySelectionForm/CitySelectionForm'
import HomePage from '../HomePage/HomePage'
import { MemoryRouter } from 'react-router-dom'

describe('CitySelectionForm', () => {
  beforeEach(() => {
    const setSearchError = jest.fn()

    render(
      <MemoryRouter>
        <CitySelectionForm 
          setSearchError={setSearchError}
        />
      </MemoryRouter>
    )
  })

  it('should render a city search input', () => {
    const search = screen.getByRole('search')
    expect(search).toBeInTheDocument()
  })

  it('should render magnifying glass icon', () => {
    const magnifyingGlass = screen.getByRole('img', {
      name: /blue magnifying glass search icon\./i
    })
    expect(magnifyingGlass).toBeInTheDocument()
  })

  it('should render a button', () => {
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should render placeholder text', () => {
    const placeholder = screen.getByText('Search or select a city')
    expect(placeholder).toBeInTheDocument()
  })

  it('should render an combobox', () => {
    const combobox = screen.getByRole('combobox')
    expect(combobox).toBeInTheDocument()
  })

  it('should render a city name within the combobox', () => {
    const combobox = screen.getByRole('combobox')
    expect(combobox).toBeInTheDocument()
    fireEvent.change(combobox, {target: {value: 'Seattle'}})
    expect(combobox.getAttribute('value')).toBe('Seattle')
  })












})
