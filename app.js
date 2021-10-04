//CREATING AN OBJECT IN JS 

let car = {
  name: "A CLASS",
  manufacturer: "mercedes",
  print: function(){
    console.log(this)
    console.log(this.name +' was manufatuured by ' + this.manufacturer)
    console.log(car.manufacturer)
    console.log(`${this.name} was created by ${this.manufacturer}`)
  }
}
car.print()
