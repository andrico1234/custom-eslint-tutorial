const rule = require("../../../lib/rules/no-inline-styles");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015,
  },
});

ruleTester.run("no-inline-styles", rule, {
  valid: [
    'html`<div class="fake-name"></div>`',
    "html`<div></div>`",
    "styled`<div style=''></div>`",
  ],
  invalid: [
    {
      code: 'html`<div style=""></div>`;',
      errors: [
        {
          message: "no-inline-style",
        },
      ],
    },
    {
      code: 'html`<div style="display:none;"></div>`',
      errors: [
        {
          message: "no-inline-style",
        },
      ],
    },
    {
      code: 'html`<div style="${val}""></div>`',
      errors: [
        {
          message: "no-inline-style",
        },
      ],
    },
  ],
});
