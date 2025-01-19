import { StyleSheet, css } from "aphrodite/no-important";
import { useState } from "react";
import NavItems from "./NavItems";

const navMenuStyle = StyleSheet.create({
    navContainer: {
        '@media (max-width: 480px)': {
            width: '70%',
            height: '100%',
            color: 'white',
            backgroundColor: 'black',
        }
    },
    navBtn: {
        '@media (max-width: 480px)': {
            width: '2rem',
            height: '0.3rem',
            border: '0',
            borderRadius: '20px',
            position: 'absolute',
            top: '3rem',
            right: '2rem',
            zIndex: '1',
            transition: 'transform 0.5s',
            ':before': {
                content: "''",
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: '20px',
                position: 'absolute',
                top: '-10px',
                right: '0',
                transition: 'transform 0.5s'
            },
            ':after': {
                content: "''",
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: '20px',
                position: 'absolute',
                top: '10px',
                right: '0',
                opacity: '1',
                transition: 'transform 0.5s, opacity 0.5s',
            }
        }
    },
    listContainer: {
        '@media (max-width: 480px)': {
            width: '100%',
            height: '100vh',
            position: 'fixed',
            top: '0',
            right: '0',
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'translateX(100%)',
            transition: 'transform 0.5s',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.7)',
            marginTop: '2rem',
            padding: '2rem'
        }
    },
    expandNavContainer: {
        '@media (max-width: 480px)': {
        }
    },
    expandListContainer: {
        '@media (max-width: 480px)': {
            transform: 'translateX(0)',
        }
    },
    expandNavbtn: {
        '@media (max-width: 480px)': {
            position: 'fixed',
            transform: 'rotate(45deg)',
            ':before': {
                transform: 'translateX(-30px)',
                opacity: '0'
            },
            ':after': {
                transform: 'rotate(90deg)',
                top: '0',
                right: '0'
            }
        }
    },
})
export default function NavMenu() {
    const [expand, setExpand] = useState(false)
    const toggleMenu = () => expand ? setExpand(false) : setExpand(true)
    return (
        <>
            <button onClick={toggleMenu} className={css(navMenuStyle.navBtn, expand && navMenuStyle.expandNavbtn)}></button>
            <nav className={css(navMenuStyle.navContainer, expand && navMenuStyle.expandNavContainer)}>
                <ul className={css(navMenuStyle.listContainer, expand && navMenuStyle.expandListContainer)}>
                    <NavItems toggleMenu={toggleMenu} />
                </ul>
            </nav>
        </>
    )
}