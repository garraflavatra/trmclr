# trmclr

Easy terminal colors.

- Supports browsers, [Node.js](https://nodejs.org), [Deno](https://deno.com), [Bun](https://bun.sh), and probably some other environments.
- Comes with 45 colors and helpers.
- Respects [`NO_COLOR`](http://no-color.org/).
- No dependencies.
- Tree-shakeable.

## Colors and helpers

bgBlack, bgBlue, bgBrightBlack, bgBrightBlue, bgBrightCyan, bgBrightGreen, bgBrightMagenta, bgBrightRed, bgBrightWhite, bgBrightYellow, bgCyan, bgGreen, bgMagenta, bgRed, bgRgb24, bgRgb8, bgWhite, bgYellow, black, blue, bold, brightBlack, brightBlue, brightCyan, brightGreen, brightMagenta, brightRed, brightWhite, brightYellow, cyan, dim, getColorEnabled, gray, green, hidden, inverse, italic, magenta, red, reset, strikethrough, stripColor, underline, white, yellow

## Usage

```js
import { cyan, bgMagenta } from 'trmclr';

console.log(cyan(bgMagenta('Some text')));
```

## Enable or disable color

By using `setColorEnabled(true)` or `setColorEnabled(false)` you can respectively enable and disable color output. Use `getColorEnabled()` to retrieve the current state.

## License

(c) 2022-2024 [Romein van Buren](mailto:romein@vburen.nl). Licensed under the MIT license.

For the full copyright and license information, please see the [`LICENSE.md`](./LICENSE.md) file that was distributed with this source code.

Original implementation: (c) 2018-2022 [the Deno authors](https://github.com/denoland/std/blob/0.159.0/fmt/colors.ts).

[![Smart Yellow](https://code.smartyellow.net/smartyellow/meta/raw/branch/main/logo.png)](https://www.smartyellow.nl)
