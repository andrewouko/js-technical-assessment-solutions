function randomNumberBetweenExclusive(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}
console.log("random number between 5  & 7 exclusive of max : ", randomNumberBetweenExclusive(5, 7))

function randomNumberBetweenInclusive(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log("random number between 5  & 7 inclusive of max : ", randomNumberBetweenInclusive(5, 7))