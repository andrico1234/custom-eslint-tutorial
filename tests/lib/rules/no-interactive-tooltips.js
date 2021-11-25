const rule = require("../../../lib/rules/no-interactive-tooltips");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015,
  },
});

ruleTester.run("no-interactive-tooltips", rule, {
  valid: [],
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
