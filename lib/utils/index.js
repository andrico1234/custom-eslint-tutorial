const { parseFragment } = require("parse5");

class TemplateAnalyzer {
  _ast = null;

  constructor(node) {
    // TODO: convert our JavaScript node into a string using this.templateExpressionToHtml();
    //
    // TODO: parse the string into an HTML AST
  }

  templateExpressionToHtml(node) {
    return "";
  }
}

exports.TemplateAnalyzer = TemplateAnalyzer;
