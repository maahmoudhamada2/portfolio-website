import {render, screen } from '@testing-library/react'
import { StyleSheetTestUtils } from 'aphrodite';
import Footer from './Footer';
import * as Socials from '../Socials/Socials'

const spyOnSocials = jest.spyOn(Socials, 'default')
StyleSheetTestUtils.suppressStyleInjection()

describe('Footer Component test suites', () => {
    it('Test 1 - Check Component renders without crashing', () => {
        render(<Footer />);
    })

    it('Test 2 - Check component contain correct HTML elements', () => {
        render(<Footer />);

        // Get HTML elements <footer> & <p>
        const footer = screen.getByRole('contentinfo');
        const paragraph = screen.getByRole('paragraph')

        // Checking <footer> presences & CSS class
        expect(footer).toBeInTheDocument();
        expect(footer).toHaveClass(/^footerContainer_.+/);

        // Checking <p> presences, text & CSS class
        expect(paragraph).toBeInTheDocument();
        expect(paragraph).toHaveTextContent('© 2024 Mahmoud Hamada. All rights reserved')
        expect(paragraph).toHaveClass(/^copyRight_.+/)

    })

    it('Test 3 - Check component render child component correctly', () => {
        render(<Footer />);
        expect(spyOnSocials).toHaveBeenCalled()
    })
})
