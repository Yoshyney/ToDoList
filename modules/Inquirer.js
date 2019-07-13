const inquirer = require('inquirer');

module.exports = {
  choose_username : () => {
    const username = [
      {
        name: 'username',
        type: 'input',
        message: 'Choose your username !',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Choose a valid username !';
          }
        }
      }];
      return inquirer.prompt(username);
    },
    choose_what_to_do: (username) => {
      const options = [
        {
          name: 'options',
          type: 'list',
          message: 'Choose what you want to do ' + username + ' !',
          choices: [ "Add To my list", "Watch My completed stuff", "Watch my profile", "Exit"]
        }];
        return inquirer.prompt(options);
      },
      To_do_options: (username) => {
        const options = [
          {
            name: 'options',
            type: 'list',
            message: 'Choose what you want to do ' + username + ' !',
            choices: [ "Add something !", "Complete something !", "Delete Something", "Back" ]
          }];
          return inquirer.prompt(options);
        },
        back_option: (username) => {
          const options = [
            {
              name: 'options',
              type: 'list',
              message: 'Choose what you want to do ' + username + ' !',
              choices: ["Back" ]
            }];
            return inquirer.prompt(options);
          },
          addToDo : () => {
            const add = [
              {
                name: 'todo',
                type: 'input',
                message: "Enter what you want to do !" ,
                validate: function( value ) {
                  if (value.length) {
                    return true;
                  } else {
                    return "Enter a correct value ! ";
                  }
                }
              },
              {
                name: 'date',
                type: 'input',
                message: "Enter a deadline in this format YYYY MM DD (if you don't want any deadline just let the input empty)",
                validate: function(value) {
                  var tab = value.split(' ');
                  if (!value.length) {
                    return true;
                  } else {
                    if(tab.length == 3){
                      var date = new Date().getTime();
                      if(tab[0].length == 4 && tab[1].length == 2 && tab[2].length == 2 && Number.isInteger(parseInt(tab[0],10)) && Number.isInteger(parseInt(tab[1],10)) && Number.isInteger(parseInt(tab[2],10))){
                        var dateYouWant = new Date(tab[0] + "-" + tab[1] + "-" + tab[2]).getTime();
                        if(isNaN(dateYouWant)){
                          return "The date you choosed doesn't exist please choose a right one !";
                        }
                        if((date - dateYouWant) > 0){
                          return "The Date you choosed is already gone please choose another one";
                        }else{
                          return true;
                        }
                      }
                    }
                    return "Enter a correct date please ";
                  }
                }
              }
            ];
            return inquirer.prompt(add);
          },
          completeInquirer: (tab) => {
            const options = [
              {
                name: 'options',
                type: 'list',
                message: 'Choose the task you want to complete !',
                choices: tab
              }];
              return inquirer.prompt(options);
            }
          }
