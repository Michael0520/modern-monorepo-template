// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { SectionCards } from '../components/section-cards';

test('renders section cards', () => {
  render(<SectionCards />);
  expect(screen.getByText('Total Revenue')).toBeInTheDocument();
});
