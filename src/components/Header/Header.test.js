import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header/Header'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
  it('should render the Header on page load',  () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const img = screen.getByRole('img', { name: 'Blue gradient circle with a geometric bird in the center.'})  
    expect(img).toBeInTheDocument()
  })
})
