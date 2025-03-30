"use strict";
// Manager class implementing Employee interface
class Manager {
    constructor(name, id, role, department) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.department = department;
    }
    getDetails() {
        return `Manager Name: ${this.name}, ID: ${this.id}, Role: ${this.role}, Department: ${this.department}`;
    }
}
// Developer class implementing Employee interface
class Developer {
    constructor(name, id, role, programmingLanguages) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.programmingLanguages = programmingLanguages;
    }
    getDetails() {
        return `Developer Name: ${this.name}, ID: ${this.id}, Role: ${this.role}, Programming Languages: ${this.programmingLanguages.join(", ")}`;
    }
}
// Creating instances
const manager1 = new Manager("Alex", 101, "Manager", "HR");
const developer1 = new Developer("Anuprita", 102, "Developer", ["TypeScript", "JavaScript", "Python"]);
// Displaying details
console.log(manager1.getDetails());
console.log(developer1.getDetails());
