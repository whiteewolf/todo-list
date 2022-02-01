const fs = require("fs")
const obj = JSON.parse(fs.readFileSync('./src/todo_list.json', 'utf-8'))
console.log(obj)