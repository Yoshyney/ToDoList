const Todo = require("../Info/Todo.json");
const Completed = require("../Info/Do.json");
const User = require("../Info/User.json");
const prompt = require('./Inquirer');
const files = require('./Files');
var sleep = require('sleep');
var { allTheTask } = require('./Factories.js');

const completeTask = async () => {
    const tab = allTheTask(Todo);
    const reponse  = await prompt.completeInquirer(tab);
    if(!reponse.options == "BACK !!!"){
      return;
    }else{
      var today = new Date();
      var date = today.getFullYear()+' '+(today.getMonth()+1)+' '+today.getDate();
      await files.MoveToDo(reponse.options, date, Todo, Completed, User);
      console.log("Your Task has been completed.");
      console.log('Congratulations  !!! ');
      console.log("You won 3 xp points");
      sleep.sleep(3);
  }
}

const seeTheDo = () => {
      console.log(" Do      |   When you did it ")
    for(var y = 0; y < Completed.list.length; y++){
      console.log( y + " | " +Completed.list[y].todo + " / " + Completed.list[y].today);
    }
  console.log('\n');
}

module.exports = {
  completeTask,
  seeTheDo
}
