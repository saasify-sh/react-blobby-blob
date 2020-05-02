<p align="center">
  <a href="https://saasify-sh.github.io/react-blobby-blob/" title="Saasify">
    <img src="https://raw.githubusercontent.com/saasify-sh/react-blobby-blob/master/media/blob.jpg" alt="React Blobby Blob" width="422" />
  </a>
</p>

# react-blobby-blob

> Blobby blobby blobs for React. ([demo](https://saasify-sh.github.io/react-blobby-blob/))

[![NPM](https://img.shields.io/npm/v/react-blobby-blob.svg)](https://www.npmjs.com/package/react-blobby-blob) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This blob effect was originally created for [Saasify](https://saasify.sh).

## Install

```bash
npm install --save react-blobby-blob
```

## Usage

```jsx
import React from 'react'

import { Blob } from 'react-blobby-blob'
import 'react-blobby-blob/dist/index.css'

export () => (
  <Blob />
)
```

## Animations

By default, the blob responds to clicks by randomly generating new control points around a rectangle and morphing to the new blob svg. You can control this behavior by setting `interactive` to `false` or changing the default `duration` of `150` ms.

<p align="center">
  <a href="https://saasify-sh.github.io/react-blobby-blob/" title="Saasify">
    <img src="https://raw.githubusercontent.com/saasify-sh/react-blobby-blob/master/media/blob.gif" alt="React Blobby Blob" width="422" />
  </a>
</p>

## License

MIT © [Saasify](https://saasify.sh)
