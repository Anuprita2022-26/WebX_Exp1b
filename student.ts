// Base class Student
class Student {
    constructor(public name: string, public studentId: number, public grade: string) {}

    getDetails(): string {
        return `Student Name: ${this.name}, ID: ${this.studentId}, Grade: ${this.grade}`;
    }
}

// Subclass GraduateStudent extending Student
class GraduateStudent extends Student {
    constructor(name: string, studentId: number, grade: string, public thesisTopic: string) {
        super(name, studentId, grade);
    }

    getThesisTopic(): string {
        return `Thesis Topic: ${this.thesisTopic}`;
    }

    override getDetails(): string {
        return `${super.getDetails()}, Thesis Topic: ${this.thesisTopic}`;
    }
}

export { Student, GraduateStudent };
