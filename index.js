/* global process, Deno */

/**
 * @typedef Color
 * @property {string} open
 * @property {string} close
 * @property {RegExp} regexp
 */

/**
 * @typedef RGB
 * @property {number} r
 * @property {number} g
 * @property {number} b
 */

/**
 * True if `NO_COLOR` is set.
 * @see https://no-color.org/
 */
// @ts-expect-error Depends on environment.
export const noColor = !!process?.env?.NO_COLOR || !!Deno?.noColor;

let enabled = !noColor;

/**
 * Enable or disable terminal coloring.
 * @param {boolean} value Whether to enable color output.
 */
export function setColorEnabled(value) {
  enabled = !!value;
}

export function getColorEnabled() {
  return enabled;
}

/**
 * @private
 * @param {number[]} open
 * @param {number} close
 * @returns {Code}
 */
function code(open, close) {
  return {
    open: `\x1b[${open.join(';')}m`,
    close: `\x1b[${close}m`,
    regexp: new RegExp(`\\x1b\\[${close}m`, 'g'),
  };
}

/**
 * @private
 * @param {string} str
 * @param {Code} code
 * @returns {string}
 */
function run(str, code) {
  return enabled ? `${code.open}${str.replace(code.regexp, code.open)}${code.close}` : str;
}

/**
 * Reset color.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function reset(str) {
  return run(str, code([ 0 ], 0));
}

/**
 * Make str bold.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bold(str) {
  return run(str, code([ 1 ], 22));
}

/**
 * Dim str.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function dim(str) {
  return run(str, code([ 2 ], 22));
}

/**
 * Make str italic.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function italic(str) {
  return run(str, code([ 3 ], 23));
}

/**
 * Underline str.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function underline(str) {
  return run(str, code([ 4 ], 24));
}

/**
 * Invert the color of str.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function inverse(str) {
  return run(str, code([ 7 ], 27));
}

/**
 * Hide str.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function hidden(str) {
  return run(str, code([ 8 ], 28));
}

/**
 * Strike str.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function strikethrough(str) {
  return run(str, code([ 9 ], 29));
}

/**
 * Make str black.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function black(str) {
  return run(str, code([ 30 ], 39));
}

/**
 * Make str red.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function red(str) {
  return run(str, code([ 31 ], 39));
}

/**
 * Make str green.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function green(str) {
  return run(str, code([ 32 ], 39));
}

/**
 * Make str yellow.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function yellow(str) {
  return run(str, code([ 33 ], 39));
}

/**
 * Make str blue.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function blue(str) {
  return run(str, code([ 34 ], 39));
}

/**
 * Make str magenta.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function magenta(str) {
  return run(str, code([ 35 ], 39));
}

/**
 * Make str cyan.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function cyan(str) {
  return run(str, code([ 36 ], 39));
}

/**
 * Make str white.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function white(str) {
  return run(str, code([ 37 ], 39));
}

/**
 * Make str gray.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function gray(str) {
  return brightBlack(str);
}

/**
 * Make str bright black.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightBlack(str) {
  return run(str, code([ 90 ], 39));
}

/**
 * Make str bright red.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightRed(str) {
  return run(str, code([ 91 ], 39));
}

/**
 * Make str bright rgeen.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightGreen(str) {
  return run(str, code([ 92 ], 39));
}

/**
 * Make str bright yellow.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightYellow(str) {
  return run(str, code([ 93 ], 39));
}

/**
 * Make str bright blue.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightBlue(str) {
  return run(str, code([ 94 ], 39));
}

/**
 * Make str bright magenta.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightMagenta(str) {
  return run(str, code([ 95 ], 39));
}

/**
 * Make str bright cyan.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightCyan(str) {
  return run(str, code([ 96 ], 39));
}

/**
 * Make str bright white.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightWhite(str) {
  return run(str, code([ 97 ], 39));
}

/**
 * Give str a black background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBlack(str) {
  return run(str, code([ 40 ], 49));
}

/**
 * Give str a red background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgRed(str) {
  return run(str, code([ 41 ], 49));
}

/**
 * Give str a green background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgGreen(str) {
  return run(str, code([ 42 ], 49));
}

/**
 * Give str a yellow background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgYellow(str) {
  return run(str, code([ 43 ], 49));
}

/**
 * Give str a blue background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBlue(str) {
  return run(str, code([ 44 ], 49));
}

/**
 * Give str a magenta background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgMagenta(str) {
  return run(str, code([ 45 ], 49));
}

/**
 * Give str a cyan background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgCyan(str) {
  return run(str, code([ 46 ], 49));
}

/**
 * Give str a white background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgWhite(str) {
  return run(str, code([ 47 ], 49));
}

/**
 * Give str a bright black background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightBlack(str) {
  return run(str, code([ 100 ], 49));
}

/**
 * Give str a bright red background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightRed(str) {
  return run(str, code([ 101 ], 49));
}

/**
 * Give str a bright green background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightGreen(str) {
  return run(str, code([ 102 ], 49));
}

/**
 * Give str a bright yellow background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightYellow(str) {
  return run(str, code([ 103 ], 49));
}

/**
 * Give str a bright blue background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightBlue(str) {
  return run(str, code([ 104 ], 49));
}

/**
 * Give str a bright magenta background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightMagenta(str) {
  return run(str, code([ 105 ], 49));
}

/**
 * Give str a bright cyan background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightCyan(str) {
  return run(str, code([ 106 ], 49));
}

/**
 * Give str a bright white background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightWhite(str) {
  return run(str, code([ 107 ], 49));
}

/**
 * @private
 * @param {number} n
 * @param {number} max
 * @param {number} min
 * @returns {number}
 */
function clampAndTruncate(n, max = 255, min = 0) {
  return Math.trunc(Math.max(Math.min(n, max), min));
}

/**
 * Set str's color using paletted 8-bit colors.
 * @see https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit
 *
 * @param {string} str String to color.
 * @param {number} color 8-bit RGB color
 * @returns Colored string.
 */
export function rgb8(str, color) {
  return run(str, code([ 38, 5, clampAndTruncate(color) ], 39));
}

/**
 * Set str's background color using paletted 8-bit colors.
 * @see https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit
 *
 * @param {string} str String to color.
 * @param {number} color 8-bit RGB color
 * @returns Colored string.
 */
export function bgRgb8(str, color) {
  return run(str, code([ 48, 5, clampAndTruncate(color) ], 49));
}

/**
 * Set str's color using paletted 8-bit colors.
 * @see https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit
 *
 * @param {string} str String to color.
 * @param {number | RGB} color 8-bit RGB color
 * @returns Colored string.
 */
export function rgb24(str, color) {
  if (typeof color === 'number') {
    return run(
      str,
      code([ 38, 2, (color >> 16) & 0xff, (color >> 8) & 0xff, color & 0xff ], 39)
    );
  }
  return run(
    str,
    code(
      [
        38,
        2,
        clampAndTruncate(color.r),
        clampAndTruncate(color.g),
        clampAndTruncate(color.b),
      ],
      39
    )
  );
}

/**
 * Set str's background using paletted 24-bit colors.
 * @see https://en.wikipedia.org/wiki/ANSI_escape_code#24-bit
 *
 * @param {string} str String to color.
 * @param {number | RGB} color 24-bit RGB color
 * @returns Colored string.
 */
export function bgRgb24(str, color) {
  if (typeof color === 'number') {
    return run(
      str,
      code([ 48, 2, (color >> 16) & 0xff, (color >> 8) & 0xff, color & 0xff ], 49)
    );
  }
  return run(
    str,
    code(
      [
        48,
        2,
        clampAndTruncate(color.r),
        clampAndTruncate(color.g),
        clampAndTruncate(color.b),
      ],
      49
    )
  );
}

// https://github.com/chalk/ansi-regex/blob/02fa893d619d3da85411acc8fd4e2eea0e95a9d9/index.js
const ANSI_PATTERN = new RegExp(
  [
    '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
    '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))',
  ].join('|'),
  'g'
);

/**
 * Remove all colors and decorations from str.
 *
 * @param {string} str String to uncolor.
 * @returns Uncolored string.
 */
export function stripColor(str) {
  return str.replace(ANSI_PATTERN, '');
}
