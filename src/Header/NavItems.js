import { StyleSheet, css } from "aphrodite/no-important";

const navItemsStyle = StyleSheet.create({
    listItem: {
        '@media (max-width: 480px)': {
            width: '100%',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            borderBottom: ' 1px solid #80808063',
            paddingBottom: '1.5rem',
            textAlign: 'center'
        }
    },
    anchors: {
        '@media (max-width: 480px)': {
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