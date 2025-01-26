import { render, screen, within } from '@testing-library/react';
import Header from './Header';
import * as NavMenu from './NavMenu';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

const spyOnNavMenu = jest.spyOn(NavMenu, 'default');

describe('Header Component test suite', () => {
    afterAll(() => {
        jest.clearAllMocks();
    })
    
    it('Test 1 - Check rendering without crashing', () => {
        render(<Header />);
    })

    it('Test 2 - Check Component contain correct html element', () => {
        render(<Header />);

        // Check for header element
        const header = screen.getByRole('banner');
        expect(header).toBeInTheDocument();
        expect(header).toHaveClass(/headerContainer/)

        // check for website logo
        expect(within(header).getByRole('img')).toBeInTheDocument()
        expect(within(header).getByRole('img')).toHaveClass(/logo/)
        expect(within(header).getByRole('img')).toHaveAttribute('alt', 'ws-logo')
    })
    it('Test 3 - Check component renders child component correctly', () => {
        render(<Header />)
        expect(spyOnNavMenu).toHaveBeenCalled()
    })
})
