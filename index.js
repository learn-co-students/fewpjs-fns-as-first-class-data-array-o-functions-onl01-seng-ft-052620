
let wakeDog = function wakeDog(dogName="Esther" , dogBreed="Dalmation") {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}

let leashDog = function leashDog(dogName="Esther" , dogBreed="Dalmation") {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`
}

let walkToPark = function walkToPark(dogName="Esther" , dogBreed="Dalmation") {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

let throwFrisbee = function throwFrisbee(dogName="Esther" , dogBreed="Dalmation") {
  console.log(`Throw frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}
let walkHome = function walkHome(dogName="Esther" , dogBreed="Dalmation") {
  console.log(`Walk ${dogName} the ${dogBreed} home`);
  return `Walk home with ${dogName} the ${dogBreed}`
}
let unleashDog = function unleashDog(dogName="Esther" , dogBreed="Dalmation") {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return`Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dog, breed) {
  return routine.map(fn => fn(dog, breed))
}
