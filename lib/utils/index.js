const { parseFragment } = require("parse5");

class TemplateAnalyzer {
  _ast = null;

  /**
   * Instantiates our TemplateAnalyzer
   *
   * @param {import("estree").TaggedTemplateExpression} node
   */
  constructor(node) {
    const html = this.taggedTemplateToHtml(node);

    this._ast = parseFragment(html);
  }

  /**
   * Converts a JavaScript expression into an HTML string
   *
   * @param {import("estree").TaggedTemplateExpression} node
   * @return {string}
   */
  taggedTemplateToHtml(node) {
    const value = node.quasi.quasis[0].value.raw;
    // TODO: replace placeholders with corresponding expressions
    return value;
  }
}

exports.TemplateAnalyzer = TemplateAnalyzer;
