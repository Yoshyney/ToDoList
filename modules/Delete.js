const Todo = require("../Info/Todo.json");
const prompt = require('./Inquirer');
const files = require('./Files');
var sleep = require('sleep');
var { allTheTask } = require('./Factories.js');


const deleteTask = async () => {
  const tab = allTheTask(Todo);
  const reponse  = await prompt.completeInquirer(tab);
  if(!reponse.options == "BACK !!!"){
    return;
  }else{
    await files.DeleteTodo(reponse.options, Todo);
    console.log("Your Task has been Deleted ! ");
    sleep.sleep(3);
  }
}

module.exports = {
    deleteTask
}
