const Todo = require("../Info/Todo.json");
const prompt = require('./Inquirer');
const files = require('./Files');
var sleep = require('sleep');

const add = async () => {
  const addToDo = await prompt.addToDo();
  var today = new Date();
  var date = today.getFullYear()+' '+(today.getMonth()+1)+' '+today.getDate();
  files.SaveToDo(addToDo.todo, addToDo.date, date , Todo);
  console.log('The task ' + addToDo.todo  + " has been added successfully !");
  sleep.sleep(3);
}

const seeTheToDo = () => {
      console.log(" To Do      |    Deadline      |  When you post it ")
    for(var y = 0; y < Todo.list.length; y++){
      console.log( y + " | " +Todo.list[y].todo + " / " + Todo.list[y].dateToDo + " / " + Todo.list[y].today);
    }
  console.log('\n');
}

module.exports = {
    add,
    seeTheToDo
}
