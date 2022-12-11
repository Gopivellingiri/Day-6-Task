
class Movie{
    constructor (title, studio, rating){
      this.title = title;
      this.studio = studio;
      if (rating == undefined){
        this.rating = "PG"
      } else {
        this.rating = rating
      }
    }
    getPG (array) {
      var result = [];
      for(var i = 0; i < array.length; i++){
        if (array[i].rating == "PG"){
          result.push(array[i]);
        }
      }
      return result
  } 
  
}

var movie1 = new Movie ("Batman", "DC");
var movie2 = new Movie ("Super Man", "DC", "PG 60");
var movie3 = new Movie ("thor","Marvel",);
var movie4 = new Movie ("Spider Man", "Marvel", "PG 160");
var arr = [movie1,movie2,movie3,movie4]
console.log(movie3.getPG(arr))


class Moviee {
  constructor(title, studio, rating){
    this.title = title;
    this.studio= studio;
    this.rating = rating;
  }
}

var newMovie = new Moviee ("Casino Royale","Eon Productions","PG13")
console.log(newMovie)




class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  get radiusCircle() {
    return this.radius;
  }
  get colorCircle() {
    return this.color;
  }
  set radiusCircle(radius) {
    this.radius = radius;
  }
  set colorCircle(color) {
    this.color = color;
  }
  get toString() {
    return `"Circle[radius=${this.radius}, color=${this.color}]"`;
  }
  get areaCircle() {
    return Math.PI * this.radius * this.radius;
  }
  get circumferenceCircle() {
    return 2 * Math.PI * this.radius;
  }
}
var obj1 = new Circle(1.0, "red");
console.log(obj1.radiusCircle); 

obj1.radiusCircle = 2.2;
console.log(obj1.radiusCircle); 


//Write a “person” class to hold all the details.
class Person{
  constructor(name, age, gender, designation, experience, qualification,adress) {
    this.name=name;
    this.age = age;
    this.gender = gender;
    this.designation = designation;
    this.experience = experience;
    this.qualification= qualification;
    this.adress = adress;
  }
}

var newPerson = new Person("Gopi", "28", "male", "Graphic Designer", "4 years", "diploma", "coimbatore");
console.log(newPerson)


// write a class to calculate the uber price.
class uberPrice {
  constructor(baseFee,CostPerMinute,CostPerMile,BookingFee,timeInRide,rideDistance){
    this.baseFee = baseFee;
    this.CostPerMinute = CostPerMinute;
    this.CostPerMile  = CostPerMile;
    this.BookingFee = BookingFee;
    this.timeInRide = timeInRide;
    this.rideDistance = rideDistance;

  } 
  getToal(){
   return this.baseFee + (this.CostPerMinute * this.timeInRide) + (this.CostPerMile *  this.rideDistance) + this.BookingFee
  }
}

var uberTotal = new uberPrice (50,2,5,30,20,7)
console.log(uberTotal.getToal())