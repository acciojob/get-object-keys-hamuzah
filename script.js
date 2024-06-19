//your JS code here. If required.

let student ={
	name:"hamza",
}

 Object.prototype.getkeys= function(){
     return Object.keys(this)
 }

 console.log(student.getkeys())