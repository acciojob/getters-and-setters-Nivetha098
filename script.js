class Person {
    constructor(name, age) {
        this._name = name; // Use _name to avoid confusion with the getter
        this._age = age;   // Use _age to avoid confusion with the setter
    }

    get name() {
        return this._name; // Access the private variable
    }

    set age(value) {
        this._age = value; // Set the private variable
    }

    get age() {
        return this._age; // Added getter for age
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`); // Use this.name
    }
}

const student = new Student("Alice", 22);
student.study(); // This will correctly log "Alice is studying"

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`); // Use this.name
    }
}

const person = new Person("John", 23);
console.log(person.name); // This will log "John"
person.age = 30; // Using the setter to change the age
console.log(person.age); // This will log 30

const teacher = new Teacher("Bob", 40);
teacher.teach(); // This will correctly log "Bob is teaching"

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;