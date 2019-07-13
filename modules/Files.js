const fs = require('fs');

module.exports = {
  Save_username : (username, User) => {
    User.Username = username.username;
    User.Level = 0;
    User.Xp = 0;
    fs.writeFile('./Info/User.json' , JSON.stringify(User), (err) => {
      if (err) throw err;
    });
  },
  SaveToDo : (todo, dateToDo, today, Todo) => {
    if(dateToDo == ""){
      dateToDo = "No Deadline";
    }
    var obj = {todo , dateToDo, today};
    Todo.list.push(obj);
    fs.writeFile('./Info/Todo.json' , JSON.stringify(Todo), (err) => {
      if (err) throw err;
    });
  },
  MoveToDo : (todo , today, Todo, Completed, User) => {
      for(var x = 0 ; x < Todo.list.length; x++){
          if(Todo.list[x].todo == todo){
            Todo.list.splice(x , 1);
        }
      }
      fs.writeFile('./Info/Todo.json' , JSON.stringify(Todo), (err) => {
        if (err) throw err;
      });
      var obj = { todo , today};
      Completed.list.push(obj);
      fs.writeFile('./Info/Do.json', JSON.stringify(Completed), (err) => {
        if (err) throw err;
      });
      User.Xp = User.Xp + 3;
      if(User.Xp >= 10){
        User.Level = User.Level + 1;
        console.log("Congratulations You reach the level " + User.Level);
        User.Xp = User.Xp - 10;
      }
      fs.writeFile('./Info/User.json', JSON.stringify(User), (err) => {
        if (err) throw err;
      });
  },
  DeleteTodo : (todo , Todo) => {
    for(var x = 0 ; x < Todo.list.length; x++){
        if(Todo.list[x].todo == todo){
          Todo.list.splice(x , 1);
      }
    }
    fs.writeFile('./Info/Todo.json' , JSON.stringify(Todo), (err) => {
      if (err) throw err;
    });
  }
}
