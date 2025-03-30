"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
// Independent class LibraryAccount
class LibraryAccount {
    constructor(accountId, booksIssued) {
        this.accountId = accountId;
        this.booksIssued = booksIssued;
    }
    getLibraryInfo() {
        return `Library Account ID: ${this.accountId}, Books Issued: ${this.booksIssued}`;
    }
}
// Demonstrating Composition: Associating LibraryAccount with Student
class StudentWithLibrary {
    constructor(student, libraryAccount) {
        this.student = student;
        this.libraryAccount = libraryAccount;
    }
    getFullInfo() {
        return `${this.student.getDetails()}\n${this.libraryAccount.getLibraryInfo()}`;
    }
}
// Creating instances
const student1 = new student_1.Student("Anuprita", 101, "A");
const gradStudent1 = new student_1.GraduateStudent("Bob", 102, "A+", "AI Research");
const libraryAcc1 = new LibraryAccount(5001, 3);
// Associating Student with LibraryAccount
const studentWithLibrary = new StudentWithLibrary(student1, libraryAcc1);
// Calling methods and observing behavior
console.log(student1.getDetails());
console.log(gradStudent1.getDetails());
console.log(gradStudent1.getThesisTopic());
console.log(libraryAcc1.getLibraryInfo());
console.log(studentWithLibrary.getFullInfo());
