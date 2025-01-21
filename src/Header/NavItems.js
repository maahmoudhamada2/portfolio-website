import { StyleSheet, css } from "aphrodite/no-important";

const navItemsStyle = StyleSheet.create({
    listItem: {
        
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '100%',
            fontSize: 'calc(1rem + 1vw)',
            fontWeight: 'bold',
            borderBottom: ' 1px solid #80808063',
            paddingBottom: '1.5rem',
            textAlign: 'center'
        }
    },
    anchors: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            color: 'white',
            textDecoration: 'none'
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