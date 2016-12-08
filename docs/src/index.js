import docgen from '../../src/docgen';
import Registry from '../../src/specs';
import $ from 'jquery';
import tether from 'tether';
const HLJS = require( 'highlight.js' );
require( 'bootstrap/dist/css/bootstrap.css' );
require( 'highlight.js/styles/codepen-embed.css' );
require( '../../src/specs/index.annotation.js' );

const finalDocStr = docgen.gen( Registry );
window.$ = window.jQuery = $;
window.Tether = tether;

var bootstrap = require( 'bootstrap' );

$( () => {
  document.getElementById( 'api' ).innerHTML = finalDocStr;

  $( '[data-toggle="popover"]' ).popover();

  $( 'pre code' ).each( ( i, block ) => {

    HLJS.highlightBlock( block );
  } );

  $( 'a[href*="#"]' ).click( function( e ) {
    $( `div[data-path="${$( e.target ).data( 'path' )}"]` )
      .delay( 100 ).fadeIn( 100 ).fadeOut( 100 ).fadeIn( 100 ).fadeOut( 100 ).fadeIn( 100 );
  } );
} );
