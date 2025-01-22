import { StyleSheet, css } from "aphrodite/no-important";
import Socials from "../Socials/Socials";

const footerStyle = StyleSheet.create({
    footerContainer: {
        // Mobile & Tabelt screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(6, 7, 9, 0.99)',
            color: 'white',
            gap: '1rem',
            padding: '1rem',
            transition: 'all 0.5s'
        }
    },
    copyRight: {
        // Mobile & Tabelt screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            fontSize: '0.9rem',
            color: 'gray',
            textAlign: 'center'
        }
    }
})
export default function Footer() {
    return (
        <footer className={css(footerStyle.footerContainer)}>
            <Socials />
            <p className={css(footerStyle.copyRight)}>© 2024 Mahmoud Hamada. All rights reserved.</p>
        </footer>
    )
}