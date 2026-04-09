export type SVGOOptions = {
  plugins?: unknown[];
  [key: string]: unknown;
};

export type IconifyJSON = {
  prefix: string;
  icons: Record<string, unknown>;
  aliases?: Record<string, unknown>;
  [key: string]: unknown;
};

export type IntegrationOptions = {
  include?: Record<string, ["*"] | string[]>;
  /**
   * @default "src/icons"
   */
  iconDir?: string;
  /**
   * @default { plugins: ['preset-default'] }
   */
  svgoOptions?: SVGOOptions;
};
