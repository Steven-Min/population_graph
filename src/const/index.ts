import { reactive } from 'vue'
export const RESAS_API_URL: string = `https://opendata.resas-portal.go.jp`
export const API_KEY: string = `vqQnYCGTe75uDG9JEiLzuekj4JoBndW9jiyjl80q`

/**
 * ES6 の Symbol を利用して厳密なSingleton export を実現するためのHelper Function
 * 何回召喚しても厳密に同じInstanceが帰ってくるよ、という関数
 */
export const singletonInstanceSummoner = (
  baseName: string,
  CallerClass: any,
  constructorArgs: any[] = []
) => {
  const key = Symbol.for(`PF_${baseName}`)
  // @ts-ignore
  if (!globalThis[key]) {
    // @ts-ignore
    globalThis[key] = new CallerClass(...constructorArgs)
  }
  // @ts-ignore
  return globalThis[key]
}

// @ts-ignore
export const makeItReactive = <T>(obj): T => {
  return reactive(obj)
}

export const GRAPH_YEARS = () => {
  //1980年から2045年まで5年刻み
  const years = []
  for (let i = 1980; i <= 2045; i += 5) {
    years.push(i)
  }
  return years
}
