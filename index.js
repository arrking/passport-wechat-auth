/**
 * Module dependencies.
 */
var OAuth2Strategy = require('./lib/oauth2');


/**
 * Framework version.
 */
require('pkginfo')(module, 'version');

/**
 * Expose constructors.
 */
exports.OAuth2Strategy = OAuth2Strategy;
