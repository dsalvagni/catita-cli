; (function (namespace) {
    'use strict'
    namespace.getAll = getAll;
    namespace.registerAll = registerAll;
    return namespace;


    function getAll() {
        return [
            {
                command: 'init',
                description: "Initialize Catita CLI",
                options: [
                    {
                        short: "-u",
                        option: "--user <user>",
                        description: "User to login"
                    },
                    {
                        short: "-p",
                        option: "--pass <password>",
                        description: "Password to login"
                    }
                ]
            },
            {
                command: 'start <description>',
                description: "Start to log something",
                options: [
                    {
                        short: "-t",
                        option: "--tags <tags>",
                        description: "You may want to tag your entries"
                    }
                ]
            },
            {
                command: 'pause',
                description: "Pause the current log"
            },
            {
                command: 'restart',
                description: "Restart the paused log"
            },
            {
                command: 'stop',
                description: "Stop the current log"
            },
            {
                command: 'remove <id>',
                description: "Remove a log entry"
            },
            {
                command: 'list',
                description: "List your logs",
                options: [
                    {
                        short: "-f",
                        option: "--from <from>",
                        description: "From a given date"
                    },
                    {
                        short: "-u",
                        option: "--until <until>",
                        description: "Until a given date"
                    },
                    {
                        short: "-t",
                        option: "--tags <tags>",
                        description: "Tagged with"
                    }
                ]
            },
            {
                command: 'update <id>',
                description: "List your logs",
                options: [
                    {
                        short: "-d",
                        option: "--description <description>",
                        description: "Update the description"
                    },
                    {
                        short: "-s",
                        option: "--startdate <startdate>",
                        description: "Update the start datetime"
                    },
                    {
                        short: "-e",
                        option: "--enddate <enddate>",
                        description: "Update the end datetime"
                    },
                    {
                        short: "-t",
                        option: "--tags <tags>",
                        description: "Update tags from this worklog"
                    }
                ]
            },
            {
                command: 'logout',
                description: "Logout from Catita"
            },
            {
                command: 'status',
                description: "Current logging status"
            }
        ];
    }

    function isCommand(command) {
    }

    function registerAll(program) {
        getAll().forEach(function (item) {
            var opt = program.command(item.command)
                .description(item.description)
                .action(function (args, options) {
                    console.log(args, options);
                });
                if(item.options){
                    item.options.forEach(function(option) {
                        opt.option(option.short + ", "+option.option,option.description);
                    });
                }
        });
    }
} ((function () {
    if (typeof window === 'undefined') {
        return module.exports
    } else {
        return window
    }
})()))