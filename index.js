function wakeDog(a,b) {
    return `Wake ${a} the ${b}`
};
function leashDog(a, b) {
    return `Leash ${a} the ${b}`
};
function walkToPark(a, b) {
    return `Walk to the park with ${a} the ${b}`
};
function throwFrisbee(a, b) {
    return `Throw the frisbee for ${a} the ${b}`
};
function walkHome(a, b) {
    return `Walk home with ${a} the ${b}`
};
function unleashDog(a, b) {
    return `Unleash ${a} the ${b}`
};

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let array = [] 
    for (let i = 0; i < routine.length; i ++){
        console.log(routine[i](dogName, dogBreed));
        array.push(routine[i](dogName, dogBreed))
    }
    return array 
}

/*
var wakeDog = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}

var leashDog = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`
}

var walkToPark = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

var throwFrisbee = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

var walkHome = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`
}

var unleashDog = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dog, breed) {
  return routine.map(fn => fn(dog, breed))
}
*/
