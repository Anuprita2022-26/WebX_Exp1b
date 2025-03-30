import { GraduateStudent, Student } from "./student";

// Independent class LibraryAccount
class LibraryAccount {
    constructor(public accountId: number, public booksIssued: number) {}

    getLibraryInfo(): string {
        return `Library Account ID: ${this.accountId}, Books Issued: ${this.booksIssued}`;
    }
}

// Demonstrating Composition: Associating LibraryAccount with Student
class StudentWithLibrary {
    constructor(public student: Student, public libraryAccount: LibraryAccount) {}

    getFullInfo(): string {
        return `${this.student.getDetails()}\n${this.libraryAccount.getLibraryInfo()}`;
    }
}

// Creating instances
const student1 = new Student("Anuprita", 101, "A");
const gradStudent1 = new GraduateStudent("Bob", 102, "A+", "AI Research");
const libraryAcc1 = new LibraryAccount(5001, 3);

// Associating Student with LibraryAccount
const studentWithLibrary = new StudentWithLibrary(student1, libraryAcc1);

// Calling methods and observing behavior
console.log(student1.getDetails());
console.log(gradStudent1.getDetails());
console.log(gradStudent1.getThesisTopic());
console.log(libraryAcc1.getLibraryInfo());
console.log(studentWithLibrary.getFullInfo());
