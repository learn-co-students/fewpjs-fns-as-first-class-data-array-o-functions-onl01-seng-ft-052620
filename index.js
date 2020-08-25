function wakeDog(dogName, dogBreed) {
  const message = `Wake ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}

function leashDog(dogName, dogBreed) {
  const message = `Leash ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}
function walkToPark(dogName, dogBreed) {
  const message = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}
function throwFrisbee(dogName, dogBreed) {
  const message = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}
function walkHome(dogName, dogBreed) {
  const message = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}
function unleashDog(dogName, dogBreed) {
  const message = `Unleash ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
  return routine.map(function (dogFun){
      return dogFun(dogName, dogBreed);
    }
  );
}

// Lastly, create the function called `exerciseDog` that will take in two
// arguments:

// * `dogName`
// * `dogBreed`

// The function's implementation should

// * Iterate over the `routine` `Array`
// * Call each function in the array and
// * pass the `dogName` and `dogBreed` received by `exerciseDog()` to the function as they are _called_
// * capture the result of each function's call
// * return an `Array` of all those functions' return values