const readline = require('readline');
const fs = require('fs')
const moment = require("moment")
let object = JSON.parse(fs.readFileSync('./src/todo_list.json', 'utf-8'))
console.log(object)
const jsonlol = require('./todo_list.json')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is the deadline? ', function(deadline) {
    rl.question('What do you want to add? ', function (answer) {
        let obj = {
            id: object["list"].length + 1,
            date: moment(new Date()).format('LLLL'),
            todo: answer, 
            deadline: deadline
        }
        object["list"].push(obj)
        // jsonlol.
        fs.writeFileSync('./src/todo_list.json', JSON.stringify(object))
        rl.close();
    });
});
rl.prompt()

rl.on('close', function () {
console.log('Done! BYEE')
    process.exit(0);
});