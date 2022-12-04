import React from 'react';
import { render, waitFor } from '@testing-library/react';


import { HeroesList } from 'src/components/HeroesList/HeroesList'
import api from 'src/services/api';
import '@testing-library/jest-dom/extend-expect';


import MockAdapter from 'axios-mock-adapter';

const apiMock = new MockAdapter(api);

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => jest.fn(),
  };
});

describe('Hero Component', () => {
  it('should be able to make a call', async () => {
    const listCharacters = {
      count: 10,
      limit: 10,
      offset: 0,
      results: [{ id: 1011334, name: '3-D Man', description: '' }],
      total: 1493,
    };
    apiMock.onGet('/characters?limit=10&offset=0').reply(200, listCharacters);
    const response = await api.get(`/characters?limit=10&offset=0`);
    expect(response.data).toEqual(listCharacters);
  });
  
  it('should be render Hero', () => {
    const { queryByTestId } = render(<HeroesList />);
    const hero = queryByTestId('hero');
    waitFor(() => expect(hero).toBeInTheDocument());
  });
});
