import { render, screen } from "@testing-library/react";
import { ArrowIcon, ClangIcon, CssIcon, HtmlIcon, JavaScriptIcon, MySqlIcon, PythonIcon } from "./LangIcons";

describe('HtmlIcon component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<HtmlIcon />)
    })

    it('Test 2 - Check component render HTML elements correctly', () => {
        render(<HtmlIcon />)
        const svg = screen.getByRole('img')
        const path = svg.querySelectorAll('path')
        const defs = svg.querySelector('defs')

        expect(svg).toBeInTheDocument();
        expect(defs).toBeInTheDocument();
        expect(path).toHaveLength(6)
    })
})

describe('CssIcon component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<CssIcon />)
    })

    it('Test 2 - Check component render HTML elements correctly', () => {
        render(<CssIcon />)
        const svg = screen.getByRole('img')
        const path = svg.querySelectorAll('path')

        expect(svg).toBeInTheDocument();
        expect(path).toHaveLength(4)
    })
})

describe('PythonIcon component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<PythonIcon />)
    })

    it('Test 2 - Check component render HTML elements correctly', () => {
        render(<PythonIcon />)
        const svg = screen.getByRole('img')
        const defs = svg.querySelector('defs')
        const path = svg.querySelectorAll('path')

        expect(svg).toBeInTheDocument();
        expect(defs).toBeInTheDocument();
        expect(path).toHaveLength(2)
    })
})

describe('JavaScriptIcon component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<JavaScriptIcon />)
    })

    it('Test 2 - Check component render HTML elements correctly', () => {
        render(<JavaScriptIcon />)
        const svg = screen.getByRole('img')
        const path = svg.querySelectorAll('path')

        expect(svg).toBeInTheDocument();
        expect(path).toHaveLength(2)
    })
})

describe('MySqlIcon component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<MySqlIcon />)
    })

    it('Test 2 - Check component render HTML elements correctly', () => {
        render(<MySqlIcon />)
        const svg = screen.getByRole('img')
        const defs = svg.querySelector('defs')
        const path = svg.querySelectorAll('path')

        expect(svg).toBeInTheDocument();
        expect(defs).toBeInTheDocument();
        expect(path).toHaveLength(3)
    })
})

describe('ClangIcon component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<ClangIcon />)
    })

    it('Test 2 - Check component render HTML elements correctly', () => {
        render(<ClangIcon />)
        const svg = screen.getByRole('img')
        const path = svg.querySelectorAll('path')

        expect(svg).toBeInTheDocument();
        expect(path).toHaveLength(4)
    })
})

describe('ArrowIcon component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<ArrowIcon />)
    })

    it('Test 2 - Check component render HTML elements correctly', () => {
        render(<ArrowIcon />)
        const svg = screen.getByRole('img')
        const path = svg.querySelectorAll('path')

        expect(svg).toBeInTheDocument();
        expect(path).toHaveLength(1)
    })
})