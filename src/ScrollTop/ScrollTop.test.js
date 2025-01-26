import { fireEvent, render, screen } from '@testing-library/react';
import ScrollTop from './ScrollTop';
import { StyleSheetTestUtils } from 'aphrodite';
import * as BackTopIcon from './BackTopIcon';

StyleSheetTestUtils.suppressStyleInjection()

const spyOnTopIcon = jest.spyOn(BackTopIcon, 'default')


describe('ScrollTop component test suites', () => {
    beforeEach(() => {
        window.scroll = jest.fn();
    })

    afterAll(() => {
        jest.clearAllMocks();
    })
    it('Test 1 - Check component renders without crashing', () => {
        render(<ScrollTop />)
    })

    it('Test 2 - Check button visibily based on screen height', () => {
        render(<ScrollTop />);
        const btn = screen.getByRole('button');

        // Check Visibility (hidden)
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveClass(/^btnContainer_.+/);
        expect(btn).not.toHaveClass(/^btnContainer_.+-showBtn_.+/);

        // Check Visibility (visible)
        window.scrollY = 301;
        fireEvent.scroll(window);
        expect(btn).toHaveClass(/^btnContainer_.+-showBtn_.+/);

        fireEvent.click(btn);
        expect(window.scroll).toHaveBeenCalledWith({ top: 0 });
    })

    it('Test 3 - Check button renders child component correctly', () => {
        render(<ScrollTop />);
        expect(spyOnTopIcon).toHaveBeenCalled();
    })
})
