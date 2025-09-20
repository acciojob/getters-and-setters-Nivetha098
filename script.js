//complete this code
class Person {
	constructor(name,age){
		this.name= name;
		this.age =age;
	}
	get name(){
		return this.name;
	}
	set age(value){
		this.age = value;
	}
}

class Student extends Person {
 study(){
	console.log(`${this.name} is studying`);
}
	
}
const student = new Student("Alice", 22);
student.study();

class Teacher extends Person {
	 teach(){
	console.log(`${this.name} is teaching`)
	}
}
const person = new Person("John",23);
console.log(person.name);
person.age=30;
console.log(person.age);



const teacher = new Teacher("bob",40);
teacher.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
