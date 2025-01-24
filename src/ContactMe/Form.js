import { StyleSheet, css } from "aphrodite/no-important";

const styles = StyleSheet.create({
    sectionContainer: {
        // Shared CSS styles for all sizes
        width: '500px',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2rem',
        padding: '1rem',
        gap: '1rem',
        border: '4px solid transparent',
        borderRadius: '40px',
        backgroundColor: 'rgba(20, 21, 24, 0.99)',
        transition: '0.5s',
    },
    formTitle: {
        marginTop: '1rem',
        color: 'rgb(100, 255, 218)',
        fontWeight: 'bold',
        fontSize: '1.2rem'
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
        gap: '1rem',
        borderRadius: '40px'
    },
    formFields: {
        width: '100%',
        padding: '1rem',
        border: '0',
        borderRadius: '20px',
        backgroundColor: 'black',
        color: 'gray',
        outline: '0',
        fontWeight: 'bold'
    },
    textAreaField: {
        height: '200px'
    },
    formSubmitBtn: {
        width: '44%',
        padding: '1rem',
        color: 'gray',
        backgroundColor: 'black',
        borderRadius: '20px',
        outline: '0',
        fontWeight: 'bold',
        marginTop: '1rem',
        border: '2px solid rgb(100, 255, 218)',
        cursor: 'pointer'
    }
})

export default function Form() {
    return (
        <section className={css(styles.sectionContainer)}>
            <h2 className={css(styles.formTitle)}>Get In Touch</h2>
            <form className={css(styles.form)}>
                <input className={css(styles.formFields)} placeholder="Name"></input>
                <input className={css(styles.formFields)} placeholder="Email"></input>
                <input className={css(styles.formFields)} placeholder="Subject"></input>
                <textarea className={css(styles.formFields, styles.textAreaField)} placeholder="Message"></textarea>
                <input className={css(styles.formSubmitBtn)} type="submit"></input>
            </form>
        </section>
    )
}