import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Categories from '../Categories/Categories'
import { MemoryRouter } from 'react-router-dom'
import { scores } from '../../testData'

describe('Categories', () => {
  it('should render a Housing category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /housing icon/i })
    const housing = screen.getByText(/housing/i)
    const score = screen.getByText(/8.9/i)
    expect(image).toBeInTheDocument()
    expect(housing).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a Cost of living category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /Cost of Living icon/i})
    const costOfLiving = screen.getByText(/Cost of Living/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(costOfLiving).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a Startups category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /Startups icon/i})
    const startups = screen.getByText(/Startups/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(startups).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a Venture capital category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /Venture Capital icon/i})
    const ventureCapital = screen.getByText(/Venture Capital/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(ventureCapital).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a Travel Connectivity category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /Travel Connectivity icon/i})
    const travelConnectivity = screen.getByText(/Travel Connectivity/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(travelConnectivity).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a Commute category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /Commute icon/i})
    const commute = screen.getByText(/Commute/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(commute).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a Business Freedom category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /Business Freedom icon/i})
    const businessFreedom = screen.getByText(/Business Freedom/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(businessFreedom).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a Safety category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /Safety icon/i})
    const safety = screen.getByText(/Safety/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(safety).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a Healthcare category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /Healthcare icon/i})
    const healthcare = screen.getByText(/Healthcare/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(healthcare).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a Education category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /Education icon/i})
    const education = screen.getByText(/Education/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(education).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a Environmental Quality category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /Environmental Quality icon/i})
    const environmentalQuality = screen.getByText(/Environmental Quality/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(environmentalQuality).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a Economy category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /Economy icon/i})
    const economy = screen.getByText(/Economy/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(economy).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a Taxation category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /Taxation icon/i})
    const taxation = screen.getByText(/Taxation/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(taxation).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a Internet Access category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /Internet Access icon/i})
    const internetAccess = screen.getByText(/Internet Access/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(internetAccess).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a Leisure & Culture category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /Leisure & Culture icon/i})
    const leisureCulture = screen.getByText(/Leisure & Culture/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(leisureCulture).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a tolerance category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /tolerance icon/i})
    const tolerance = screen.getByText(/tolerance/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(tolerance).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

  it('should render a Outdoors category', () => {
    render(
      <Categories 
        scores={scores}         
      />, {wrapper: MemoryRouter}
    )
    const image = screen.getByRole('img', {  name: /Outdoors icon/i})
    const outdoors = screen.getByText(/Outdoors/i)
    const score = screen.getByText(/5.9/i)
    expect(image).toBeInTheDocument()
    expect(outdoors).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })

})