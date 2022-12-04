import React from 'react';
import { render } from '@testing-library/react';

import { CardInfo } from 'src/components/CardInfo/CardInfo'

describe('CardInfo', () => {
  it('should be able to render CardInfo', () => {
    const prop = {
      cards: [
        {
          title: 'Hiago',
          description: 'descrição',
          thumbnail: {
            path: 'path',
            extension: 'jpg',
          },
        },
        {
          title: 'Hiago Lincon',
          description: 'descrição 2',
          thumbnail: {
            path: 'path',
            extension: 'jpg',
          },
        },
      ],
    };
    const { getAllByTestId } = render(<CardInfo {...prop} />);

    const card = getAllByTestId('card');

    expect(card.length).not.toEqual(0);
  });
});