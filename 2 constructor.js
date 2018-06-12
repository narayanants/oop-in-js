'use strict';

/**
    Constructor
 */

function book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.displayBook = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Instantiate an Object
const book1 = new book('Book 1', 'John Doe', '1993');
console.log(book1.displayBook());

// New Object instantiated
const book2 = new book('Book 2', 'Jane Doe', '2018');
console.log(book2.displayBook());