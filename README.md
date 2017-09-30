# react-figma-embed [![CircleCI](https://circleci.com/gh/nagelflorian/react-figma-embed/tree/master.svg?style=svg)](https://circleci.com/gh/nagelflorian/react-figma-embed/tree/master) [![npm](https://img.shields.io/npm/v/react-figma-embed.svg)](https://www.npmjs.com/package/react-figma-embed)

React component to render [Figma live embeds](https://www.figma.com/platform).

## Install

```
npm install react-figma-embed --save
```

## Quick start

```js
import React, { Component } from 'react';
import { render } from 'react-dom';
import FigmaEmbed from 'react-figma-embed';

class App extends Component {
  render() {
    return <FigmaEmbed
      url="https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File" />;
  }
}

render(<App />, document.getElementById('app'));
```
