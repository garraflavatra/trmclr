# trmclr

- Easy terminal colors, ported from the Deno standard library.
- Supports Node.js, browsers, Deno, and probably some other environments.
- Comes with 45 colors and helpers.
- Respects [`NO_COLOR`](http://no-color.org/).
- No dependencies.
- Allows for tree-shaking.

## Colors and helpers

bgBlack, bgBlue, bgBrightBlack, bgBrightBlue, bgBrightCyan, bgBrightGreen, bgBrightMagenta, bgBrightRed, bgBrightWhite, bgBrightYellow, bgCyan, bgGreen, bgMagenta, bgRed, bgRgb24, bgRgb8, bgWhite, bgYellow, black, blue, bold, brightBlack, brightBlue, brightCyan, brightGreen, brightMagenta, brightRed, brightWhite, brightYellow, cyan, dim, getColorEnabled, gray, green, hidden, inverse, italic, magenta, red, reset, strikethrough, stripColor, underline, white, yellow

## Usage

```js
import { cyan, bgMagenta } from 'trmcrl';

console.log(cyan(bgMagenta('Some text')));
```

## Enable or disable color

By using `setColorEnabled(true)` or `setColorEnabled(false)` you can respectively enable and disable color output. Use `getColorEnabled()` to retrieve the current state.

## License

MIT
