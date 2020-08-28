function wakeDog(dogName, dogBreed){
    const output = `Wake ${dogName} the ${dogBreed}`
    console.log(output)
    return output
}

function leashDog(dogName, dogBreed){
    const output = `Leash ${dogName} the ${dogBreed}`
    console.log(output)
    return output
}

function walkToPark(dogName, dogBreed){
    const output = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(output)
    return output
} 

function throwFrisbee(dogName, dogBreed){
    const output = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(output)
    return output
}

function walkHome(dogName, dogBreed){
    const output = `Walk home with ${dogName} the ${dogBreed}`
    console.log(output)
    return output
}

function unleashDog(dogName, dogBreed){
    const output = `Unleash ${dogName} the ${dogBreed}`
    console.log(output)
    return output
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogBreed, dogName){
    const output = []
    for(let i = 0; i < routine.length; i++){
        output.push(routine[i](dogBreed, dogName))
    }
    return output
}