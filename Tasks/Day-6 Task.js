https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie {
  constructor(title, studio, rating) {
    if (rating === "") {
      this.rating  = "PG";
    }
    else{
      this.rating = rating;
    }
  }
  getPG(arr) {
  }
}
let film = new Movie("Casino Royale" , "Eon Productions" , "PG13");
let ipArr = [{title:"Casino Royale", studio:"Eon Productions", rating:"PG13"},
             {title:"Casino Royale", studio:"Eon Productions", rating:"PG13"},
             {title:"Casino Royale", studio:"Eon Productions", rating:"PG13"}];
  film.getPG(ipArr);
-------------------------------------------------------------------------------------

https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = 1.0;
        this.color = "Red";
        if (typeof (radius) !== "undefined") {
            this.radius = radius;
        }
        if (typeof (color) !== "undefined") {
            this.color = color;
        }
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.toString = function () {
        return "Radius: " + this.radius + " Color: " + this.color;
    };
    Circle.prototype.getArea = function () {
        return (2 * (Math.PI) * this.radius);
    };
    Circle.prototype.getCircumference = function () {
        return (2 * this.radius);
    };
    return Circle;
}());
var c1 = new Circle();
console.log("Constructor with no params: " + c1.toString());
var c2 = new Circle(3.5);
console.log("Constructor with one param: " + c2.toString());
var c3 = new Circle(2.2, 'Yellow');
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());

-----------------------------------------------------------------------------------

Write a “person” class to hold all the details.

class Person {
    constructor(name, age, country, passion) {
      this.name = name;
      this.age = age;
      this.country = country;
      this.passion = passion;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
      console.log(`passion: ${this.passion}`);
    }
  }
  
  let person1 = new Person('Surya', 23, 'Tamilnadu', 'Director');
  let person2 = new Person('Swetha', 22, 'Kerala', 'Teacher');
  let person3 = new Person('Pavithra', 22, 'Andhra', 'Accountant');
  let person4 = new Person('Varsha', 20, 'Karnataka', 'Doctor');

  console.log('Person-1 Details:');
  person1.displayDetails();
  
  console.log('\nPerson-2 Details:');
  person2.displayDetails();

  console.log('\nPerson-3 Details:');
  person3.displayDetails();

  console.log('\nPerson-4 Details:');
  person4.displayDetails();

--------------------------------------------------------------------------------------------

Write a class to caluculate uber price.

let baseFee = 2
let cities = ["New Bus stand", "Five False", "Kaasi visvanaathar temple", ]
let uberRates = [5, 10, 15]

let customerName = "Surya" 
let customerCity = "Five False" 

console.log("Hello", customerName)

function getRate(customerCity) {
  
  function uberRate(customerCity, index) {
   
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
  
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}

getRate(customerCity)