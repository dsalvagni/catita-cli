; (function (namespace) {
    'use strict'
    var program = require('commander'),
        self    = {};

    self.actionConfig = {
        command: 'start <description>',
        description: "Start to log something",
        action: action,
        options: [
            {
                option: "-t, --tags <tags>",
                description: "You may want to tag your entries", 
                type: 'list'
            }
        ]
    };

    namespace.action   = action;
    namespace.register = register;
    return namespace;


    function action(description, options) {
        console.log('Start', description, options.tags);
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

