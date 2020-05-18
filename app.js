/**
 * modules have their own scopes. you can not access any defined var/from another module unless you explicitly export them
 */

const name = require("./utils");
const getNotes = require("./notes");
console.log(name);
console.log(getNotes());