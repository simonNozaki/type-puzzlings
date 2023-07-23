export type Params<F extends (...args: any[]) => any> = F extends (...args: infer G) => unknown ? G : never

export type OutputType<F extends (...args: any[]) => any> = F extends (...args: any) => infer G ? G : never

// ... 

const f = (arg1: string, arg2: number): number => { return 1; }

type FunctionParamsType = Params<typeof f>
type FOutput = OutputType<typeof f>
