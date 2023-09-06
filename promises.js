// promises
const func1 = () => Promise.resolve("Promise 1");
const func2 = () =>
  new Promise((resolve, reject) => setTimeout(resolve, 1000, "Promise 2"));
const func3 = () => Promise.resolve("Promise 3");
const func4 = () =>
  new Promise((resolve, reject) => setTimeout(reject, 2000, "Promise 4"));

const handleReject = (reason) => console.warn("Promise all rejection reason: ", reason)

Promise.all([func1(), func2(), func3(), func4()])
  .then(([res1, res2, res3]) => {
    console.log("Promises.all");
    console.log("Promises 1 : ", res1);
    console.log("Promises 2 : ", res2);
    console.log("Promises 3 : ", res3);
  })
  .catch(handleReject);

[(func1, func2, func3, func4)]
  .reduce((acc, cv, i) => acc.then(cv), Promise.resolve())
  .then((res) => console.log("Promises by composition :: ", res))
  .catch(handleReject);


const getProducts = () => Promise.resolve(["cake", "muffin"])

const async_use = async () => getProducts

console.log('async use', async_use())
