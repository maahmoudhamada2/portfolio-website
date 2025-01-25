import { render, waitFor } from '@testing-library/react'
import { StyleSheetTestUtils } from 'aphrodite'
import * as Header from '../Header/Header';
import * as HeroSection from '../HeroSection/HeroSection';
import * as Projects from '../Projects/Projects';
import * as ContactMe from '../ContactMe/ContactMe';
import * as AboutMe from '../AboutMe/AboutMe';
import * as Footer from '../Footer/Footer';
import * as ScrollTop from '../../ScrollTop/ScrollTop';
import App from './App'


// Mocking Child Components
const spyOnHeader = jest.spyOn(Header, 'default');
const spyOnHeroSection = jest.spyOn(HeroSection, 'default');
const spyOnProjects = jest.spyOn(Projects, 'default');
const spyOnContactMe = jest.spyOn(ContactMe, 'default');
const spyOnAboutMe = jest.spyOn(AboutMe, 'default');
const spyOnFooter = jest.spyOn(Footer, 'default');
const spyOnScrollTop = jest.spyOn(ScrollTop, 'default');


StyleSheetTestUtils.suppressStyleInjection();
global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve([])
}))

describe('App component test suites', () => {
    afterAll(() => {
        jest.clearAllMocks()
    })

    it('Test 1 - Check component renders without crashing', async () => {
        render(<App />)
        await waitFor(() => { })
    })

    it ('Test 2 - Check component renders Child component correctly', async () => {
        render(<App />)
        await waitFor(() => {
            expect(spyOnHeader).toHaveBeenCalled();
            expect(spyOnHeroSection).toHaveBeenCalled();
            expect(spyOnProjects).toHaveBeenCalled();
            expect(spyOnContactMe).toHaveBeenCalled();
            expect(spyOnAboutMe).toHaveBeenCalled();
            expect(spyOnFooter).toHaveBeenCalled();
            expect(spyOnScrollTop).toHaveBeenCalled();
        })
    })
})
