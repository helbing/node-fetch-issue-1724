import { Request } from "node-fetch"

export default function handler() {
  return async function () {
    const request = new Request("https://google.com/")
  }
}
