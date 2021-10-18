const { parseFragment } = require("parse5");

class TemplateAnalyzer {
  _ast = null;

  constructor(node) {
    // TODO: convert our JavaScript node into a string

    // TODO: parse the string into an HTML AST
    this._ast = parseFragment(node);
  }

  templateExpressionToHtml(node) {
    return "";
  }
}

exports.TemplateAnalyzer = TemplateAnalyzer;
