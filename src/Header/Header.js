import { StyleSheet, css } from "aphrodite/no-important";
import logo from '../assets/logo.png';
import NavMenu from "./NavMenu";

const headerStyle = StyleSheet.create({
    headerContainer: {
        // Mobile, Tablet & laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            width: '100%',
            height: '15vh',
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'black',
            zIndex: '1'
        },
    },
    logo: {
        // Mobile, Tablet & laptop (small) screens width
        '@media (min-width: 320px) and (max-width: 1024px)': {
            height: '100%',
        }
    },

})
export default function Header() {
    return (
        <header className={css(headerStyle.headerContainer)}>
            <img className={css(headerStyle.logo)} src={logo} alt="ws-logo" />
            <NavMenu />
        </header>
    )
}