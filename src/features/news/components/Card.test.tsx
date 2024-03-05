import React, {ComponentProps} from 'react';
import {render} from '@testing-library/react-native';
import {Card} from './Card';
import {expectTextToBePresent} from '../../../common/components';

const baseProps: ComponentProps<typeof Card> = {
  article: {
    price: '123',
    title: 'title',
    images: [
      {
        thumbnail: 'thumbnail',
        large: 'large',
      },
    ],

    categories: [{title: 'category'}],
    quantity: 123,
  },
};

it('should render correct values', () => {
  render(<Card {...baseProps} />);
  expectTextToBePresent('card-title', {text: baseProps.article.title});
  expectTextToBePresent('card-price', {text: baseProps.article.price});
});
