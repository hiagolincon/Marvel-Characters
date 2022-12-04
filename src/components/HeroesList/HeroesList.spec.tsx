import { render, waitFor } from '@testing-library/react';

import { HeroesList } from 'src/components/HeroesList/HeroesList';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => jest.fn(),
  };
});

describe('Hero Component', () => {
  it('should be render Hero', () => {
    const { queryByTestId } = render(<HeroesList />);
    const hero = queryByTestId('hero');
    waitFor(() => expect(hero).toBeInTheDocument());
  });
});
