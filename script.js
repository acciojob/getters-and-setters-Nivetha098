//complete this code
class Person {
	constructor(name,age){
		this.name= name;
		this.age =age;
	}
	get name(){
		return name;
	}
	set age(){
		this.age = age;
	}
}

class Student extends Person {
void study(){
	console.log(`${name} is studying`)
}
	
}

class Teacher extends Person {
	void teach(){
	console.log(`${name} is studying`)
	}
}
const person = new Person("John",23);
console.log(person.name);
console.log(person.age);

const teacher = new Teacher("bob",40);
teacher.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
