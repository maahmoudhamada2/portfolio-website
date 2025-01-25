import { fireEvent, render, screen} from '@testing-library/react';
import NavItems from './NavItems';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();
const toggleMock = jest.fn();

describe('NavItems Component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<NavItems />);
    })
    it('Test 2 - Check component return correct HTML elements', () => {
        render(<NavItems />);

        // Get HTML element <li> & <a>
        const listItems = screen.getAllByRole('listitem');
        const anchors = screen.getAllByRole('link')

        // Checking Number of <li> & <a> returned === 5
        expect(listItems).toHaveLength(4);
        expect(anchors).toHaveLength(4)

        // Checking the first 2 <li>  contain <a> tags
        expect(listItems[0]).toContainElement(anchors[0]);
        expect(listItems[1]).toContainElement(anchors[1]);

        // Checking the first 2 <a> text and url
        expect(anchors[0]).toHaveTextContent('Home')
        expect(anchors[0]).toHaveAttribute('href', '#herosection')

        expect(anchors[1]).toHaveTextContent('Projects');
        expect(anchors[1]).toHaveAttribute('href', '#projects')

        // Checking first 2 <li> CSS classes
        expect(listItems[0]).toHaveClass(/^listItem_.+/);
        expect(listItems[1]).toHaveClass(/^listItem_.+/);

        // Checking first 2 <a> CSS classes
        expect(anchors[0]).toHaveClass(/^anchors_.+/);
        expect(anchors[1]).toHaveClass(/^anchors_.+/);
    });
    it("Test 3 - Check Component's prop", () => {
        render(<NavItems toggleMenu={toggleMock} />);

        // Get all anchors <a>
        const anchors = screen.getAllByRole('link');

        // Click on the first <a> element and check for toggleMenu
        fireEvent.click(anchors[0])
        expect(toggleMock).toHaveBeenCalledTimes(1)
    })
})
