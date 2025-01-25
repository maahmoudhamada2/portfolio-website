import { render, waitFor } from '@testing-library/react'
import Projects from './Projects'
import { StyleSheetTestUtils } from 'aphrodite'

StyleSheetTestUtils.suppressStyleInjection()

describe('Projects Component test suites', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve([])
        }
        ))
    })
    afterEach(() => {
        jest.clearAllMocks()
    })
    it('Test 1 - Check component renders without crashing', async () => {
        render(<Projects />)
        await waitFor(() => { })
    })

    it('Test 2 - Check fetch Function', async () => {
        render(<Projects />)
        await waitFor(() => {
            expect(fetch).toHaveBeenCalled()
            expect(fetch).toHaveBeenCalledWith('https://677baf7820824100c07a6e6a.mockapi.io/portfoli-data/api/v1/projects')
        })
    })
})
