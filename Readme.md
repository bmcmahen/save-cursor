
# save-cursor

  save and restore the cursor or selection

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/save-cursor

## Usage

```javascript
var cursor = require('save-cursor');

// save cursor
var range = cursor.save();

// restore cursor
cursor.restore(range);
```


## License

  MIT
