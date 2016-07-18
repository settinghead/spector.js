global.SPECKY_DEV = true;

module.exports = {
  cat: require('./cat'),
  conform: require('./conform'),
  fspec: require('./fspec'),
  isValid: require('./isValid'),
  keys: require('./keys'),
  identity: require('./identity'),
  isFn: require('./isFn'),
  isFunction: require('./isFn'),
  isNum: require('./isNum'),
  isObj: require('./isObj'),
  isObject: require('./isObj'),
  isProblem: require('./isProblem'),
  isStr: require('./isStr'),
  isString: require('./isStr'),
  or: require('./or'),
  Problem: require('./_Problem'),
  zeroOrMore: require('./zeroOrMore')
};
