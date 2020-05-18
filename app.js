/**
 * core nodejs apis are being called by require and the name is being used as only parameter directly/ you can find the api name nder docs in nodejs.org
 */
const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is Arman.");