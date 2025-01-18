import { StyleSheet, css } from "aphrodite/no-important";
import logo from '../assets/logo.png';
import NavMenu from "./NavMenu";

const headerStyle = StyleSheet.create({
    headerContainer: {
        '@media (max-width: 480px)': {
            width: '100%',
            height: '15vh',
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'black',
            position: 'fixed'
        }
    },
    logo: {
        height: '100%',
        zIndex: '1'
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