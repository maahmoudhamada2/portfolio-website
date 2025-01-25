import { render, within } from '@testing-library/react'
import { StyleSheetTestUtils } from 'aphrodite'
import ContactInfo from './ContactInfo'
import * as Icons from './ContactMeIcons';

StyleSheetTestUtils.suppressStyleInjection();

// Mocking Icons component
const spyOnLocation = jest.spyOn(Icons, 'LocationPinIcon');
const spyOnPhone = jest.spyOn(Icons, 'PhoneCallIcon');
const spyOnMail = jest.spyOn(Icons, 'MailIcon');

describe('ContactInfo compoenent test suites', () => {
    afterAll(() => {
        jest.clearAllMocks()
    })
    it('Test 1 - Check component renders correctly without crashing', () => {
        render(<ContactInfo />);
    })

    it('Test 2 - Check component renders HTML & css element correctly', () => {
        const { container } = render(<ContactInfo />)

        // Get Parent HTML elements
        const section = container.querySelector('section');
        const articles = within(section).getAllByRole('article');

        // Check Parent HTML elements
        expect(section).toBeInTheDocument()
        expect(articles).toHaveLength(3)

        // Check Child HTML element of (First article)
        expect(within(articles[0]).getByRole('heading')).toBeInTheDocument();
        expect(within(articles[0]).getByRole('heading')).toHaveTextContent(/WHERE TO FIND ME/);
        expect(within(articles[0]).getByRole('paragraph')).toBeInTheDocument();
        // expect(within(articles[0]).getByRole('paragraph')).toHaveTextContent(/Alexnadria, Egypt/);

        // Check Child HTML element of (Second article)
        expect(within(articles[1]).getByRole('heading')).toBeInTheDocument();
        expect(within(articles[1]).getByRole('heading')).toHaveTextContent(/EMAIL ME AT/);
        expect(within(articles[1]).getByRole('paragraph')).toBeInTheDocument();
        expect(within(articles[1]).getByRole('paragraph')).toHaveTextContent(/maahmoud\.hamada@hotmail.com/);

        // Check Child HTML element of (Third article)
        expect(within(articles[2]).getByRole('heading')).toBeInTheDocument();
        expect(within(articles[2]).getByRole('heading')).toHaveTextContent(/CALL ME AT/);
        expect(within(articles[2]).getByRole('paragraph')).toBeInTheDocument();
        expect(within(articles[2]).getByRole('paragraph')).toHaveTextContent(/0123456789/);

        // --------------------------------- CSS Styles -------------------------------
        expect(section).toHaveClass(/^sectionContainer_.+/)
        expect(articles[0]).toHaveClass(/^articleContainer_.+/)
        expect(articles[1]).toHaveClass(/^articleContainer_.+/)
        expect(articles[2]).toHaveClass(/^articleContainer_.+/)

        // First article
        expect(within(articles[0]).getByRole('heading')).toHaveClass(/^contactInfoHeading_.+/)
        expect(within(articles[0]).getByRole('paragraph')).toHaveClass(/^paragraphColor_.+/)

        // Second article
        expect(within(articles[1]).getByRole('heading')).toHaveClass(/^contactInfoHeading_.+/)
        expect(within(articles[1]).getByRole('paragraph')).toHaveClass(/^paragraphColor_.+/)

        // Third article
        expect(within(articles[2]).getByRole('heading')).toHaveClass(/^contactInfoHeading_.+/)
        expect(within(articles[2]).getByRole('paragraph')).toHaveClass(/^paragraphColor_.+/)
    })
    it('Test 3 - Check component renders child components correctly', () => {
        render(<ContactInfo />)
        expect(spyOnLocation).toHaveBeenCalled()
        expect(spyOnPhone).toHaveBeenCalled()
        expect(spyOnMail).toHaveBeenCalled()
    })
})
