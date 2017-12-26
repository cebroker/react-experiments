require('dotenv').config();
const chalk = require('chalk');

const { runProvider } = require('./providers');
const { runSpecialty } = require('./specialty');

let {
  NODE_ENV
} = process.env;

const run = async () => {
  if(NODE_ENV === 'development') {
    console.log(chalk.gray('Seeds running...'));
    await runSpecialty();
    await runProvider();
    console.log(chalk.green('Seeds created.'));
    process.exit();
  }

  console.log(chalk.red('seeds only run for dev environment.'));
  process.exit();
};

run();
