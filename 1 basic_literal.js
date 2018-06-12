'use strict';

const s1 = 'Hello';
console.log(s1.toUpperCase());
console.log(typeof (s1));


const s2 = new String('Hello');
console.log(typeof (s2));


let book1 = {
    title: 'Book one',
    author: 'John Doe',
    year: '2013',
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book1.getSummary());
console.log(Object.values(book1)); // [ 'Book one', 'John Doe', '2013', [Function: getSummary] ]
console.log(Object.keys(book1)); // [ 'title', 'author', 'year', 'getSummary' ]