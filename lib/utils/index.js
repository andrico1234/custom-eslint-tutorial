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
    const value = node.quasi.quasis[0].value.raw;
    // TODO: replace placeholders with corresponding expressions
    return value;
  }

  traverse(visitors) {
    const visit = (parentNode) => {
      if (!parentNode) return;

      console.log("allo");

      console.log("isdoc", this.isElement);

      if (this.isDocumentFragment(parentNode)) {
        visitors.documentFragment(parentNode);
      } else if (this.isElement(parentNode)) {
        visitors.element(parentNode);
      }

      if (parentNode.childNodes.length) {
        parentNode.childNodes.forEach((node) => {
          visit(node);
        });
      }
    };

    visit(this._ast);
  }

  /**
   *
   * @param {import("parse5").DocumentFragment} node
   * @returns {boolean}
   */
  isDocumentFragment(node) {
    console.log(node);
    return node.type === "root";
  }

  /**
   *
   * @param {import("parse5").Element} node
   * @returns {boolean}
   */
  isElement(node) {
    return false;
  }
}

exports.TemplateAnalyzer = TemplateAnalyzer;
