function swapWithoutTemp(a, b){
    console.log('Before swap a', a)
    console.log('Before swap b', b)

    b = b - a
    console.log('remove a from b for initial b', b)

    a = a + b
    console.log('add b to a to get new a', a)

    b = a - b
    console.log('remove b from a to get new b', b)

    console.log('After swap a', a)
    console.log('After swap b', b)
}

swapWithoutTemp(2, 3);