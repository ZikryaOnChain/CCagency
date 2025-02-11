import { render, screen } from '@testing-library/react';
import ComingSoon from './ComingSoon';

describe('ComingSoon', () => {
  test('renders coming soon heading', () => {
    render(<ComingSoon />);
    const headingElement = screen.getByText(/coming soon/i);
    expect(headingElement).toBeInTheDocument();
  });
}); 