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
    'html`<simba-tooltip><span slot="content"></span></simba-tooltip>`',
    'html`<simba-tooltip><span slot="content"><p>Error!</p></span></simba-tooltip>`',
    'html`<simba-tooltip><span slot="content"><ul><li>Error!</li></ul></span></simba-tooltip>`',
  ],
  invalid: [
    {
      code: 'html`<simba-tooltip><span slot="content"><button> Error! </button></span></simba-tooltip>`',
      errors: [
        {
          message: "no-interactive-tooltips",
        },
      ],
    },
    {
      code: 'html`<simba-tooltip><span slot="content"><div><button> Error! </button></div></span></simba-tooltip>`',
      errors: [
        {
          message: "no-interactive-tooltips",
        },
      ],
    },
    {
      code: 'html`<simba-tooltip><span slot="content"><div tabindex="1"> Error! </div></span></simba-tooltip>`',
      errors: [
        {
          message: "no-interactive-tooltips",
        },
      ],
    },
    {
      code: 'html`<simba-tooltip><span slot="content"><div><div tabindex="1"> Error! </div><div></span></simba-tooltip>`',
      errors: [
        {
          message: "no-interactive-tooltips",
        },
      ],
    },
  ],
});
