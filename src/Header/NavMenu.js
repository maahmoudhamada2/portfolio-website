import { StyleSheet, css } from 'aphrodite/no-important';
import { useState } from 'react';

const expandStyle = StyleSheet.create({
    navContainer: {
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            transform: 'translateX(0)'
        }
    },
    navBtn: {
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            position: 'fixed',
            transform: 'rotate(45deg)',
            ':before': {
                transform: 'translateX(-30px)',
                opacity: '0'
            },
            ':after': {
                transform: 'rotate(90deg)',
                top: '0'
            }
        }
    },
    label: {
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            width: '100%',
            height: '100vh',
            position: 'fixed',
            right: '0',
            top: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }
    }
})

const mobileStyle = StyleSheet.create({
    navContainer: {
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            width: '50%',
            height: '100vh',
            backgroundColor: 'black',
            position: 'fixed',
            right: '0',
            transform: 'translateX(100%)',
            transition: 'transform 0.5s',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.7)'
        }
    },
    listContainer: {
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3rem'
        }
    },
    navBtn: {
        '@media only screen and (min-width: 320px) and (max-width: 480px)': {
            width: '2rem',
            height: '0.3rem',
            backgroundColor: 'white',
            border: '0',
            borderRadius: '20px',
            position: 'absolute',
            top: '3rem',
            right: '2rem',
            zIndex: '1',
            transform: 'rotate(0deg)',
            transition: 'transform 0.5s',
            ':before': {
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '-10px',
                right: '0',
                backgroundColor: 'white',
                borderRadius: '20px',
                opacity: '1',
                transform: 'translateX(0)',
                transition: 'all 0.5s'
            },
            ':after': {
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '10px',
                right: '0',
                backgroundColor: 'white',
                borderRadius: '20px',
                transform: 'rotate(0deg)',
                transition: 'transform 0.5s'
            }
        }
    },
})
export default function NavMenu() {
    const [expand, setExpand] = useState(false)
    const toggleMenu = () => expand ? setExpand(false) : setExpand(true)
    return (
        <>
            <label onClick={toggleMenu} className={css(expand && expandStyle.label)}></label>
            <button onClick={toggleMenu} className={css(mobileStyle.navBtn, expand && expandStyle.navBtn)}></button>
            <nav className={css(mobileStyle.navContainer, expand && expandStyle.navContainer)}>
                <ul className={css(mobileStyle.listContainer)}>
                    <li><a>Home</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Blogs</a></li>
                    <li><a>Contact Me</a></li>
                    <li><a>About Me</a></li>
                </ul>
            </nav>
        </>
    )
}