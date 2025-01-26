import { render, screen, within } from '@testing-library/react'
import { StyleSheetTestUtils } from 'aphrodite'
import HeroSection from './HeroSection'
import * as Socials from '../Socials/Socials';

StyleSheetTestUtils.suppressStyleInjection();
const spyOnSocials = jest.spyOn(Socials, 'default');

describe('HeroSection component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<HeroSection />)
    })

    it('Test 2 - Check component render HTML element & CSS correctly', () => {
        const { container } = render(<HeroSection />);

        // Get Parent HTML elements
        const section = container.querySelector('section');
        const ctaCont = container.querySelector('div');
        const header = within(section).getByRole('banner')
        const article = within(section).getByRole('article')

        // Check Parent HTML elements presences
        expect(section).toBeInTheDocument();
        expect(header).toBeInTheDocument();
        expect(article).toBeInTheDocument();
        expect(ctaCont).toBeInTheDocument();

        // Check Parent HTML elements CSS classes
        expect(section).toHaveClass(/^sectionContainer_.+/);
        expect(header).toHaveClass(/^headerContainer_.+/);
        expect(article).toHaveClass(/^articleContainer_.+/);
        expect(ctaCont).toHaveClass(/^ctaContainer_.+/);

        // Get child HTML elements
        const heading = within(header).getByRole('heading')
        const headingSpan = within(header).getByText(`I'm Mahmoud Hamada`)
        const articleParag = within(article).getByRole('paragraph');
        const articleParagSpan = within(articleParag).getByText('Front-End Developer')
        const ctaBtns = within(ctaCont).getAllByRole('button')

        // Check <h1> element
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(`Hello, WorldI'm Mahmoud Hamada`);

        // Check  h1 > span element
        expect(headingSpan).toBeInTheDocument();
        expect(headingSpan).toHaveClass(/^headerSpan_.+/);

        // Check article > p element
        expect(articleParag).toBeInTheDocument();
        expect(articleParag).toHaveClass(/^articleParagraph_.+/);

        // Check article > p > span element
        expect(articleParagSpan).toBeInTheDocument();
        expect(articleParagSpan).toHaveTextContent('Front-End Developer')
        expect(articleParagSpan).toHaveClass(/^paragraphSpan_.+/)

        // Check div > buttons
        expect(ctaBtns).toHaveLength(2)

        // Check Contact Me <button> & <a> elements
        expect(ctaBtns[0]).toHaveClass(/^ctaBtns_.+/)
        expect(within(ctaBtns[0]).getByRole('link')).toBeInTheDocument()
        expect(within(ctaBtns[0]).getByRole('link')).toHaveTextContent('Contact Me')
        expect(within(ctaBtns[0]).getByRole('link')).toHaveAttribute('href', '#contactme')
        expect(within(ctaBtns[0]).getByRole('link')).toHaveTextContent('Contact Me')
        expect(within(ctaBtns[0]).getByRole('link')).toHaveClass(/^btnsAnchors_.+-primBtn_.+/)

        // Check About Me <button> & <a> elements
        expect(ctaBtns[1]).toHaveClass(/^ctaBtns_.+/)
        expect(within(ctaBtns[1]).getByRole('link')).toHaveTextContent('About Me')
        expect(within(ctaBtns[1]).getByRole('link')).toHaveAttribute('href', '#aboutme')
        expect(within(ctaBtns[1]).getByRole('link')).toHaveTextContent('About Me')
        expect(within(ctaBtns[1]).getByRole('link')).toHaveClass(/^btnsAnchors_.+-secBtn_.+/)



    })
    it('Test 3 - Check component renders child components correctly', () => {
        render(<HeroSection />);
        expect(spyOnSocials).toHaveBeenCalled();
    })
})
