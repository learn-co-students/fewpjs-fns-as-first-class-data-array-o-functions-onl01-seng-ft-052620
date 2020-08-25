function wakeDog(a, b){
  let action = `Wake ${a} the ${b}`
  return action
}

function leashDog(a, b){
  let action = `Leash ${a} the ${b}`
  return action
}

function walkToPark(a, b){
  let action = `Walk to the park with ${a} the ${b}`
  return action
}

function throwFrisbee(a, b){
  let action = `Throw the frisbee for ${a} the ${b}`
  return action
}

function walkHome(a, b){
  let action = `Walk home with ${a} the ${b}`
  return action
}


function unleashDog(a, b){
  let action = `Unleash ${a} the ${b}`
  return action
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
  let results = []
    for(let i = 0;  i < routine.length; i++){
      results[i] = routine[i](dogName, dogBreed)
    }
    return results
}
