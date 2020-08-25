let wakeDog = function(dogName="Byron", dogBreed="poodle") {
   let message = `Wake ${dogName} the ${dogBreed}`
    return message;
}
 

  let leashDog = function(dogName="Boo Radley", dogBreed="Pibble") {
    let message =  `Leash ${dogName} the ${dogBreed}`
    return message;
  }

  let walkToPark = function(dogName="Byron", dogBreed="poodle") {
    let message = `Walk to the park with ${dogName} the ${dogBreed}`;
       return message;  
  }

  let walkHome = function(dogName="Santa Paws", dogBreed="Husky") {
    let message =`Walk home with ${dogName} the ${dogBreed}`;
        return message;
  }

  let unleashDog = function(dogName="Lauren", dogBreed="Golden Retriever") {
    let message = `Unleash ${dogName} the ${dogBreed}`;
       return message;
  }

  let throwFrisbee = function(dogName, dogBreed) {
      let message = `Throw the frisbee for ${dogName} the ${dogBreed}`
      return message;
  }


const routine = [wakeDog, leashDog, walkToPark,throwFrisbee, walkHome, unleashDog]

let exerciseDog = function(dogName, dogBreed){
  return  routine.map(x =>  x(dogName, dogBreed) )
};
//const items = ['item1', 'item2', 'item3']
//const copyItems = []
 
   
   // after
// items.forEach(function(item){
//     copyItems.push(item)
//   })
 
  