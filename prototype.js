'use strict';

/**
    Constructor
 */

 function book(title,author,year){
     this.title = title;
     this.author = author;
     this.year = year;
 }

/** Prototype Function */

book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

// Revise / Change Year
book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
};


// Instantiate an Object
 const book1 = new book('Book 1','John Doe','1993');
 console.log(book1.getSummary());

// New Object instantiated
 const book2 = new book('Book 2','Jane Doe','2008');
 console.log(book2.getSummary());
 console.log(book2.getAge());
 book2.revise('2018');
 console.log(book2);
