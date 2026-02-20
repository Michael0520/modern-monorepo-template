// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import App from '../App';

test('renders heading', () => {
  render(<App />);
  expect(screen.getByText('Modern Monorepo Template')).toBeInTheDocument();
});
