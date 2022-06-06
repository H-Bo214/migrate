import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from '../HomePage/HomePage'
import { MemoryRouter } from 'react-router-dom'
import  { mockState } from '../../testData'
import { fetchUrbanAreas, fetchBatchData, getGeoNameId } from '../../apiCalls'
jest.mock('../../apiCalls')

describe('HomePage', () => {
  it ('should fetch a list of urban area on load', () => {
    
  })
})