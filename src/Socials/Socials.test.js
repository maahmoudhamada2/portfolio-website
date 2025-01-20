import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import Socials from './Socials';
import * as SocialSvgs from './SocialSvg';

StyleSheetTestUtils.suppressStyleInjection();

// Mocking SVGs icon components
const spyOnFaceBook = jest.spyOn(SocialSvgs, 'FacebookIcon');
const spyOnGitHub = jest.spyOn(SocialSvgs, 'GithubIcon');
const spyOnInstagram = jest.spyOn(SocialSvgs, 'InstagramIcon');
const spyOnLinkedIn = jest.spyOn(SocialSvgs, 'LinkedinIcon');
const spyOnTwitter = jest.spyOn(SocialSvgs, 'TwitterIcon');

describe('Socials component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<Socials />)

    })
    it('Test 2 - Check component renders HTML elements correctly', () => {
        render(<Socials />);

        // Get HTML elements <ul>, <li> & <a>
        const unList = screen.getByRole('list');
        const listItems = screen.getAllByRole('listitem');
        const anchors = screen.getAllByRole('link');

        // Check <ul> element
        expect(unList).toBeInTheDocument();
        expect(unList).toHaveClass(/^listContainer_.+/)

        // Check number of <li> & <a> elements  === 5
        expect(listItems).toHaveLength(5)
        expect(anchors).toHaveLength(5)

        // Check for the first 2 <li> element contain <a> element
        expect(listItems[0]).toContainElement(anchors[0])
        expect(listItems[1]).toContainElement(anchors[1])

        // Check for first 2 <a> elements attributes
        expect(anchors[0]).toHaveAttribute('href', 'https://web.facebook.com/mahmoud.hamada.752487', 'target', '_blank', 'rel', 'no-referrer')
        expect(anchors[1]).toHaveAttribute('href', 'https://github.com/maahmoudhamada2', 'target', '_blank', 'rel', 'no-referrer')
    })

    it('Test 3 - Check Component renders Child component correctly', () => {
        render(<Socials />);
        expect(spyOnFaceBook).toHaveBeenCalled();
        expect(spyOnGitHub).toHaveBeenCalled();
        expect(spyOnInstagram).toHaveBeenCalled();
        expect(spyOnLinkedIn).toHaveBeenCalled();
        expect(spyOnTwitter).toHaveBeenCalled();
    })
})

