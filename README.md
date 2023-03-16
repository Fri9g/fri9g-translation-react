# fri9g-translation-react

> created by Fri9g for translating website

[![NPM](https://img.shields.io/npm/v/fri9g-translation-react.svg)](https://www.npmjs.com/package/fri9g-translation-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save fri9g-translation-react
```

## Usage

```jsx
import React from 'react'

import { FLC, FLT } from 'fri9g-translation-react'
const FTR = require('./assets/FTR.json') //Json with the translation object
import 'fri9g-translation-react/dist/index.css'

const Example = (props) => {
  const FLCV = {
    "lang":"en",
    FTR
  }
  return( 
    <FLC.Provider value={FLCV}>
      <h1><FLT FLK="test"/></h1>
    </FLC.Provider>
  )
}
```

## License

MIT © [Fri9g](https://github.com/Fri9g)
