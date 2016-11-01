# observ-trend
Observ value returning -1, 0, or 1 depending on the trend of another value

## Installation
`npm install observ-trend`

## Usage
```js
var Trend = require('observ-trend');
var Value = require('observ');

var val = Value(1);
var trend = Trend(val);

trend(onChange);
console.log('Current trend: ', trend());
```

## Contributing
`npm run test`

# License
MIT
