; (function (namespace) {
    'use strict'
    var program = require('commander'),
        self    = {};

    self.actionConfig = {
        command: 'list',
        description: "List your logs",
        action: action,
        options: [
            {
                option: "-f, --from <from>",
                description: "From a given date"
            },
            {
                option: "-u, --until <until>",
                description: "Until a given date"
            },
            {
                option: "-t, --tags <tags>",
                description: "Tagged with"
            }
        ]
    };

    namespace.action   = action;
    namespace.register = register;
    return namespace;


    function action() {
        console.log('List');
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

