var oAssign = require( 'object-assign' );
var regex = require( './regex' );
var { props, keys } = require( './objRelated' );

var other = {
  and: require( './and' ),
  any: require( './any' ),
  fspec: require( './fspec' ),
};

var r = oAssign( {}, regex, { props, keys }, other );

module.exports = r;
