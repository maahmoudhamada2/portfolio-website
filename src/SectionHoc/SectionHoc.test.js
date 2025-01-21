import { render, screen, within } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import SectionHoc from './SectionHoc';

StyleSheetTestUtils.suppressStyleInjection()

const mockComponent = ({ name }) => <h1>Hello, {name}</h1>
const SectionBuilder = SectionHoc(mockComponent)

describe('SectionHoc (HOC) component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<SectionBuilder />)
    })
    it('Test 2 - Check component renders HTML & CSS elements correctly', () => {
        const { container } = render(<SectionBuilder />)

        // Get parent HTML elements
        const section = container.querySelector('section');
        const header = screen.getByRole('banner');

        // Checking <section> element 
        expect(section).toHaveClass(/^sectionContainer_.+/)
        expect(section).toContainElement(header)

        // Checking <header> element
        expect(header).toBeInTheDocument();
        expect(header).toHaveClass(/^sectionHeader_.+/)

        // Get & Checking <header>'s child elements
        const paragraphs = within(header).getAllByRole('paragraph');
        const headTwo = within(header).getByRole('heading');
        expect(paragraphs).toHaveLength(2);
        expect(paragraphs[0]).toHaveClass(/^headerTitle_.+/);
        expect(paragraphs[1]).toHaveClass(/^headerParagraph_.+/);
        expect(headTwo).toBeInTheDocument()
        expect(headTwo).toHaveClass(/^headerSubTitle_.+/)
    })

    it('Test 3 - Check component pass & renders props correctly', () => {
        const { container } = render(<SectionBuilder
            sectionId="testingId"
            title="Testing title"
            subTitle="Testing subTitle"
            paragraph="Testing paragraph"
            name="Mahmoud"
        />)
        const section = container.querySelector('section');
        const header = screen.getByRole('banner');

        expect(section).toHaveAttribute('id', 'testingId');
        expect(within(header).getByText('Testing title')).toBeInTheDocument()
        expect(within(header).getByText('Testing subTitle')).toBeInTheDocument()
        expect(within(header).getByText('Testing paragraph')).toBeInTheDocument()
        expect(within(section).getByText('Hello, Mahmoud')).toBeInTheDocument()
    })
})
