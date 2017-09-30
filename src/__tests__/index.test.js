import * as React from 'react';
import renderer from 'react-test-renderer';
import FigmaEmbed from '../index';

describe('FigmaEmbed', () => {
  it('renders the iframe correctly', () => {
    const tree = renderer
      .create(
        <FigmaEmbed url="https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File" />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
