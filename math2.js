const { readFileSync } = require('fs')

const mathwasm2 = readFileSync('./math2.wasm')

const math = async () => {
  try {
    const maththing = await WebAssembly.instantiate(
      new Uint8Array(mathwasm2)
    ).then((res) => res.instance.exports)
    console.log(maththing.return20())
  } catch (something) {
    console.log(something)
  }
}

math()
