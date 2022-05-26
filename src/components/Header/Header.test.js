import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header/Header'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
  })

  it('should render the Migrate logo', () => {
    const img = screen.getByRole('img', { name: 'Blue gradient circle with a geometric bird in the center.'})  
    expect(img).toBeInTheDocument()
  })

  it('should render a heading', () => {
    const heading = screen.getByRole('heading', { name: /where do you want to live\?/i })
    expect(heading).toBeInTheDocument()
  })
  
})
