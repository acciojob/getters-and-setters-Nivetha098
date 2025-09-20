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
	console.log(`${name} is teaching`)
	}
}
const person = new Person("John",23);
console.log(person.name);
person.age=30;
console.log(person.age);

const student=new 

const teacher = new Teacher("bob",40);
teacher.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
