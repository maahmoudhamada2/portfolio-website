import logo from '../assets/logo.png';
import { StyleSheet, css } from 'aphrodite/no-important';
import NavMenu from './NavMenu';

const mobileStyle = StyleSheet.create({
    headerContainer: {
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            width: '100%',
            height: '15vh',
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'space-between',
            color: 'white'
        }
    },
    logo: {
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            height: '100%'
        }
    },
})
export default function Header() {
    return (
        <header className={css(mobileStyle.headerContainer)}>
            <img className={css(mobileStyle.logo)} src={logo} alt="ws-logo" />
            <NavMenu />
        </header>
    )
}