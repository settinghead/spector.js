// import '../../author_experiments/ben.tmp';
import $ from 'jquery';
var populateContent = require( './populateContent' );

require( '../../src/clauses/index.annotation.js' );

$( () => {
  populateContent( $, loadMd );
} );

function loadMd(path) {
  return require('raw-loader!../articles/' + path);
}
