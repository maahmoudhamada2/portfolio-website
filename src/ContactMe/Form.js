import { StyleSheet, css } from "aphrodite/no-important";
import { useState } from "react";
import { CheckmarkIcon } from "./ContactMeIcons";

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
    },
    submited: {
        justifyContent: 'center',
        border: '2px solid rgb(100, 255, 218)',
        gap: '1.5rem',
        '@media (min-width: 481px)': {
            fontSize: '1.5rem'
        }
    }
})

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ name: "", email: "", subject: "", message: "" })
        setSuccess(true)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const inputAttr = [
        { name: 'name', type: 'text', placeholder: 'Name' },
        { name: 'email', type: 'email', placeholder: 'Email' },
        { name: 'subject', type: 'text', placeholder: 'Subject' }
    ]
    return (
        <section className={css(styles.sectionContainer, success && styles.submited)}>
            {
                success
                    ? <>
                        <CheckmarkIcon />
                        <p>Thank you!</p>
                        <p>Your submission has been sent</p>
                        <button className={css(styles.formSubmitBtn)} onClick={() => setSuccess(false)}>Return</button>
                    </>
                    : <>
                        <h2 className={css(styles.formTitle)}>Get In Touch</h2>
                        <form onSubmit={handleSubmit} className={css(styles.form)}>
                            {inputAttr.map((elem, idx) => {
                                return <input
                                    key={idx}
                                    className={css(styles.formFields)}
                                    onChange={handleChange}
                                    name={elem.name}
                                    value={formData[elem.name]}
                                    type={elem.type}
                                    placeholder={elem.placeholder}
                                    required />
                            })}
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={css(styles.formFields, styles.textAreaField)}
                                placeholder="Message"
                                required></textarea>
                            <input className={css(styles.formSubmitBtn)} type="submit"></input>
                        </form>
                    </>
            }
        </section>
    )
}