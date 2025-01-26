import { fireEvent, render, screen } from '@testing-library/react';
import NavMenu from './NavMenu';
import * as NavItems from './NavItems'
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

const spyOnNavItems = jest.spyOn(NavItems, 'default')

describe('NavMenu Compoenent test suites', () => {

    afterAll(() => {
        jest.clearAllMocks();
    })

    it('Test 1 - Checking rendering without crashing', () => {
        render(<NavMenu />);
    })

    it('Test 2 - Checking Component renders correct html elements & css classes', () => {
        render(<NavMenu />);

        // Get HTML elements (button, nav & ul)
        const navBtn = screen.getByRole('button');
        const navigation = screen.getByRole('navigation');
        const unList = screen.getByRole('list')

        // Checking HTML elements presence 
        expect(navBtn).toBeInTheDocument();
        expect(navigation).toBeInTheDocument();
        expect(unList).toBeInTheDocument();

        // Checking elements base CSS classes (collapsed Menu)
        expect(navBtn).toHaveClass(/^navBtn_.+/)
        expect(navigation).toHaveClass(/^navContainer_.+/)
        expect(unList).toHaveClass(/^listContainer_.+/)

        // Checking elements change CSS dynamically on pressing navBtn (Expanded menu)
        fireEvent.click(navBtn);
        expect(navBtn).toHaveClass(/^navBtn_.+-expandNavbtn_.+/)
        expect(navigation).toHaveClass(/^navContainer_.+/)
        expect(unList).toHaveClass(/^listContainer_.+-expandListContainer_.+/)

        // Checking elements change CSS dynamically back to base Class (Collapsed again)
        expect(navBtn).toHaveClass(/^navBtn_.+/)
        expect(navigation).toHaveClass(/^navContainer_.+/)
        expect(unList).toHaveClass(/^listContainer_.+/)
    });
    it('Test 3 - Checking component renders Child components correctly', () => {
        render(<NavMenu />);
        expect(spyOnNavItems).toHaveBeenCalled()
    })
})
