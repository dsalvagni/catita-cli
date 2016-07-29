; (function (namespace) {
    'use strict'
    /**
     * Load and register all actions
     */
    var normalizedPath = require("path").join(__dirname, "actions");
    require("fs").readdirSync(normalizedPath).forEach(function(file) {
        require("./actions/" + file).register();
    });

    var config = require('./api.js');
    console.log(config.getResource('me',1,2,3));

    return namespace;
    
} (module.exports));