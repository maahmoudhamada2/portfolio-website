import { StyleSheet, css } from "aphrodite/no-important";
import { LocationPinIcon, MailIcon, PhoneCallIcon } from "./ContactInfoIcons"

const contactInfoStyle = StyleSheet.create({
    sectionContainer: {

        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '100%',
            height: '510px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: '1rem 0',
        }
    },
    articleContainer: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            width: '100%',
            height: '150px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }
    },
    contactInfoHeading: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginTop: '2rem',
            marginBottom: '0.5rem',
            color: 'red',
            letterSpacing: '0.2rem'
        }
    },
    paragraphColor: {
        // Mobile & Tablet screens width
        '@media (min-width: 320px) and (max-width: 786px)': {
            color: 'gray'
        }
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
                <PhoneCallIcon />
                <h3 className={css(contactInfoStyle.contactInfoHeading)}>CALL ME AT</h3>
                <p className={css(contactInfoStyle.paragraphColor)}>0123456789</p>
            </article>
            <article className={css(contactInfoStyle.articleContainer)}>
                <MailIcon />
                <h3 className={css(contactInfoStyle.contactInfoHeading)}>EMAIL ME AT</h3>
                <p className={css(contactInfoStyle.paragraphColor)}>maahmoud.hamada@hotmail.com</p>
            </article>
        </section>
    )
}