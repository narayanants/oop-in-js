'use strict';

// Object of Protos

const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
};


//create Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Rich Dad Poor Dad';
// book1.author = 'Narayanan';
// book1.year = '2013';

const book1 = Object.create(bookProtos, {
    title: {
        value: 'Rich Dad Poor Dad'
    },
    author: {
        value: 'Robert Kiyosaki'
    },
    year: {
        value: '2013'
    }
});

console.log(book1);