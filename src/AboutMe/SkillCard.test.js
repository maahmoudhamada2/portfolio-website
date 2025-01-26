import { fireEvent, render, screen, within } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";
import SkillCard from "./SkillCard";
import * as LangIcons from './LangIcons';

// Mocking Icon Components
const spyOnHTML = jest.spyOn(LangIcons, 'HtmlIcon');
const spyOnCSS = jest.spyOn(LangIcons, 'CssIcon');
const spyOnPython = jest.spyOn(LangIcons, 'PythonIcon');
const spyOnJava = jest.spyOn(LangIcons, 'JavaScriptIcon');
const spyOnMySql = jest.spyOn(LangIcons, 'MySqlIcon');
const spyOnClang = jest.spyOn(LangIcons, 'ClangIcon');
const spyOnArrow = jest.spyOn(LangIcons, 'ArrowIcon');

StyleSheetTestUtils.suppressStyleInjection()

describe('SkillCard Component test suites', () => {
    afterAll(() => {
        jest.clearAllMocks()
    })
    it('Test 1 - Check component renders without crashing', () => {
        render(<SkillCard />)
    })

    it('Test 2 - Check compoenent renders HTML & CSS elements correctly', () => {
        const { container } = render(<SkillCard />)

        // Get Parent HTML elements
        const section = container.querySelector('section')
        const header = screen.getByRole('banner')
        const langCont = container.querySelector('div')
        const langContDivs = within(langCont).getAllByRole('article');

        // Check Parent HTML elements in DOM
        expect(section).toBeInTheDocument();
        expect(header).toBeInTheDocument();
        expect(langCont).toBeInTheDocument();
        expect(langContDivs).toHaveLength(6)

        // Get Child HTML elements of (header)
        const headerTitle = within(header).getByRole('heading', { name: 'Skills' })
        const headerParag = within(header).getByRole('paragraph')
        const headerBtns = within(header).getAllByRole('button')

        // Check Child HTML elements in DOM (header)
        expect(headerTitle).toBeInTheDocument();
        expect(headerParag).toBeInTheDocument();
        expect(headerBtns).toHaveLength(2)
        expect(headerTitle).toHaveTextContent(/Skills/)
        expect(headerParag).toHaveTextContent(/Versatile developer with/)

        // Check Download Resume button
        expect(within(headerBtns[0]).getByRole('link')).toBeInTheDocument()
        expect(within(headerBtns[0]).getByRole('link')).toHaveAttribute('href', '/myCv.pdf')
        expect(within(headerBtns[0]).getByRole('link')).toHaveAttribute('download', 'Mahmoud_resume.pdf')
        expect(within(headerBtns[0]).getByRole('link')).toHaveClass(/^anchors_.+/)

        // Get Child HTML elements of (langContDivs | First & second only) 
        const langTitleOne = within(langContDivs[0]).getByRole('heading');
        const langDescOne = within(langContDivs[0]).getByRole('paragraph');
        const langTitleTwo = within(langContDivs[1]).getByRole('heading');
        const langDescTwo = within(langContDivs[1]).getByRole('paragraph');

        // Check Child HTML elements in DOM of (langContDivs | First & second only)
        expect(langTitleOne).toBeInTheDocument();
        expect(langTitleTwo).toBeInTheDocument();
        expect(langDescOne).toBeInTheDocument();
        expect(langDescTwo).toBeInTheDocument();
        expect(langTitleOne).toHaveTextContent(/HTML/);
        expect(langTitleTwo).toHaveTextContent(/CSS/)
        expect(langDescOne).toHaveTextContent(/Proficient in creating well-structured/)
        expect(langDescTwo).toHaveTextContent(/Capable of designing visually/)

        // ------------------------------------ CSS Testing ------------------------------

        // Initial styles
        // Check Parent HTML CSS properties
        expect(section).toHaveClass(/^sectionContainer_.+/);
        expect(header).toHaveClass(/^sectionHeader_.+/);
        expect(langCont).toHaveClass(/^langContainer_.+/);
        expect(langContDivs[0]).toHaveClass(/^langContainerDivs_.+/)


        // Check Child HTML CSS properties of (header) 
        expect(headerTitle).toHaveClass(/^headerTitle_.+/)
        expect(headerParag).toHaveClass(/^headerParagraph_.+/)
        expect(headerBtns[0]).toHaveClass(/^downloadBtn_.+/)
        expect(headerBtns[1]).toHaveClass(/^arrowBtn_.+/)

        // Check child HTML CSS properties of (langContDivs | First & second only)
        expect(langTitleOne).toHaveClass(/^langTitle_.+/)
        expect(langTitleTwo).toHaveClass(/^langTitle_.+/)
        expect(langDescOne).toHaveClass(/^langDescription_.+/)
        expect(langDescTwo).toHaveClass(/^langDescription_.+/)

        // Expand Styles
        fireEvent.click(headerBtns[1])

        // Check Parent HTML CSS properties
        expect(section).toHaveClass(/^sectionContainer_.+-expandSectionContainer_.+/);
        expect(header).toHaveClass(/^sectionHeader_.+-expandSectionHeader_.+/);
        expect(langCont).toHaveClass(/^langContainer_.+-expandLangContainer_.+/);
        expect(langContDivs[0]).toHaveClass(/^langContainerDivs_.+-expandLangContDivs_.+/)


        // Check Child HTML CSS properties of (header) 
        expect(headerBtns[1]).toHaveClass(/^arrowBtn_.+-expandArrowBtn_.+/)

        // Check Back again to initial Styles
        fireEvent.click(headerBtns[1])
        // Check Parent HTML CSS properties
        expect(section).toHaveClass(/^sectionContainer_.+/);
        expect(header).toHaveClass(/^sectionHeader_.+/);
        expect(langCont).toHaveClass(/^langContainer_.+/);
        expect(langContDivs[0]).toHaveClass(/^langContainerDivs_.+/)


        // Check Child HTML CSS properties of (header) 
        expect(headerTitle).toHaveClass(/^headerTitle_.+/)
        expect(headerParag).toHaveClass(/^headerParagraph_.+/)
        expect(headerBtns[0]).toHaveClass(/^downloadBtn_.+/)
        expect(headerBtns[1]).toHaveClass(/^arrowBtn_.+/)

        // Check child HTML CSS properties of (langContDivs | First & second only)
        expect(langTitleOne).toHaveClass(/^langTitle_.+/)
        expect(langTitleTwo).toHaveClass(/^langTitle_.+/)
        expect(langDescOne).toHaveClass(/^langDescription_.+/)
        expect(langDescTwo).toHaveClass(/^langDescription_.+/)
    })
    it('Test 3 - Check component renders child components correctly', () => {
        render(<SkillCard />);
        expect(spyOnHTML).toHaveBeenCalled();
        expect(spyOnCSS).toHaveBeenCalled();
        expect(spyOnPython).toHaveBeenCalled();
        expect(spyOnJava).toHaveBeenCalled();
        expect(spyOnMySql).toHaveBeenCalled();
        expect(spyOnClang).toHaveBeenCalled();
        expect(spyOnArrow).toHaveBeenCalled();
    })
})
