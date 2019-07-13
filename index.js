const { logo, date, result }  = require("./modules/Logo.js");
const {verif_username , my_profile} = require("./modules/Username.js")
const prompt = require('./modules/Inquirer');
const files = require("./modules/Files.js");
const { isEmpty, Count_obj } = require("./modules/Factories.js");
const { add , seeTheToDo} = require("./modules/Add.js");
const { completeTask , seeTheDo } = require("./modules/Complete.js");
const { deleteTask } = require("./modules/Delete.js");
const User = require("./Info/User.json");
const Todo = require("./Info/Todo.json");
const Completed = require("./Info/Do.json");

const run = async () => {
  logo("Todolist");
  if(!verif_username()){
    const username = await prompt.choose_username();
    files.Save_username(username, User);
    return run();
  }
  const choose_what_to_do = await prompt.choose_what_to_do(User.Username);
  if(choose_what_to_do.options == "Add To my list"){
    return to_do();
  }else if (choose_what_to_do.options == "Watch My completed stuff") {
    return completed();
  }else if (choose_what_to_do.options == "Watch my profile") {
    return profile();
  }else{
    console.log("Thank you and have a good day !");
    return;
  }
}

const to_do = async () => {
  logo('Add to my list !');
  if(!Count_obj(Todo) == 0){
    seeTheToDo();
  }else{
    console.log("You have actually nothing To do :(")
  }
  const choose_what_to_do = await prompt.To_do_options(User.Username);
  if(choose_what_to_do.options == "Add something !"){
    await add();
  }else if (choose_what_to_do.options == "Complete something !") {
    if(!Count_obj(Todo) == 0){
      await completeTask();
    }else{
      console.log("You got no task to complete :(");
      await prompt.back_option(User.Username);
    }
  }else if (choose_what_to_do.options == "Delete Something") {
    await deleteTask();
  }else{
    return run();
  }
  return to_do();
}

const completed = async () => {
  logo('Completed Stuff !');
  if(!Count_obj(Completed) == 0){
    seeTheDo();
    console.log("You already completed " + Count_obj(Completed) + " task ! Congratulations !");
  }else{
    console.log("You have actually nothing completed :(")
  }
  await prompt.back_option(User.Username);
  return run();
}

const profile = async () => {
  logo('Profile');
  my_profile();
  await prompt.back_option(User.Username);
  return run();
}

run();
