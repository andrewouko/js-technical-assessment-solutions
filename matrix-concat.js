function generate(arr) {
  if (arr.length > 2) return;
  return arr[0].map((el) => {
    return arr[1].reduce((acc, cv, i) => {
        acc.push(`${el} ${cv}`)
        return acc;
    }, [])
  });
}
