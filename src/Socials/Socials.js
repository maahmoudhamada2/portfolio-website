import { StyleSheet, css } from "aphrodite/no-important";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./SocialSvg";

const socialList = StyleSheet.create({
    listContainer: {
        '@media (max-width: 481px)': {
            display: 'flex',
            marginTop: '4rem',
            gap: '1rem'
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