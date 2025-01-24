import { StyleSheet, css } from "aphrodite/no-important";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./SocialSvg";

const socialList = StyleSheet.create({
    listContainer: {
        // Shared CSS styles for all sizes
        display: 'flex',
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            marginTop: 'calc(1.5rem + 2vh)',
            gap: 'calc(1rem + 1vw)'
        },
        // Laptop & Desktop screens width
        '@media (min-width: 786px)': {
            marginTop: 'calc(1.5rem + 4vh)',
            gap: 'calc(0.5rem + 0.6vw)'
        }
    }
})

export default function Socials() {
    return (
        <ul className={css(socialList.listContainer)}>
            <li><a href="https://web.facebook.com/mahmoud.hamada.752487" target="_blank" rel="noreferrer"><FacebookIcon /></a></li>
            <li><a href="https://github.com/maahmoudhamada2" target="_blank" rel="noreferrer"><GithubIcon /></a></li>
            <li><a href="https://instagram.com/mahmoudhamada97/" target="_blank" rel="noreferrer"><InstagramIcon /></a></li>
            <li><a href="https://linkedin.com/in/maahmoud-hamada" target="_blank" rel="noreferrer"><LinkedinIcon /></a></li>
            <li><a href="https://x.com/maahmoudhamada" target="_blank" rel="noreferrer"><TwitterIcon /></a></li>
        </ul >
    )
}