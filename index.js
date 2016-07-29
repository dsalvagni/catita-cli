var cli      = require('./lib/cli'),
    program  = require('commander'),
    pkg      = require('./package.json');

program
  .version(pkg.version);

program.parse(process.argv);