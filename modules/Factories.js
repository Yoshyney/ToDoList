const isEmpty = (obj)  => {
  for(var key in obj) {
    if(obj.hasOwnProperty(key))
    return false;
  }
  return true;
}

const Count_obj = (obj)  => {
  var x = 0;
  for(var key in obj) {
    for(var y = 0; y < obj[key].length; y++){
      x++;
    }
  }
  return x;
}

const allTheTask = (obj) => {
  var tab = []
  for(var y = 0; y < obj.list.length; y++){
    tab.push(obj.list[y].todo);
  }
  tab.push("BACK !!!")
  return tab;
}

module.exports = {
  isEmpty,
  Count_obj,
  allTheTask
}
