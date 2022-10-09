// This has been vendored from the Deno standard library and ported to Node.js.
// https://github.com/denoland/deno_std/blob/0.159.0/fmt/colors.ts

declare const process:
  | {
      env?: {
        NO_COLOR?: boolean;
      };
    }
  | undefined;

declare const Deno:
  | {
      noColor: boolean;
    }
  | undefined;

interface Code {
  open: string;
  close: string;
  regexp: RegExp;
}

interface Rgb {
  r: number;
  g: number;
  b: number;
}

const noColor = !!process?.env?.NO_COLOR || !!Deno?.noColor;
let enabled = !noColor;

export function setColorEnabled(value: boolean) {
  if (noColor) {
    return;
  }

  enabled = value;
}

export function getColorEnabled(): boolean {
  return enabled;
}

function code(open: number[], close: number): Code {
  return {
    open: `\x1b[${open.join(';')}m`,
    close: `\x1b[${close}m`,
    regexp: new RegExp(`\\x1b\\[${close}m`, 'g'),
  };
}

function run(str: string, code: Code): string {
  return enabled
    ? `${code.open}${str.replace(code.regexp, code.open)}${code.close}`
    : str;
}

export function reset(str: string): string {
  return run(str, code([0], 0));
}

export function bold(str: string): string {
  return run(str, code([1], 22));
}

export function dim(str: string): string {
  return run(str, code([2], 22));
}

export function italic(str: string): string {
  return run(str, code([3], 23));
}

export function underline(str: string): string {
  return run(str, code([4], 24));
}

export function inverse(str: string): string {
  return run(str, code([7], 27));
}

export function hidden(str: string): string {
  return run(str, code([8], 28));
}

export function strikethrough(str: string): string {
  return run(str, code([9], 29));
}

export function black(str: string): string {
  return run(str, code([30], 39));
}

export function red(str: string): string {
  return run(str, code([31], 39));
}

export function green(str: string): string {
  return run(str, code([32], 39));
}

export function yellow(str: string): string {
  return run(str, code([33], 39));
}

export function blue(str: string): string {
  return run(str, code([34], 39));
}

export function magenta(str: string): string {
  return run(str, code([35], 39));
}

export function cyan(str: string): string {
  return run(str, code([36], 39));
}

export function white(str: string): string {
  return run(str, code([37], 39));
}

export function gray(str: string): string {
  return brightBlack(str);
}

export function brightBlack(str: string): string {
  return run(str, code([90], 39));
}

export function brightRed(str: string): string {
  return run(str, code([91], 39));
}

export function brightGreen(str: string): string {
  return run(str, code([92], 39));
}

export function brightYellow(str: string): string {
  return run(str, code([93], 39));
}

export function brightBlue(str: string): string {
  return run(str, code([94], 39));
}

export function brightMagenta(str: string): string {
  return run(str, code([95], 39));
}

export function brightCyan(str: string): string {
  return run(str, code([96], 39));
}

export function brightWhite(str: string): string {
  return run(str, code([97], 39));
}

export function bgBlack(str: string): string {
  return run(str, code([40], 49));
}

export function bgRed(str: string): string {
  return run(str, code([41], 49));
}

export function bgGreen(str: string): string {
  return run(str, code([42], 49));
}

export function bgYellow(str: string): string {
  return run(str, code([43], 49));
}

export function bgBlue(str: string): string {
  return run(str, code([44], 49));
}

export function bgMagenta(str: string): string {
  return run(str, code([45], 49));
}

export function bgCyan(str: string): string {
  return run(str, code([46], 49));
}

export function bgWhite(str: string): string {
  return run(str, code([47], 49));
}

export function bgBrightBlack(str: string): string {
  return run(str, code([100], 49));
}

export function bgBrightRed(str: string): string {
  return run(str, code([101], 49));
}

export function bgBrightGreen(str: string): string {
  return run(str, code([102], 49));
}

export function bgBrightYellow(str: string): string {
  return run(str, code([103], 49));
}

export function bgBrightBlue(str: string): string {
  return run(str, code([104], 49));
}

export function bgBrightMagenta(str: string): string {
  return run(str, code([105], 49));
}

export function bgBrightCyan(str: string): string {
  return run(str, code([106], 49));
}

export function bgBrightWhite(str: string): string {
  return run(str, code([107], 49));
}

function clampAndTruncate(n: number, max = 255, min = 0): number {
  return Math.trunc(Math.max(Math.min(n, max), min));
}

export function rgb8(str: string, color: number): string {
  return run(str, code([38, 5, clampAndTruncate(color)], 39));
}

export function bgRgb8(str: string, color: number): string {
  return run(str, code([48, 5, clampAndTruncate(color)], 49));
}

export function rgb24(str: string, color: number | Rgb): string {
  if (typeof color === 'number') {
    return run(
      str,
      code([38, 2, (color >> 16) & 0xff, (color >> 8) & 0xff, color & 0xff], 39)
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

export function bgRgb24(str: string, color: number | Rgb): string {
  if (typeof color === 'number') {
    return run(
      str,
      code([48, 2, (color >> 16) & 0xff, (color >> 8) & 0xff, color & 0xff], 49)
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

export function stripColor(string: string): string {
  return string.replace(ANSI_PATTERN, '');
}
