export type TupleToObject<T extends Readonly<Array<string | number>>> = {
  [k in T[number]]: k
}

export type TupleToUnion<T extends readonly unknown[]> = T extends Array<infer P> ? P : never

export type Includes<T extends Readonly<Array<any>>, U> = U extends T[number] ? true: false


export type Last<T extends readonly unknown[]> = T extends [...infer _, infer L] ? L : never

export type Pop<T extends readonly unknown[]> = T extends [... infer U, infer _] ? U : never

export type Push<T extends readonly unknown[], K> = [...T, K]

export type LookUp<T, U> = T extends { type: U } ? T : never

// ---

// ...
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Santana'>

const teslas: TupleToObject<['tesla', 'model 3', 'model X', 'model Y']> = {
  tesla: 'tesla',
  'model 3': 'model 3',
  'model X': 'model X',
  'model Y': 'model Y'
}

const toUnion: TupleToUnion<[1, 3, 5]> = 1

const last: Last<[1, 2, 3]> = 3

const pop: Pop<['a', 'b', 'c', 'd']> = ['a', 'b', 'c']

const push: Push<['a', 'b', 'c'], 'd'> = ['a', 'b', 'c', 'd']

interface Square {
  type: "square";
  size: number;
}

interface Rectangle {
  type: "rectangle";
  width: number;
  height: number;
}

type Shape = LookUp<Square | Rectangle, 'square'>
