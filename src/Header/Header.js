import { StyleSheet, css } from "aphrodite/no-important";
import logo from '../assets/logo.png';
import NavMenu from "./NavMenu";

const headerStyle = StyleSheet.create({
    headerContainer: {
        // Shared CSS styles for all sizes
        width: '100%',
        height: '15vh',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        zIndex: '2'
    },
    logo: {
        // Shared CSS styles for all sizes
        height: '100%',
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