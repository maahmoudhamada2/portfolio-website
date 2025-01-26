import { StyleSheet, css } from "aphrodite/no-important";
import Socials from "../Socials/Socials";

const footerStyle = StyleSheet.create({
    footerContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(6, 7, 9, 0.99)',
        color: 'white',
        gap: '1rem',
        padding: '1rem',
        transition: 'all 0.5s'
    },
    copyRight: {
        fontSize: '0.9rem',
        color: 'gray',
        textAlign: 'center',
        marginTop: '0.6rem'
    }
})
export default function Footer() {
    const fullYear = () => new Date().getFullYear()
    return (
        <footer className={css(footerStyle.footerContainer)}>
            <Socials />
            <p className={css(footerStyle.copyRight)}>© {fullYear()} Mahmoud Hamada. All rights reserved.</p>
        </footer>
    )
}