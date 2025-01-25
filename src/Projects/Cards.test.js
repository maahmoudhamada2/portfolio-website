import { render, within } from '@testing-library/react'
import { StyleSheetTestUtils } from 'aphrodite'
import Cards from './Cards'

StyleSheetTestUtils.suppressStyleInjection();

const fakeData = [
    {
        "projectTitle": "projectTitle 1",
        "category": "category 1",
        "introduction": "introduction 1",
        "img_url": "https://example.com",
        "code_url": "https://github.com",
        "id": "1"
    },
    {
        "projectTitle": "projectTitle 2",
        "category": "category 2",
        "introduction": "introduction 2",
        "img_url": "https://example.com",
        "code_url": "https://github.com",
        "id": "2"
    }
]

describe('Cards component test suites', () => {
    it('Test 1 - Check component renders without crashing - No Data prop', () => {
        render(<Cards />)
    })

    it('Test 2 - Check component renders without crashing - With Data prop', () => {
        render(<Cards data={fakeData} />)
    })

    it('Test 3 - Check component renders HTML & css elements correctly - No Data prop', () => {
        const { container } = render(<Cards />)
        const comingSoonSection = container.querySelector('section')

        expect(comingSoonSection).toBeInTheDocument();
        expect(comingSoonSection).toHaveClass(/^comingSoon_.+/)
    })

    it('Test 4 - Check component renders HTML & CSS elements correctly - With Data prop', () => {
        const { container } = render(<Cards data={fakeData} />)

        // Get HTML elements
        const cardsHolder = container.querySelector('div')
        const articles = within(cardsHolder).getAllByRole('article')

        expect(cardsHolder).toBeInTheDocument()
        expect(articles).toHaveLength(2)

        // Check first card - article[0]
        expect(articles[0]).toBeInTheDocument()

        // Get article[0] child HTML elements
        const cardCoverOne = within(articles[0]).getByRole('img') // <img>
        const cardContentOne = articles[0].querySelector('div') // <div>
        const cardsCatgOne = within(articles[0]).getAllByRole('paragraph')[0] // <p>
        const cardsIntroOne = within(articles[0]).getAllByRole('paragraph')[1] // <p>
        const cardsHeadOne = within(articles[0]).getByRole('heading') // <h3>
        const codeBtnOne = within(articles[0]).getByRole('button') // <button>

        // Check articles[0] child HTML elements

        // articles[0] > <img>
        expect(cardCoverOne).toBeInTheDocument();
        expect(cardCoverOne).toHaveAttribute('src', fakeData[0].img_url);

        // articles[0] > <div>
        expect(cardContentOne).toBeInTheDocument();

        // articles[0] > <p>
        expect(cardsCatgOne).toBeInTheDocument();
        expect(cardsCatgOne).toHaveTextContent(fakeData[0].category)

        // articles[0] > <p>
        expect(cardsIntroOne).toBeInTheDocument()
        expect(cardsIntroOne).toHaveTextContent(fakeData[0].introduction)

        // articles[0] > <h3>
        expect(cardsHeadOne).toBeInTheDocument();
        expect(cardsHeadOne).toHaveTextContent(fakeData[0].projectTitle)

        // articles[0] > button
        expect(codeBtnOne).toBeInTheDocument()
        expect(within(codeBtnOne).getByRole('link')).toBeInTheDocument()
        expect(within(codeBtnOne).getByRole('link')).toHaveTextContent('Source code')
        expect(within(codeBtnOne).getByRole('link')).toHaveAttribute('href', fakeData[0].code_url)

        // Check second card - article[1]
        expect(articles[1]).toBeInTheDocument()

        // Get article[1] child HTML elements
        const cardCoverTwo = within(articles[1]).getByRole('img') // <img>
        const cardContentTwo = articles[1].querySelector('div') // <div>
        const cardsCatgTwo = within(articles[1]).getAllByRole('paragraph')[0] // <p>
        const cardsIntroTwo = within(articles[1]).getAllByRole('paragraph')[1] // <p>
        const cardsHeadTwo = within(articles[1]).getByRole('heading') // <h3>
        const codeBtnTwo = within(articles[1]).getByRole('button') // <button>

        // Check articles[1] child HTML elements

        // articles[1] > img
        expect(cardCoverTwo).toBeInTheDocument();
        expect(cardCoverTwo).toHaveAttribute('src', fakeData[1].img_url);

        // articles[1] > div
        expect(cardContentTwo).toBeInTheDocument();
        // articles[1] > first p
        expect(cardsCatgTwo).toBeInTheDocument();
        expect(cardsCatgTwo).toHaveTextContent(fakeData[1].category)

        // articles[1] > second p
        expect(cardsIntroTwo).toBeInTheDocument()
        expect(cardsIntroTwo).toHaveTextContent(fakeData[1].introduction)

        // articles[1] > h3
        expect(cardsHeadTwo).toBeInTheDocument();
        expect(cardsHeadTwo).toHaveTextContent(fakeData[1].projectTitle)

        // articles[1] > button
        expect(codeBtnTwo).toBeInTheDocument()
        expect(within(codeBtnTwo).getByRole('link')).toBeInTheDocument()
        expect(within(codeBtnTwo).getByRole('link')).toHaveTextContent('Source code')
        expect(within(codeBtnOne).getByRole('link')).toHaveAttribute('href', fakeData[1].code_url)
    })

    it('Test 5 - Check component applies CSS styles correctly', () => {
        const { container } = render(<Cards data={fakeData} />)

        const cardsHolder = container.querySelector('div')
        const articles = within(cardsHolder).getAllByRole('article')

        // Get article[1] child HTML elements
        const cardCoverTwo = within(articles[1]).getByRole('img') // <img>
        const cardContentTwo = articles[1].querySelector('div') // <div>
        const cardsCatgTwo = within(articles[1]).getAllByRole('paragraph')[0] // <p>
        const cardsIntroTwo = within(articles[1]).getAllByRole('paragraph')[1] // <p>
        const cardsHeadTwo = within(articles[1]).getByRole('heading') // <h3>
        const codeBtnTwo = within(articles[1]).getByRole('button') // <button>

        // Get article[0] child HTML elements
        const cardCoverOne = within(articles[0]).getByRole('img') // <img>
        const cardContentOne = articles[0].querySelector('div') // <div>
        const cardsCatgOne = within(articles[0]).getAllByRole('paragraph')[0] // <p>
        const cardsIntroOne = within(articles[0]).getAllByRole('paragraph')[1] // <p>
        const cardsHeadOne = within(articles[0]).getByRole('heading') // <h3>
        const codeBtnOne = within(articles[0]).getByRole('button') // <button>


        expect(cardsHolder).toHaveClass(/^latestContainer_.+/)
        expect(articles[0]).toHaveClass(/^largeCard_.+/)
        expect(articles[1]).toHaveClass(/^largeCard_.+/)
        expect(cardCoverOne).toHaveClass(/^cardCover_.+/)
        expect(cardCoverTwo).toHaveClass(/^cardCover_.+/)
        expect(cardContentOne).toHaveClass(/^cardContent_.+/)
        expect(cardContentTwo).toHaveClass(/^cardContent_.+/)
        expect(cardsCatgOne).toHaveClass(/^projectCategory_.+/)
        expect(cardsCatgTwo).toHaveClass(/^projectCategory_.+/)
        expect(cardsIntroOne).toHaveClass(/^projectIntro_.+/)
        expect(cardsIntroTwo).toHaveClass(/^projectIntro_.+/)
        expect(cardsHeadOne).toHaveClass(/^projectTitle_.+/)
        expect(cardsHeadTwo).toHaveClass(/^projectTitle_.+/)
        expect(codeBtnOne).toHaveClass(/^codeBtn_.+/)
        expect(codeBtnTwo).toHaveClass(/^codeBtn_.+/)
        expect(within(codeBtnOne).getByRole('link')).toHaveClass(/^codeAnchor_.+/)
        expect(within(codeBtnTwo).getByRole('link')).toHaveClass(/^codeAnchor_.+/)
    })
})
