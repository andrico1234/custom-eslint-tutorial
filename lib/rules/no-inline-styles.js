import { TemplateAnalyzer } from "../utils/index.js";

/**
 * @type {import('eslint').Rule.RuleModule}
 */
const rule = {
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
              const { attrs = [] } = elNode;
              const hasStyleAttr = attrs.some((attr) => attr.name === "style");

              if (hasStyleAttr) {
                context.report({
                  message: "no-inline-style",
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

export default rule;
