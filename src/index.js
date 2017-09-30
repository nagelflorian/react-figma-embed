// @flow

import * as React from 'react';

type Props = {
  url: string,
};

const FigmaEmbed = ({ url, ...props }: Props) => {
  const src = `https://www.figma.com/embed?embed_host=astra&url=${url}`;

  return (
    <iframe height="450" width="800" src={src} allowFullScreen {...props} />
  );
};

export default FigmaEmbed;
