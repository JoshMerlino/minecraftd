#!/usr/bin/env bun
import chalk from "chalk";
import { program } from "commander";
import { name, version } from "../package.json";

// Configure the CLI
program;

// .name("ember")
// .usage("[options] <command> [arguments...]")
// .option("-v, --verbose", "Enable verbose output")
// .on("option:verbose", function(this: Command) {
// 	process.env.VERBOSE = this.opts().verbose;
// })
// .version(version)
// .configureOutput({
// 	outputError: (str, write) => write([ chalk.red("✕"), str.replace(/^error:\s/, "").replace((/^[a-z]/), firstLetter => firstLetter.toUpperCase()) ].join(" "))
// });

// Display the version
console.log(chalk.gray(name, version));
	
// // Import commands
// import "./commands/daemon";
// import "./commands/firewall";
// import "./commands/help";
// import "./commands/install";
// import "./commands/mkcfg";
// import "./commands/provision";
// import "./commands/serve";
// import "./commands/update";

// Parse the command-line arguments
program.parse(process.argv);