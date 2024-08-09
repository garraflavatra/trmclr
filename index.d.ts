/**
 * Enable or disable terminal coloring.
 * @param {boolean} value Whether to enable color output.
 */
export function setColorEnabled(value: boolean): void;
export function getColorEnabled(): boolean;
/**
 * Reset color.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function reset(str: string): string;
/**
 * Make str bold.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bold(str: string): string;
/**
 * Dim str.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function dim(str: string): string;
/**
 * Make str italic.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function italic(str: string): string;
/**
 * Underline str.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function underline(str: string): string;
/**
 * Invert the color of str.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function inverse(str: string): string;
/**
 * Hide str.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function hidden(str: string): string;
/**
 * Strike str.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function strikethrough(str: string): string;
/**
 * Make str black.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function black(str: string): string;
/**
 * Make str red.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function red(str: string): string;
/**
 * Make str green.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function green(str: string): string;
/**
 * Make str yellow.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function yellow(str: string): string;
/**
 * Make str blue.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function blue(str: string): string;
/**
 * Make str magenta.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function magenta(str: string): string;
/**
 * Make str cyan.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function cyan(str: string): string;
/**
 * Make str white.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function white(str: string): string;
/**
 * Make str gray.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function gray(str: string): string;
/**
 * Make str bright black.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightBlack(str: string): string;
/**
 * Make str bright red.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightRed(str: string): string;
/**
 * Make str bright rgeen.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightGreen(str: string): string;
/**
 * Make str bright yellow.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightYellow(str: string): string;
/**
 * Make str bright blue.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightBlue(str: string): string;
/**
 * Make str bright magenta.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightMagenta(str: string): string;
/**
 * Make str bright cyan.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightCyan(str: string): string;
/**
 * Make str bright white.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function brightWhite(str: string): string;
/**
 * Give str a black background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBlack(str: string): string;
/**
 * Give str a red background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgRed(str: string): string;
/**
 * Give str a green background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgGreen(str: string): string;
/**
 * Give str a yellow background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgYellow(str: string): string;
/**
 * Give str a blue background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBlue(str: string): string;
/**
 * Give str a magenta background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgMagenta(str: string): string;
/**
 * Give str a cyan background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgCyan(str: string): string;
/**
 * Give str a white background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgWhite(str: string): string;
/**
 * Give str a bright black background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightBlack(str: string): string;
/**
 * Give str a bright red background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightRed(str: string): string;
/**
 * Give str a bright green background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightGreen(str: string): string;
/**
 * Give str a bright yellow background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightYellow(str: string): string;
/**
 * Give str a bright blue background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightBlue(str: string): string;
/**
 * Give str a bright magenta background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightMagenta(str: string): string;
/**
 * Give str a bright cyan background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightCyan(str: string): string;
/**
 * Give str a bright white background.
 * @param {string} str String to color.
 * @returns Colored string.
 */
export function bgBrightWhite(str: string): string;
/**
 * Set str's color using paletted 8-bit colors.
 * @see https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit
 *
 * @param {string} str String to color.
 * @param {number} color 8-bit RGB color
 * @returns Colored string.
 */
export function rgb8(str: string, color: number): string;
/**
 * Set str's background color using paletted 8-bit colors.
 * @see https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit
 *
 * @param {string} str String to color.
 * @param {number} color 8-bit RGB color
 * @returns Colored string.
 */
export function bgRgb8(str: string, color: number): string;
/**
 * Set str's color using paletted 8-bit colors.
 * @see https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit
 *
 * @param {string} str String to color.
 * @param {number | RGB} color 8-bit RGB color
 * @returns Colored string.
 */
export function rgb24(str: string, color: number | RGB): string;
/**
 * Set str's background using paletted 24-bit colors.
 * @see https://en.wikipedia.org/wiki/ANSI_escape_code#24-bit
 *
 * @param {string} str String to color.
 * @param {number | RGB} color 24-bit RGB color
 * @returns Colored string.
 */
export function bgRgb24(str: string, color: number | RGB): string;
/**
 * Remove all colors and decorations from str.
 *
 * @param {string} str String to uncolor.
 * @returns Uncolored string.
 */
export function stripColor(str: string): string;
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
export const noColor: boolean;
export type Color = {
    open: string;
    close: string;
    regexp: RegExp;
};
export type RGB = {
    r: number;
    g: number;
    b: number;
};
