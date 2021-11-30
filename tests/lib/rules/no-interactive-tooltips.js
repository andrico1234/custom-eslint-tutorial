import rule from "../../../lib/rules/no-interactive-tooltips.js";
import { RuleTester } from "eslint";

import core from "@divriots/starter-simba/core/index.js";
import "@divriots/starter-simba/tooltip/simba-tooltip.js";

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
