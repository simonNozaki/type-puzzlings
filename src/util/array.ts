export type Reverse<T extends readonly unknown[]> = T extends [infer F, ... infer Rest]
  ? [...Reverse<Rest>, F]
  : T

export type Shift<T extends readonly unknown[]> = T extends [infer _, ... infer R] ? [...R] : never

export type Flatten<T extends readonly unknown[]> = T extends[... infer R] ? R : T

// ...

const reverse: Reverse<['a', 'b', 'c']> = ['c', 'b', 'a']

const shift: Shift<['a', 'b', 'c', 'd']> = ['b', 'c', 'd']
