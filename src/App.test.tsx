import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
	it('renders without errors and fetches the data', async () => {
		render(<App />);
		await waitFor(() => {
			const elem1 = screen.getAllByText('European Quest');
			const elem2 = screen.getAllByText('Autumn Roadtrip');
			const elem3 = screen.getAllByText('Diving in Egypt');

			expect(elem1.length).toBeGreaterThan(0);
			expect(elem2.length).toBeGreaterThan(0);
			expect(elem3.length).toBeGreaterThan(0);
		});
	});
});
