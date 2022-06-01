import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Summary from '../Summary/Summary'
import { MemoryRouter } from 'react-router-dom'

describe('Summary', () => {
  it('should render a city summary', () => {
    const summary = 'Ottawa, Canada, is characterized by a clean environment. According to our city rankings, this is a good place to live with high ratings in housing, business freedom and safety. Ottawa is one of the top ten city matches for 6.6% of Teleport users.'
    render(
      <Summary 
        summary={summary}
      />, {wrapper: MemoryRouter}
    )
    const text = screen.getByText(  /ottawa, canada, is characterized by a clean environment\. according to our city rankings, this is a good place to live with high ratings in housing, business freedom and safety\. ottawa is one of the top ten city matches for 6\.6% of teleport users\./i  )

    expect(text).toBeInTheDocument()
  })
})