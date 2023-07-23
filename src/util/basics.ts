export type Final<T extends { [k: string]: any }> = {
  readonly [U in keyof T]: T[U]
}

export type Except<T, U> = T extends U ? never : T

export type Flip<T extends { [k: string]: any }> = {
  [K in keyof T as `${T[K]}`]: K
}

// ...

interface Todo {
  title: string
  description: string
}

const todo: Final<Todo> = {
  title: "Hey",
  description: "foobar"
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo"

const except: Except<'a' | 'b' | 'c', 'a'> = 'b'

const flip: Flip<{ a: false, b: true }> = {
  false: 'a',
  true: 'b'
}
