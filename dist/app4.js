"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentService_1 = require("./studentService");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// Array of students
const students = [
    { name: "Alice", age: 20, grade: 75 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 21, grade: 60 },
    { name: "David", age: 19, grade: 45 },
    { name: "Eve", age: 20, grade: 90 }
];
// API endpoint to filter passed students
app.post('/api/filterPassedStudents', (req, res) => {
    const passedStudents = (0, studentService_1.filterPassedStudents)(students);
    res.json(passedStudents);
});
// API endpoint to get student names
app.post('/api/getStudentNames', (req, res) => {
    const studentNames = (0, studentService_1.getStudentNames)(students);
    res.json(studentNames);
});
// API endpoint to sort students by grade
app.post('/api/sortStudentsByGrade', (req, res) => {
    const sortedStudents = (0, studentService_1.sortStudentsByGrade)(students);
    res.json(sortedStudents);
});
// API endpoint to get average age of students
app.post('/api/getAverageAge', (req, res) => {
    const averageAge = (0, studentService_1.getAverageAge)(students);
    res.json({ averageAge });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//# sourceMappingURL=app4.js.map