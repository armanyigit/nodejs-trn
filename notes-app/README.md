# nodejs-trn
you can pass an arguement to your script while executing it by adding it next to you script name after a space ie. "node app.js param"

you can read those passed arg from the process global var of node like this process.argv. argv is an array of params

you can pass command line options as you want in this syntax:
'node scriptname paramname --optionname=value
you can use a an npm module to parse the option called 'yargs'