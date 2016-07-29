; (function (namespace) {
    'use strict'

    var program = require('commander'),
        self    = {};    

    self.actionConfig = {
        command: 'init',
        description: "Initialize Catita CLI",
        action: action,
        options: [
            {
                option: "-u, --user <user>",
                description: "User to login"
            },
            {
                option: "-p, --pass <password>",
                description: "Password to login"
            }
        ]
    };


    namespace.action   = action;
    namespace.register = register;
    return namespace;


    function action() {
        console.log('Init');
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

