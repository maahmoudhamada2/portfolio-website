import { render } from '@testing-library/react'
import { StyleSheetTestUtils } from 'aphrodite'
import AboutMe from './AboutMe'

StyleSheetTestUtils.suppressStyleInjection()

describe('AboutMe component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<AboutMe />)
    })
})
