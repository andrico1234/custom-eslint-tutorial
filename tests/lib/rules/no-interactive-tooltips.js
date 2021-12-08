const rule = require("../../../lib/rules/no-interactive-tooltips.js");
const { RuleTester } = require("eslint");

const ruleTester = new RuleTester({
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015,
  },
});

ruleTester.run("no-interactive-tooltips", rule, {
  valid: [
    'html`<simba-tooltip><span slot="content"> Error! </span></simba-tooltip>`',
  ],
  invalid: [
    {
      code: "",
      errors: [
        {
          message: "",
        },
      ],
    },
  ],
});
