import Header from "../Header/Header";
import HeroSection from '../HeroSection/HeroSection';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import ScrollTop from "../../ScrollTop/ScrollTop";

export default function App() {
    return (
        <>
            <Header />
            <HeroSection />
            <Projects />
            <AboutMe />
            <ContactMe />
            <Footer />
            <ScrollTop />
        </>
    )
}