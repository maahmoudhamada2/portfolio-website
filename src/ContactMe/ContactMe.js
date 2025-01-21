import SectionHoc from '../SectionHoc/SectionHoc';
import Form from './Form';
import ContactInfo from './ContactInfo';

const SectionBuilder = SectionHoc(() => <><Form /> <ContactInfo /></>)

export default function ContactMe() {
    return (
        <SectionBuilder
            sectionId="contactme"
            color="black"
            title="Contact Me"
            subTitle="Let's Connect!"
            paragraph="Thank you for stopping by. Whether you have a question, feedback, or just want to say hello, I’d love to hear from you! Simply fill out the form below, and I’ll get back to you as soon as possible. Together, we can start a conversation that inspires, informs, and builds connections. Don’t hesitate—reach out today!"
        />
    )
}