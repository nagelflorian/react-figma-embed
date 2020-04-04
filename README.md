# react-figma-embed [![CircleCI](https://circleci.com/gh/nagelflorian/react-figma-embed/tree/master.svg?style=svg)](https://circleci.com/gh/nagelflorian/react-figma-embed/tree/master) [![npm](https://img.shields.io/npm/v/react-figma-embed.svg)](https://www.npmjs.com/package/react-figma-embed) [![Maintainability](https://api.codeclimate.com/v1/badges/b6e196dcd12a5f11c88f/maintainability)](https://codeclimate.com/github/nagelflorian/react-figma-embed/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/b6e196dcd12a5f11c88f/test_coverage)](https://codeclimate.com/github/nagelflorian/react-figma-embed/test_coverage)

React component to render [Figma live embeds](https://www.figma.com/platform).

## Install

```console
npm install react-figma-embed --save
```

## Quick start

```js
import React, { Component } from 'react';
import { render } from 'react-dom';
import FigmaEmbed from 'react-figma-embed';

class App extends Component {
  render() {
    return (
      <FigmaEmbed url="https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File" />
    );
  }
}

render(<App />, document.getElementById('app'));
```
