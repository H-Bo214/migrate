import { render, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import HomePage from "../HomePage/HomePage"
import { MemoryRouter } from "react-router-dom"
import { mockUrbanAreas } from "../../testData"
import { fetchData } from "../../apiCalls"
jest.mock("../../apiCalls")

describe("HomePage", () => {
  beforeEach(() => jest.clearAllMocks())
  it("should fetch a list of urban area on load", async () => {
    render(<HomePage />, { wrapper: MemoryRouter })
    await fetchData.mockResolvedValueOnce(mockUrbanAreas)
    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1))
  })
  
})
