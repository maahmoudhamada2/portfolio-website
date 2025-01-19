import { StyleSheet, css } from "aphrodite/no-important";
import heroBG from '../assets/heroSectionBg.jpg';
import Socials from "../Socials/Socials";

const heroStyle = StyleSheet.create({
    sectionContainer: {
        '@media (max-width: 481px)': {
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
        '@media (max-width: 481px)': {
            position: 'relative',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'red'
        }
    },
    headerSpan: {
        '@media (max-width: 481px)': {
            display: 'inline-block',
            margin: '2.5rem 0',
            fontSize: '2.5rem',
            color: 'white'
        }
    },
    articleContainer: {
        '@media (max-width: 481px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
        }
    },
    articleParagraph: {
        '@media (max-width: 481px)': {
            fontSize: '1.5rem',
            marginBottom: '3.5rem',
            letterSpacing: '0.2rem'
        }
    },
    paragraphSpan: {
        '@media (max-width: 481px)': {
            borderRight: '2px solid red',
            borderLeft: '2px solid red',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            fontStyle: 'italic'
        }
    },
    ctaContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    ctaBtns: {
        width: '145px',
        height: '55px',
        color: 'white',
        fontSize: '1.1rem',
        borderRadius: '90px'
    },
    primBtn: {
        backgroundColor: 'red',
        border: '0'
    },
    secBtn: {
        backgroundColor: 'transparent',
        border: '2px solid red'
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