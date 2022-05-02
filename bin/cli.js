#!/usr/bin/env node

const { execSync } = require('child_process');

function runCommand(command) {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Failed to execute ${command}`, err);
    return false;
  }
  return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/theHuycoder/vue-starter.git ${repoName}`;
const installDependencies = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);

const gitCheckedOut = runCommand(gitCheckoutCommand);
if (!gitCheckedOut) {
  return process.exit(-1);
}

console.log(`Installing dependencies...`);
const installedDeps = runCommand(installDependencies);
if (!installedDeps) {
  return process.exit(-1);
}

console.log('Congratulations, you have installed successfully');
console.log(`cd ${repoName} && npm run dev`);
