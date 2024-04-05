const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");
const postcssJitProps = require('postcss-jit-props');
const oProps = require('@thewebforge/o-props-tokens');

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: false,
      features: {
        "custom-media-queries": true,
        "custom-selectors": true,
      },
    }),
    postcssJitProps(oProps),
    cssnano({
      preset: "default",
    }),
  ],
};
