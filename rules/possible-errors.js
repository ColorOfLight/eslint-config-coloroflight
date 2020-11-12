module.exports = {
  "no-extra-boolean-cast": ["error", {"enforceForLogicalOperands": true}],
  "no-extra-parens": ["error", "all", {
    "returnAssign": false,
    "nestedBinaryExpressions": false,
    "ignoreJSX": "all",
    "enforceForNewInMemberExpressions": false,
    "enforceForFunctionPrototypeMethods": false			
  }],
  "no-loss-of-precision": "error",
  "no-promise-executor-return": "error",
  "no-template-curly-in-string": "error",
  "no-unreachable-loop": "error",
  "require-atomic-updates": "error",
  "valid-typeof": ["error", { "requireStringLiterals": true }],
};