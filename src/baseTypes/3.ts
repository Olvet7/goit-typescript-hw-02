let some:unknown;
some = 'Text';
let str: unknown;
str = some;

if (typeof some === 'string' ) {
    str = some;
}

export {};