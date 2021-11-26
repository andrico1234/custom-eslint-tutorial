import { parseFragment } from "parse5";

export class TemplateAnalyzer {
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
    // TODO: Parse node into AST
  }

  /**
   * Converts a JavaScript expression into an HTML string
   *
   * @param {import("estree").TaggedTemplateExpression} node
   * @return {string}
   */
  templateExpressionToHtml(node) {
    // TODO: Implement templateExpressionToHtml
    return "";
  }

  traverse(visitors) {
    // TODO: Implement traversal function
  }

  /**
   *
   * @param {import("parse5").Element} node
   * @returns {boolean}
   */
  isElement(node) {
    // TODO: implement check
    return false;
  }
}
