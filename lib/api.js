; (function (namespace) {
    'use strict'

    var api     = require('./config.json');

    namespace.getResource = getResource;
    return namespace;

    function getResource(resource) {
        var args,
            url;
        args = arguments.length > 1 ? Array.prototype.slice.call(arguments) : false;

        if(typeof api.endpoints[resource] === 'undefined') {
            throw("Endpoint not found in api configuration (./config/api.json).");
        }

        url =  api.apiUrl + api.endpoints[resource];
        if(args) {
            args.shift();
            url += "/"+args.join('/');
        }
        return url;
    }

} (module.exports));
