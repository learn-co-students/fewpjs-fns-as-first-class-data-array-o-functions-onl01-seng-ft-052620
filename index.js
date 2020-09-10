function wakeDog(dogName, dogBreed){
    var sentence = `Wake ${dogName} the ${dogBreed}`
    console.log(sentence)
    return sentence
}

function leashDog(dogName, dogBreed){
    var sentence = `Leash ${dogName} the ${dogBreed}`
    console.log(sentence)
    return sentence
}

function walkToPark(dogName, dogBreed){
    var sentence = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(sentence)
    return sentence
}

function throwFrisbee(dogName, dogBreed){
    var sentence = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(sentence)
    return sentence
}

function walkHome(dogName, dogBreed){
    var sentence = `Walk home with ${dogName} the ${dogBreed}`
    console.log(sentence)
    return sentence
}

function unleashDog(dogName, dogBreed){
    var sentence = `Unleash ${dogName} the ${dogBreed}`
    console.log(sentence)
    return sentence
}

var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
    var exercise = new Array()
    for(let i = 0; i < routine.length; i++){
        exercise.push(routine[i](dogName,dogBreed))
    }

    return exercise
}

