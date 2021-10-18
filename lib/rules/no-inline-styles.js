const { TemplateAnalyzer } = require("../utils");

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
            enter(node) {
              console.log("hallloww");
            },
          });
        }
      },
    };
  },
};
