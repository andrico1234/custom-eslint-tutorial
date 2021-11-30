import { TemplateAnalyzer } from "../utils/index.js";

/**
 * @type {import('eslint').Rule.RuleModule}
 */
const rule = {
  meta: {
    type: "suggestion",
  },
  create: function (context) {
    return {};
  },
};

export default rule