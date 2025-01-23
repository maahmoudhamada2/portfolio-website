import { StyleSheet, css } from "aphrodite/no-important";

const navItemsStyle = StyleSheet.create({
    listItem: {
        // Shared CSS styles for all sizes
        fontWeight: 'bold',
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '100%',
            fontSize: 'calc(1rem + 1vw)',
            borderBottom: ' 1px solid #80808063',
            paddingBottom: '1.5rem',
            textAlign: 'center'
        },
        // Laptop (small) screen width
        '@media (min-width: 786px) and (max-width: 1200px)': {
            fontSize: 'calc(1rem + 0.5vw)'
        }
    },
    anchors: {
        // Shared CSS styles for all sizes
        color: 'white',
        textDecoration: 'none',
        // Laptop & Desktop screens width
        '@media (min-width: 786px) and (max-width: 1200px)': {
            ':hover': {
                color: 'red',
                transition: 'all 0.5s'
            }
        }
    }
})

const navItems = [
    { name: 'Home', id: '#herosection', },
    { name: 'Projects', id: '#projects' },
    { name: 'Blogs', id: '#blogs' },
    { name: 'Contact Me', id: '#contactMe' },
    { name: 'About Me', id: '#aboutme' }

];

export default function NavItems({ toggleMenu }) {
    return (
        <>
            {navItems.map((elem, idx) => {
                return (
                    <li
                        key={idx}
                        className={css(navItemsStyle.listItem)}>
                        <a
                            className={css(navItemsStyle.anchors)}
                            onClick={toggleMenu}
                            href={elem.id}>{elem.name} </a>
                    </li>
                )
            })}
        </>
    )
}