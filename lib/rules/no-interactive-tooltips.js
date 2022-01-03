const { TemplateAnalyzer } = require("../utils/index.js");

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: "suggestion",
  },
  create: function (context) {
    return {
      TaggedTemplateExpression: (node) => {
        const isLitExpression = node.tag.name === "html";

        if (isLitExpression) {
          const analyzer = new TemplateAnalyzer(node);

          analyzer.traverse({
            element(elNode) {},
          });
        }
      },
    };
  },
};
