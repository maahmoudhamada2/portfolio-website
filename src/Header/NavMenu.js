import { StyleSheet, css } from "aphrodite/no-important";
import { useState } from "react";
import NavItems from "./NavItems";

const navMenuStyle = StyleSheet.create({
    navContainer: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '50vw',
            height: '100%',
            color: 'white',
            backgroundColor: 'black',
        },

        // Mobile screen width
        '@media (min-width: 320px) and (max-width: 480px)': {
            width: '60vw',
        },

    },
    navBtn: {
        display: 'none',
        width: '2.5rem',
        height: '0.3rem',
        border: '0',
        outline: '0',
        borderRadius: '20px',
        position: 'absolute',
        top: '3rem',
        right: '2rem',
        zIndex: '1',
        transition: 'all 0.5s',
        ':before': {
            content: "''",
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            borderRadius: '20px',
            position: 'absolute',
            top: '-10px',
            right: '0',
            transition: 'all 0.5s'
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
        },
        // Mobile & tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            display: 'block'
        },

        // Mobile screen width
        '@media (min-width: 320px) and (max-width: 480px)': {
            width: '2rem',
        },
    },
    listContainer: {

        // Mobile & tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            display: 'flex',
            backgroundColor: 'black',
            height: '100vh',
            position: 'fixed',
            top: '0',
            right: '0',
            flexDirection: 'column',
            gap: '3.5rem',
            justifyContent: 'flex-end',
            alignItems: 'center',
            transform: 'translateX(100%)',
            transition: 'transform 0.5s',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.7)',
            padding: '2rem'
        },
        // Mobile screen width
        '@media (min-width: 320px) and (max-width: 480px)': {
            width: '60vw'
        },

        // Tablet screen width
        '@media (min-width: 481px) and (max-width: 786px)': {
            width: '50vw'
        }
    },

    expandListContainer: {
        // Mobile & tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            transform: 'translateX(0)',
        }
    },
    expandNavbtn: {
        // Mobile & tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
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
    backdropEffect: {
        // Mobile & tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '100%',
            height: '100vh',
            position: 'fixed',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(1px)',
            transition: 'all 0.5s'
        }
    }
})
export default function NavMenu() {
    const [expand, setExpand] = useState(false)
    const toggleMenu = () => expand ? setExpand(false) : setExpand(true)
    return (
        <>
            <button onClick={toggleMenu} className={css(navMenuStyle.navBtn, expand && navMenuStyle.expandNavbtn)}></button>
            <label onClick={toggleMenu} className={css(expand && navMenuStyle.backdropEffect)}></label>
            <nav className={css(navMenuStyle.navContainer, expand && navMenuStyle.expandNavContainer)}>
                <ul className={css(navMenuStyle.listContainer, expand && navMenuStyle.expandListContainer)}>
                    <NavItems toggleMenu={toggleMenu} />
                </ul>
            </nav>
        </>
    )
}