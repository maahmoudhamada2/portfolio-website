import { render } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import ContactMe from './ContactMe';

StyleSheetTestUtils.suppressStyleInjection();

describe('ContactMe componenet test suites', () => {
    it('Test 1 - Check component renders without crashing', () => {
        render(<ContactMe />);
    })
})
