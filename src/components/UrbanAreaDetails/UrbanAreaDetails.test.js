import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import UrbanAreaDetails from '../UrbanAreaDetails/UrbanAreaDetails'
import { Router } from 'react-router-dom'
import { mockState } from '../../testData.js'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'

describe('UrbanAreaDetails', () => {
  it('should render a back button icon', () => {
    const history = createMemoryHistory()
    const route = `/urbanAreaDetails/Albuquerque, New Mexico`
    history.push(route, mockState)
    render(
      <Router location={history.location} navigator={history}>
        <UrbanAreaDetails />
      </Router>
    )
    const backIcon = screen.getByRole('img', { name: `back button icon`})
    expect(backIcon).toBeInTheDocument()
  })

  it ('should return to the home page when back icon is clicked',  () => {
    const history = createMemoryHistory()
    const route = `/urbanAreaDetails/Albuquerque, New Mexico`
    history.push(route, mockState)
    render(
      <Router location={history.location} navigator={history}>
        <UrbanAreaDetails />
      </Router>
    )
    const backIcon = screen.getByRole('img', { name: `back button icon`})
    fireEvent.click(backIcon) 
    history.push('/')
    expect(history.location.pathname).toBe('/')
  })

})