import { add, multiply, fetch } from "../src/index.js"


(async () => {
  if (add(1, 2) !== 3) {
    throw new Error("1 + 2 should be 3")
  }
  if (multiply(2, 3) !== 6) {
    throw new Error("2 * 3 should be 6")
  }
  const data = await fetch()
  if (!data.ok) {
    throw new Error("fetch result should contain ok: 1")
  }
})()
