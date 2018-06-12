'use strict';


class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'Barnes and Noble';
    }
}

//Instantiate Object
const book1 = new Book('Rich Dad Poor Dad', 'Robert Kiyosaki', '2018');
book1.revise('2001');
console.log(Book.topBookStore());
console.log(book1);