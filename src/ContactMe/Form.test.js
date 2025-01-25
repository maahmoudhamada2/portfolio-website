import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { StyleSheetTestUtils } from 'aphrodite'
import Form from './Form'
import * as FormIcon from './ContactMeIcons'

const spyOnCheckIcon = jest.spyOn(FormIcon, 'CheckmarkIcon')

StyleSheetTestUtils.suppressStyleInjection()

describe('Form component test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<Form />)
    })

    it('Test 2 - Check component renders HTML & css elements correctly', () => {
        const { container } = render(<Form />)

        const section = container.querySelector('section')
        const sectionHeading = within(section).getByRole('heading')
        const form = container.querySelector('form')

        // Check HTML & CSS element presences
        expect(section).toBeInTheDocument();
        expect(form).toBeInTheDocument();
        expect(sectionHeading).toBeInTheDocument();
        expect(sectionHeading).toHaveTextContent('Get In Touch')


        // -------------------------------------- Check Inputs -----------------------------

        // Get Form's fields (inputs, textarea, button)
        const nameInp = within(form).getByPlaceholderText('Name')
        const emailInp = within(form).getByPlaceholderText('Email')
        const subjectInp = within(form).getByPlaceholderText('Subject')
        const messageInp = within(form).getByPlaceholderText('Message')
        const submitBtn = within(form).getByRole('button', { type: 'submit' })

        //Name input
        expect(nameInp).toHaveAttribute('name', 'name')
        expect(nameInp).toHaveAttribute('type', 'text')
        expect(nameInp).toHaveAttribute('required')

        // Email input
        expect(emailInp).toHaveAttribute('name', 'email')
        expect(emailInp).toHaveAttribute('type', 'email')
        expect(emailInp).toHaveAttribute('required')

        // Subject input
        expect(subjectInp).toHaveAttribute('name', 'subject');
        expect(subjectInp).toHaveAttribute('type', 'text')
        expect(subjectInp).toHaveAttribute('required')

        // Message textarea
        expect(messageInp).toHaveAttribute('name', 'message')
        expect(messageInp).toHaveAttribute('required')

        // -------------------------- CSS styles -------------------------------------
        expect(section).toHaveClass(/^sectionContainer_.+/)
        expect(sectionHeading).toHaveClass(/^formTitle_.+/)
        expect(form).toHaveClass(/^form_.+/)
        expect(nameInp).toHaveClass(/^formFields_.+/)
        expect(emailInp).toHaveClass(/^formFields_.+/)
        expect(subjectInp).toHaveClass(/^formFields_.+/)
        expect(messageInp).toHaveClass(/^formFields_.+/)
        expect(submitBtn).toHaveClass(/^formSubmitBtn/)
    })

    it('Test 3 - Check form submission and input values', async () => {
        const { container } = render(<Form />)
        const form = container.querySelector('form')

        // Get Form's fields (inputs, textarea, button)
        const nameInp = within(form).getByPlaceholderText('Name')
        const emailInp = within(form).getByPlaceholderText('Email')
        const subjectInp = within(form).getByPlaceholderText('Subject')
        const messageInp = within(form).getByPlaceholderText('Message')
        const submitBtn = within(form).getByRole('button', { type: 'submit' })

        // Simulate input
        fireEvent.change(nameInp, { target: { value: 'Mahmoud' } })
        fireEvent.change(emailInp, { target: { value: 'mahmoud@hotmail.com' } })
        fireEvent.change(subjectInp, { target: { value: 'Testing' } })
        fireEvent.change(messageInp, { target: { value: 'Testing Message' } })

        expect(nameInp.value).toBe('Mahmoud')
        expect(emailInp.value).toBe('mahmoud@hotmail.com');
        expect(subjectInp.value).toBe('Testing')
        expect(messageInp.value).toBe('Testing Message')

        // Submit the form
        fireEvent.click(submitBtn)
        
        // After submitting
        await waitFor(() => {
            expect(container.querySelector('section')).toHaveClass(/^sectionContainer_.+-submited_.+/)
            expect(spyOnCheckIcon).toHaveBeenCalled()
            expect(screen.getAllByRole('paragraph')).toHaveLength(2)
            expect(screen.getAllByRole('paragraph')[0]).toHaveTextContent('Thank you!')
            expect(screen.getAllByRole('paragraph')[1]).toHaveTextContent('Your submission has been sent')
        })
    })
})
