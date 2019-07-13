const prompt = require('./Inquirer');
const { Count_obj } = require('./Factories');
const User = require('../Info/User.json');
const Todo = require("../Info/Todo.json");
const Completed = require("../Info/Do.json");


const verif_username = () => {
  if(User.Username){
    return true;
  }
  return false;
}

const my_profile = () => {
  console.log("Username : " + User.Username);
  console.log("Level : " + User.Level);
  console.log("Experience : " + User.Xp);
  console.log("Number of actuall stuff to do : " + Count_obj(Todo));
  console.log("Number of actuall stuff completed : " + Count_obj(Completed));
}

module.exports = {
  verif_username,
  my_profile,
}
