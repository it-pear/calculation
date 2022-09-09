declare module "*.png" {
    const value: string;
    export default value;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}

export interface IComplex {
    values: Array<{ l: number | "", b: number | "", h: number | "" }>,
    result: number | ""
}

export abstract interface CalcSimpleType {
    values: Array<any>
    result: number | ""
}

export interface ITriangle extends CalcSimpleType {
    values: Array<{ a: number | "", b: number | "", с: number | "", h: number | ""  }>
}

export interface IRad extends CalcSimpleType {
    values: Array<{ r: number | "", h: number | "" }>
}

export interface USHP {
    l,
    w,
    h: number | String
}

export interface USHP2 {
    values: Array<{ l: number | "", w: number | "", h: number }>,
    result
}

export interface ISimpleUSHP {
    values: { in: USHP, out: USHP }
    result
}

export interface IComplexUSHP extends ISimpleUSHP {
    values: [{ in: USHP, out: USHP }]
}

export type TPages = { name: string, title: string, titleMobile: string, index: number }

export interface IPile {
    r,
    h,
    c: number | ""
}
export interface IPile2 {    
    values: Array<{ r: number | "", h: number | "", c: number }>,
    result
}

export interface ISimpleSPF {
    valueOfFundament: USHP
    valueOfPile: IPile
    result: number | ""
}

export interface IComplexSPF {
    valuesOfFundament: Array<USHP>
    valuesOfPile: Array<IPile>
    result: number | ""
}


// export interface IPile extends CalcSimpleType {
//     values: Array<{ r: number | "", h: number | "", count: number }>
// }
