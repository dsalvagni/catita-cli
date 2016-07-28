var cli      = require('./lib/cli'),
    program  = require('commander'),
    pkg      = require('./package.json');



program
  .version(pkg.version);

cli.registerAll(program);

program.parse(process.argv);