import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserModal from '../../components/modals/UserModal';

const mockFn = jest.fn();

describe('Form', () => {
	describe('should render the form names', () => {
		it('should read the screen for form names', () => {
			render(<UserModal handleUserData={mockFn} />);
			const input = screen.getByTestId('firstNameInput');
			const button = screen.getByRole('button');
      fireEvent.change(input, { target: { value: 'Firstname'}})
      expect(input.value).toBe('FirstName')
      fireEvent.click(button)
      expect(mockFn).toBeCalled()
		});
	});
});
