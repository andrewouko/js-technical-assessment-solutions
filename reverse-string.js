const test_str = "You are a nice dude."
console.log("test str : ", test_str)
function reverse(str){
    return str.split("").reverse().join("")
}
console.log(reverse(test_str))

function reverseWords(str){
    return str.split(" ").reverse().join(" ")
}
console.log(reverseWords(test_str))

function reverseInPlace(str){
    return str.split(" ").reverse().join(" ").split("").reverse().join("")
}
console.log(reverseInPlace(test_str))