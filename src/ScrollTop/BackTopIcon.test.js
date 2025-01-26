import { render, screen } from '@testing-library/react'
import BackTopIcon from './BackTopIcon'

describe('BackTopIcon component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<BackTopIcon />)
    })

    it('Test 2 - Check component renders HTML elements correctly', () => {
        render(<BackTopIcon />)
        const svg = screen.getByRole('img');
        const g = svg.querySelectorAll('g');
        const path = svg.querySelector('path');

        expect(svg).toBeInTheDocument();
        expect(g).toHaveLength(2);
        expect(path).toBeInTheDocument();
    })
})
