const { TemplateAnalyzer } = require("../utils/index.js");

const INTERACTIVE_ELEMENTS = ["textarea", "a", "button", "input", "select"];

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
            element(elNode) {
              if (INTERACTIVE_ELEMENTS.includes(elNode.nodeName)) {
                context.report({
                  message: "no-interactive-tooltips",
                  node,
                });
              }
              const { attrs = [] } = elNode;

              const hasTabIndexAttr = attrs.some(
                (attr) => attr.name === "tabindex" && attr.value > -1
              );

              if (hasTabIndexAttr) {
                context.report({
                  message: "no-interactive-tooltips",
                  node,
                });
              }
            },
          });
        }
      },
    };
  },
};
