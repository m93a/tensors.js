import math from "mathjs";

// Fields

export type Field = Reals;

class Reals_ { private __nominal: void; }
export type Reals = Reals_;
export const Reals = new Reals_();



// Vector Space

export function vectorSpace<F extends Field>(field: F, dim: number) {
    return new VectorSpace(field, dim);
}

class VectorSpace<F extends Field>
{
    readonly field: F;
    readonly dimension: number;

    constructor(field: F, dim: number)
    {
        this.field = field;
        this.dimension = Math.round(dim);
    }


    tensor(con: 1, cov: 0): Tensor10<F>;
    tensor(con: 0, cov: 1): Tensor01<F>;
    tensor(con: 2, cov: 0): Tensor20<F>;
    tensor(con: 1, cov: 1): Tensor11<F>;
    tensor(con: 0, cov: 2): Tensor02<F>;
    tensor(con: 3, cov: 0): Tensor30<F>;
    tensor(con: 2, cov: 1): Tensor21<F>;
    tensor(con: 1, cov: 2): Tensor12<F>;
    tensor(con: 0, cov: 3): Tensor03<F>;
    tensor(con: 4, cov: 0): Tensor40<F>;
    tensor(con: 3, cov: 1): Tensor31<F>;
    tensor(con: 2, cov: 2): Tensor22<F>;
    tensor(con: 1, cov: 3): Tensor13<F>;
    tensor(con: 0, cov: 4): Tensor04<F>;
    tensor(con: 5, cov: 0): Tensor50<F>;
    tensor(con: 4, cov: 1): Tensor41<F>;
    tensor(con: 3, cov: 2): Tensor32<F>;
    tensor(con: 2, cov: 3): Tensor23<F>;
    tensor(con: 1, cov: 4): Tensor14<F>;
    tensor(con: 0, cov: 5): Tensor05<F>;
    tensor(con: number, cov: number): Tensor<F>
    {
        return new Tensor<F>(con, cov);
    }
}

type t10 = AbstractUpperIndex<LabeledTensor>;
type t01 = AbstractLowerIndex<LabeledTensor>;
type t20 = AbstractUpperIndex<t10>;
type t11 = AbstractIndex<t01, t10>;
type t02 = AbstractLowerIndex<t01>;
type t30 = AbstractUpperIndex<t20>;
type t21 = AbstractIndex<t11, t20>;
type t12 = AbstractIndex<t02, t11>;
type t03 = AbstractLowerIndex<t02>;
type t40 = AbstractUpperIndex<t30>;
type t31 = AbstractIndex<t21, t30>;
type t22 = AbstractIndex<t12, t21>;
type t13 = AbstractIndex<t03, t12>;
type t04 = AbstractLowerIndex<t03>;
type t50 = AbstractUpperIndex<t40>;
type t41 = AbstractIndex<t31, t40>;
type t32 = AbstractIndex<t22, t31>;
type t23 = AbstractIndex<t13, t22>;
type t14 = AbstractIndex<t04, t13>;
type t05 = AbstractLowerIndex<t04>;

export type Tensor10<F extends Field> = Tensor<F> & t10;
export type Tensor01<F extends Field> = Tensor<F> & t01;
export type Tensor20<F extends Field> = Tensor<F> & t20;
export type Tensor11<F extends Field> = Tensor<F> & t11;
export type Tensor02<F extends Field> = Tensor<F> & t02;
export type Tensor30<F extends Field> = Tensor<F> & t30;
export type Tensor21<F extends Field> = Tensor<F> & t21;
export type Tensor12<F extends Field> = Tensor<F> & t12;
export type Tensor03<F extends Field> = Tensor<F> & t03;
export type Tensor40<F extends Field> = Tensor<F> & t40;
export type Tensor31<F extends Field> = Tensor<F> & t31;
export type Tensor22<F extends Field> = Tensor<F> & t22;
export type Tensor13<F extends Field> = Tensor<F> & t13;
export type Tensor04<F extends Field> = Tensor<F> & t04;
export type Tensor50<F extends Field> = Tensor<F> & t50;
export type Tensor41<F extends Field> = Tensor<F> & t41;
export type Tensor32<F extends Field> = Tensor<F> & t32;
export type Tensor23<F extends Field> = Tensor<F> & t23;
export type Tensor14<F extends Field> = Tensor<F> & t14;
export type Tensor05<F extends Field> = Tensor<F> & t05;

interface AbstractUpperIndex<T> {
    A: T; B: T; C: T; D: T; E: T; F: T; G: T; H: T; I: T; J: T;
    K: T; L: T; M: T; N: T; O: T; P: T; Q: T; R: T; S: T; T: T;
    U: T; V: T; W: T; X: T; Y: T; Z: T;
}
interface AbstractLowerIndex<U> {
    a: U; b: U; c: U; d: U; e: U; f: U; g: U; h: U; i: U; j: U;
    k: U; l: U; m: U; n: U; o: U; p: U; q: U; r: U; s: U; t: U;
    u: U; v: U; w: U; x: U; y: U; z: U;
}
interface AbstractIndex<T, U>
extends AbstractUpperIndex<T>, AbstractLowerIndex<U> {}



// Tensor

class Tensor<F extends Field> {
    constructor(con: number, cov: number)
    {

    }
}

class LabeledTensor {}



declare var V: VectorSpace<Reals>;

const T = V.tensor(0, 1);
const TT = T.a

const S = V.tensor(2, 1);
const SS = S.A.B.a
