; (function (namespace) {
    'use strict'
    var program = require('commander'),
        self    = {};

    self.actionConfig = {
        command: 'restart',
        description: "Restart the paused log",
        action: action
    };

    namespace.action   = action;
    namespace.register = register;
    return namespace;


    function action() {
        console.log('Restart');
    }

    function register() {
        var opt = program.command(self.actionConfig.command)
            .description(self.actionConfig.description)
            .action(self.actionConfig.action);
        if (self.actionConfig.options) {
            self.actionConfig.options.forEach(function (option) {
                opt.option(option.option, option.description);
            });
        }
    }

} (module.exports));

