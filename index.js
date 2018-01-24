// Code your solution in this file.
  function lowerCaseDrivers(array){
  return array.map(function(e){
  return e.toLowerCase()
  })
  }

  function nameToAttributes(names){
  return names.map(function(name) {
     let fName = name.split(" ")[0]
     let lName = name.split(" ")[1]

     return{firstName: fName, lastName: lName}
   })
  }

  function attributesToPhrase(drivers){
return drivers.map(function(driver){
return `${driver.name} is from ${driver.hometown}`
})
}
