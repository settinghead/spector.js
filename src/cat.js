

var Spec = require('./_Spec');
var Problem = require('./_Problem');
var conform = require('./conform');
var isProblem = require('./isProblem');
var coerceIntoSpec = require('./utils/coerceIntoSpec');

var SPEC_TYPE = 'CAT';

function cat() {
   var rawExprs = Array.from(arguments);

   if(!rawExprs) {
     throw new Error('No expression(s) provided for cat');
   }

   var specs = rawExprs.map(coerceIntoSpec);

   return new Spec(SPEC_TYPE, specs, genCatConformer(specs), null);
};

function genCatConformer(specs) {
  return function conformCatVals(vals) {
    if(!vals) {
      return new Problem(vals, specs, 'No value(s) provided for cat');
    } else if (vals.length !== specs.length) {
      return new Problem(vals, specs, specs.length + ' specs provided in cat, but there are only ' + vals.length + 'values. ' );
    } else {
      var r = vals.map(function valToConformed(x, i) { return conform(specs[i], x); });
      var problems = r.filter(isProblem);
      if(problems.length > 0) {
        return new Problem(vals, problems, 'One of the spec in cat did not pass');
      } else {
        return vals;
      }
    }
  }
}

module.exports = cat;
