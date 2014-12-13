var SVGDOMPropertyConfig = require('react/lib/SVGDOMPropertyConfig');
var DOMProperty = require('react/lib/DOMProperty');
var assign = require('react/lib/Object.assign');

var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;


assign(SVGDOMPropertyConfig.Properties, {
  attributeName: MUST_USE_ATTRIBUTE,
  from: MUST_USE_ATTRIBUTE,
  to: MUST_USE_ATTRIBUTE,
  dur: MUST_USE_ATTRIBUTE,
  repeatCount: MUST_USE_ATTRIBUTE
});


module.exports = require('./tags');
