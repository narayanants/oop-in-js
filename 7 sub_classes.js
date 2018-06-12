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

}


class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}



// Instantiate Magazine
const mag1 = new Magazine('Rich Dad Poor Dad', 'Robert Kiyosaki', '2010', 'September');

console.log(mag1.getSummary());