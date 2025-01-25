import { render, screen } from '@testing-library/react'
import { PhoneCallIcon, MailIcon, CheckmarkIcon, LocationPinIcon } from './ContactMeIcons'
import { StyleSheetTestUtils } from 'aphrodite'


StyleSheetTestUtils.suppressStyleInjection()

describe('Test 1 -PhoneCallIcon component test suites', () => {
    it('Check component renders without crashing', () => {
        render(<PhoneCallIcon />)
    })
    it('Test 2 - Check Component render HTML element correctly', () => {
        render(<PhoneCallIcon />)
        const svg = screen.getByRole('img')
        const path = svg.querySelector('path')

        expect(svg).toBeInTheDocument()
        expect(path).toBeInTheDocument()
    })
})

describe('LocationPinIcon component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<LocationPinIcon />)
    })
    it('Test 2 - Check component render HTML elements correctly', () => {
        render(<LocationPinIcon />)
        const svg = screen.getByRole('img')
        const path = svg.querySelector('path')

        expect(svg).toBeInTheDocument()
        expect(path).toBeInTheDocument()
    })
})

describe('MailIcon component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<MailIcon />)
    })
    it('Test 2 - Check component render HTML elements correctly', () => {
        render(<MailIcon />)
        const svg = screen.getByRole('img')
        const path = svg.querySelector('path')

        expect(svg).toBeInTheDocument()
        expect(path).toBeInTheDocument()
    })
})

describe('CHeckmarkIcon component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<CheckmarkIcon />)
    })
    it('Test 2 - Check component render HTML elements correctly', () => {
        render(<CheckmarkIcon />)
        const svg = screen.getByRole('img')
        const path = svg.querySelector('path')

        expect(svg).toBeInTheDocument()
        expect(svg).toHaveClass(/^svg_.+/)
        expect(path).toBeInTheDocument()
    })
})