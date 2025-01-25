import { StyleSheet, css } from "aphrodite/no-important";
import { LocationPinIcon, MailIcon, PhoneCallIcon } from "./ContactMeIcons"

const contactInfoStyle = StyleSheet.create({
    sectionContainer: {
        // Shared CSS styles for all sizes
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '4rem',
        gap: '4rem',
        // Laptop (small) screen width
        '@media (min-width: 786px)': {
            gap: '3rem 0rem'
        },
        // Desktop screen width 
        '@media (min-width: 1024px)': {
            flexDirection: 'row',
            gap: '0'
        }
    },
    articleContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (min-width: 1024px)': {
            width: '60%'
        }
    },
    contactInfoHeading: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: '2rem 0 1rem 0',
        color: 'red',
        letterSpacing: '0.2rem',
        // Mobile width screen
        '@media (min-width: 320px) and (max-width: 481px)': {
            fontSize: '1.2rem'
        },
        // Desktop screen width 
        '@media (min-width: 1024px)': {
            fontSize: '1.5rem',
            marginBottom: '0.9rem'
        }
    },
    paragraphColor: {
        fontSize: '1.1rem',
        color: 'gray'
    }
});

export default function ContactInfo() {
    return (
        <section className={css(contactInfoStyle.sectionContainer)}>
            <article className={css(contactInfoStyle.articleContainer)}>
                <LocationPinIcon />
                <h3 className={css(contactInfoStyle.contactInfoHeading)}>WHERE TO FIND ME</h3>
                <address>
                    <p className={css(contactInfoStyle.paragraphColor)}>Alexnadira, Egypt</p>
                </address>
            </article>
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

        </section>
    )
}