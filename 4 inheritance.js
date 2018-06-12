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

// Magazine Constructor
function magazine(title,author,year,month){
    book.call(this,title,author,year);
    this.month = month;
}

//Inherit Prototype
magazine.prototype = Object.create(book.prototype);

// Instantiate Magazine Object
const mag1 = new magazine('Mag One','John Doe','2018','May');


//use magazine constructor
magazine.prototype.constructor = magazine;

console.log(mag1);

console.log(mag1.getSummary());