const hoge = 123;

const fuga = [1, 2, 3, 4, 5, 6];
const fugafuga = fuga.find(x => x == 2);
console.log(fugafuga);

import { piyo } from './piyo';
piyo();


interface HOGE {
    (): void
};

function f() {
    console.log('hoge');
}

const z = (<HOGE>f);
z();