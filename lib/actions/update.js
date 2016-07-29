; (function (namespace) {
    'use strict'
    var program = require('commander'),
        self    = {};

    self.actionConfig = {
        command: 'update <id>',
        description: "List your logs",
        action: action,
        options: [
            {
                option: "-d, --description <description>",
                description: "Update the description"
            },
            {
                option: "-s, --startdate <startdate>",
                description: "Update the start datetime"
            },
            {
                option: "-e, --enddate <enddate>",
                description: "Update the end datetime"
            },
            {
                option: "-t, --tags <tags>",
                description: "Update tags from this worklog",
                type: 'list'
            }
        ]
    };

    namespace.action   = action;
    namespace.register = register;
    return namespace;


    function action() {
        console.log('Update');
    }

    function register() {
        var opt = program.command(self.actionConfig.command)
            .description(self.actionConfig.description)
            .action(self.actionConfig.action);
        if (self.actionConfig.options) {
            self.actionConfig.options.forEach(function (option) {
                if(option.type) {
                    if(option.type==='list') {
                        opt.option(option.option, option.description, function(val) {
                            return val.split(',');
                        });
                    }
                } else {
                    opt.option(option.option, option.description);
                }
            });
        }
    }

} (module.exports));

