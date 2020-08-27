function wakeDog(dogName, DogBreed) {
  console.log(`Wake ${dogName} the ${DogBreed}`); 
  return (`Wake ${dogName} the ${DogBreed}`); 
}

function leashDog(dogName, DogBreed) {
  return(`Leash ${dogName} the ${DogBreed}`);
}

function walkToPark(dogName, DogBreed) {
  return(`Walk to the park with ${dogName} the ${DogBreed}`);
}

function throwFrisbee(dogName, DogBreed) {
  return(`Throw the frisbee for ${dogName} the ${DogBreed}`);
}

function walkHome(dogName, DogBreed) {
  return(`Walk home with ${dogName} the ${DogBreed}`);
}

function unleashDog(dogName, DogBreed) {
  return(`Unleash ${dogName} the ${DogBreed}`);
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dog, breed) {
 
  return routine.map(fn => fn(dog, breed))
  
}

