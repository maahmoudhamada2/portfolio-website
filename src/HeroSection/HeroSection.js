import { StyleSheet, css } from "aphrodite/no-important";
import heroBG from '../assets/heroSectionBg.jpg';
import Socials from "../Socials/Socials";

const heroStyle = StyleSheet.create({
    sectionContainer: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            width: '100%',
            height: '100vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url('${heroBG}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'relative',
            color: 'white',
            padding: '1rem',
            ':before': {
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0',
                right: '0',
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }
        }
    },
    headerContainer: {
        // Mobile & Tabelt screen width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            position: 'relative',
            fontSize: 'calc(1.5rem + 2vw)',
            fontWeight: 'bold',
            lineHeight: '3.5rem',
            color: 'red'
        },
        // Laptop (small) screen width
        '@media (min-width: 767px) and (max-width: 1024px)': {
            fontSize: 'calc(1.5rem + 2.5vw)'
        }
    },
    headerSpan: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            display: 'block',
            color: 'white',
            fontSize: 'calc(2rem + 2vw)',
            margin: 'calc(1rem + 1vh) 0',
        },
        // Laptop (small) screen width
        '@media (min-width: 767px) and (max-width: 1024px)': {
            fontSize: 'calc(1.5rem + 3vw)',
            margin: 'calc(1rem + 1.5vh) 0',
        }
    },
    articleContainer: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
        }
    },
    articleParagraph: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            fontSize: 'calc(1rem + 1vw)',
            marginBottom: 'calc(2rem + 3vh)',
            letterSpacing: '0.2rem',
        },
    },
    paragraphSpan: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            borderRight: '2px solid red',
            borderLeft: '2px solid red',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            fontStyle: 'italic'
        }
    },
    ctaContainer: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            width: '80%',
            display: 'flex',
            justifyContent: 'center',
            gap: '5vw'
        }
    },
    ctaBtns: {
        // Mobile & Tablet screen width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            width: 'calc(9rem + 3vw)',
            height: 'calc(3rem + 2vh)',
            color: 'white',
            fontSize: 'calc(0.9rem + 1vw)',
        },
        // Laptop (small) screen width
        '@media (min-width: 767px) and (max-width: 1024px)': {
            width: 'calc(9rem + 3.5vw)',
            height: 'calc(3rem + 2.5vh)',
        }
    },
    primBtn: {

        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            backgroundColor: 'red',
            border: '0'
        }
    },
    secBtn: {
        // Mobile, Tablet & Laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            backgroundColor: 'transparent',
            border: '2px solid red'
        }
    }
})


export default function HeroSection() {
    return (
        <section className={css(heroStyle.sectionContainer)}>
            <header className={css(heroStyle.headerContainer)}>
                <h1>Hello, World
                    <span className={css(heroStyle.headerSpan)}>I&apos;m Mahmoud Hamada</span>
                </h1>
            </header>
            <article className={css(heroStyle.articleContainer)}>
                <p className={css(heroStyle.articleParagraph)}>
                    <span className={css(heroStyle.paragraphSpan)}>Front-End Developer</span>
                </p>
                <div className={css(heroStyle.ctaContainer)}>
                    <button className={css(heroStyle.ctaBtns, heroStyle.primBtn)}>Contact Me</button>
                    <button className={css(heroStyle.ctaBtns, heroStyle.secBtn)}>About Me</button>
                </div>
                <Socials />
            </article>
        </section>
    )
}