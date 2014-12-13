var React = require('react');
var ReactElement = require('react/lib/ReactElement');
var ReactLegacyElement = require('react/lib/ReactLegacyElement');
var mapObject = require('react/lib/mapObject');
var keyMirror = require('react/lib/keyMirror');


function createCompositeProxy(tag) {

  var factory = ReactLegacyElement.markNonLegacyFactory(
    ReactElement.createFactory(tag)
  );

  return React.createClass({

    displayName: 'ReactSVG.' + tag,

    render: function() {
      return factory(this.props, this.props.children);
    }

  });

}


var svgTags = keyMirror({
  animateTransform: null
});


module.exports = mapObject(svgTags, createCompositeProxy);
