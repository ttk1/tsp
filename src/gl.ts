interface A {
    name: string,
    id: number
}

class B implements A {
    name: string;
    id: number;

    constructor() {
        this.name = 'hoge';
        this.id = 123;
    }
}

let a: A;

// これはOK
a = {
    name: 'a',
    id: 1
};

// これもOK
a = new B();

// これもOK
const b: B = a;

// これはダメだけどエラーにならない
a = <any>1;

class C implements A {
    name: string = 'hoge';
    id: number = 0;
    data: number = 0;
}

// これはAにdataが定義されてないのでダメ
//const c: C = a;