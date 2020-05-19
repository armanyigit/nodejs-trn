const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note');
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('Reading the note');
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function () {
        console.log('Listing the note');
    }
});

yargs.parse();
// console.log(yargs.argv);
