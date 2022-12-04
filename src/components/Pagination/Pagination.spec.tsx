import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import { Pagination } from 'src/components/Pagination/Pagination'

const mockedHandlePage = jest.fn();

jest.mock('react-router-dom');

jest.mock('src/utils/paginationHelpers', () => {
  return {
    fetchPageNumbers: () => ['LEFT', 'RIGHT', 1],
  };
});

jest.mock('src/context/context', () => {
    return {
      useList: () => ({
        pagination: {
          totalPages: 150,
        },
        setOffset: jest.fn()
      }),
    };
  });
  
describe('Pagination Component', () => {
  it('should be able to render Pagination', () => {
    const { getAllByTestId } = render(<Pagination />);
    const paginate = getAllByTestId('paginate');
    expect(paginate.length).not.toEqual(0);
  });
});
