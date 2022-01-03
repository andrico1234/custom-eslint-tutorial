const { parseFragment } = require("parse5");

class TemplateAnalyzer {
  /**
   * @type {import('parse5'.DocumentFragment)}
   */
  _ast = null;

  /**
   * Instantiates our TemplateAnalyzer
   *
   * @param {import("estree").TaggedTemplateExpression} node
   */
  constructor(node) {
    const html = this.templateExpressionToHtml(node);

    this._ast = parseFragment(html);
  }

  /**
   * Converts a JavaScript expression into an HTML string
   *
   * @param {import("estree").TaggedTemplateExpression} node
   * @return {string}
   */
  templateExpressionToHtml(node) {
    let value = "";

    const quasiLength = node.quasi.quasis.length;

    for (let i = 0; i < quasiLength; i++) {
      const quasi = node.quasi.quasis[i];
      const expression = node.quasi.expressions[i];

      value += quasi.value.raw;

      if (expression) {
        value += `{{__Q:${i}__}`;
      }
    }

    return value;
  }

  traverse(visitors) {
    const visit = (parentNode) => {
      if (!parentNode) return;

      if (this.isElement(parentNode)) {
        visitors.element(parentNode);
      }

      if (parentNode.childNodes?.length) {
        parentNode.childNodes.forEach((node) => {
          visit(node);
        });
      }
    };

    visit(this._ast);
  }

  /**
   *
   * @param {import("parse5").Element} node
   * @returns {boolean}
   */
  isElement(node) {
    return !!node.tagName;
  }
}

exports.TemplateAnalyzer = TemplateAnalyzer;
