import { StyleSheet, css } from "aphrodite/no-important";
import { LocationPinIcon, MailIcon, PhoneCallIcon } from "./ContactInfoIcons"

const contactInfoStyle = StyleSheet.create({
    sectionContainer: {
        // Shared CSS styles for all sizes
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '3rem 0',
        gap: '4rem',
        // Laptop (small) screen width
        '@media (min-width: 786px) and (max-width: 1024px)': {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '5rem 0rem'
        },
        // Desktop screen width 
        '@media (min-width: 1024px) and (max-width: 1200px)': {
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: '1rem'
        }
    },
    articleContainer: {
        width: '100%',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        // Laptop (small) screen width
        '@media (min-width: 786px) and (max-width: 1200px)': {
            width: '50%',
        },
    },
    contactInfoHeading: {
        fontSize: 'calc(1rem + 2vw)',
        fontWeight: 'bold',
        marginTop: 'calc(1rem + 1vh)',
        marginBottom: 'calc(0.5rem + 1vh)',
        color: 'red',
        letterSpacing: '0.2rem',

        // Desktop screen width 
        '@media (min-width: 1024px) and (max-width: 1200px)': {
            fontSize: 'calc(1rem + 1vw)',
            marginBottom: 'calc(1rem + 0.5vh)'
        }
    },
    paragraphColor: {
        fontSize: '1.2rem',
        color: 'gray'
    }
});

export default function ContactInfo() {
    return (
        <section className={css(contactInfoStyle.sectionContainer)}>

            <article className={css(contactInfoStyle.articleContainer)}>
                <MailIcon />
                <h3 className={css(contactInfoStyle.contactInfoHeading)}>EMAIL ME AT</h3>
                <p className={css(contactInfoStyle.paragraphColor)}>maahmoud.hamada@hotmail.com</p>
            </article>
            <article className={css(contactInfoStyle.articleContainer)}>
                <PhoneCallIcon />
                <h3 className={css(contactInfoStyle.contactInfoHeading)}>CALL ME AT</h3>
                <p className={css(contactInfoStyle.paragraphColor)}>0123456789</p>
            </article>
            <article className={css(contactInfoStyle.articleContainer)}>
                <LocationPinIcon />
                <h3 className={css(contactInfoStyle.contactInfoHeading)}>WHERE TO FIND ME</h3>
                <address>
                    <p className={css(contactInfoStyle.paragraphColor)}>Alexnadira, Egypt</p>
                </address>
            </article>
        </section>
    )
}