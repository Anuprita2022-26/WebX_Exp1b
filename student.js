"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraduateStudent = exports.Student = void 0;
// Base class Student
class Student {
    constructor(name, studentId, grade) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
    }
    getDetails() {
        return `Student Name: ${this.name}, ID: ${this.studentId}, Grade: ${this.grade}`;
    }
}
exports.Student = Student;
// Subclass GraduateStudent extending Student
class GraduateStudent extends Student {
    constructor(name, studentId, grade, thesisTopic) {
        super(name, studentId, grade);
        this.thesisTopic = thesisTopic;
    }
    getThesisTopic() {
        return `Thesis Topic: ${this.thesisTopic}`;
    }
    getDetails() {
        return `${super.getDetails()}, Thesis Topic: ${this.thesisTopic}`;
    }
}
exports.GraduateStudent = GraduateStudent;
