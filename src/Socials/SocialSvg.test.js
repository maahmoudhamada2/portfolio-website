import { render, screen } from '@testing-library/react';
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './SocialSvg';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('FacebookIcon compoenent test Suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<FacebookIcon />);
    })

    it('Test 2 - Check for svg element', () => {
        render(<FacebookIcon />);

        // Get svg & path elements
        const svg = screen.getByRole('img');
        const path = svg.querySelector('path');

        // Check svg element presence & css class
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass(/^svg_.+/)

        // Check path element presence & css class
        expect(path).toBeInTheDocument();
        expect(path).toHaveClass(/^path_.+/)
    })
})

describe('GithubIcon compoenent test Suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<GithubIcon />);
    })

    it('Test 2 - Check for svg element', () => {
        render(<GithubIcon />);

        // Get svg & path elements
        const svg = screen.getByRole('img');
        const path = svg.querySelector('path');

        // Check svg element presence & css class
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass(/^svg_.+/)

        // Check path element presence & css class
        expect(path).toBeInTheDocument();
        expect(path).toHaveClass(/^path_.+/)
    })
})

describe('InstagramIcon compoenent test Suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<InstagramIcon />);
    })

    it('Test 2 - Check for svg element', () => {
        render(<InstagramIcon />);

        // Get svg & path elements
        const svg = screen.getByRole('img');
        const path = svg.querySelector('path');

        // Check svg element presence & css class
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass(/^svg_.+/)

        // Check path element presence & css class
        expect(path).toBeInTheDocument();
        expect(path).toHaveClass(/^path_.+/)
    })
})

describe('LinkedinIcon compoenent test Suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<LinkedinIcon />);
    })

    it('Test 2 - Check for svg element', () => {
        render(<LinkedinIcon />);

        // Get svg & path elements
        const svg = screen.getByRole('img');
        const path = svg.querySelector('path');

        // Check svg element presence & css class
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass(/^svg_.+/)

        // Check path element presence & css class
        expect(path).toBeInTheDocument();
        expect(path).toHaveClass(/^path_.+/)
    })
})

describe('TwitterIcon compoenent test Suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<TwitterIcon />);
    })

    it('Test 2 - Check for svg element', () => {
        render(<TwitterIcon />);

        // Get svg & path elements
        const svg = screen.getByRole('img');
        const path = svg.querySelector('path');

        // Check svg element presence & css class
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass(/^svg_.+/)

        // Check path element presence & css class
        expect(path).toBeInTheDocument();
        expect(path).toHaveClass(/^path_.+/)
    })
})
