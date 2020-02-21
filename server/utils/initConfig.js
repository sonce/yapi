const path = require('path');
const fs = require('fs-extra');
const config = require('../config.js');

let runtimePath = config.runtime_path;
fs.ensureDirSync(runtimePath);
fs.ensureDirSync(path.join(__dirname, 'log'));
let configPath = path.join(runtimePath, 'config.js');

fs.writeFileSync(configPath,
  JSON.stringify(config, null, '\t'),
  { encoding: 'utf8' }
);