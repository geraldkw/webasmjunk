const { readFileSync } = require('fs')

const mathwasm2 = readFileSync('./math.wasm')

const math = async () => {
  try {
    const maththing = await WebAssembly.instantiate(
      new Uint8Array(mathwasm2)
    ).then((res) => res.instance.exports)
    console.log(maththing.square(19))
    console.log(maththing.add(7, 9))
    console.log(maththing.subtract(100, 10))
  } catch (something) {
    console.log(something)
  }
}

math()
