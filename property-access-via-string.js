function getProp(obj, descr) {
    let arr = descr.split(".")
    while(arr.length){
        obj = obj[arr.shift()]
    }
    return obj;
}

const sourceObject = {
  props: {
    read: "a",
    write: "b",
  },
};

const referenceA = "props.read";
const valueA = getProp(sourceObject, referenceA);

console.log(`sourceObject: ${JSON.stringify(sourceObject)} referenceA: ${referenceA} valueA: ${valueA}`)
