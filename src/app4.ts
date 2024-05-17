import express, { Request, Response } from 'express';
import { 
  filterPassedStudents, 
  getStudentNames, 
  sortStudentsByGrade, 
  getAverageAge, 
  Student 
} from './studentService';

const app = express();
const port = 3000;

app.use(express.json());

// Array of students
const students: Student[] = [
  { name: "Alice", age: 20, grade: 75 },
  { name: "Bob", age: 22, grade: 85 },
  { name: "Charlie", age: 21, grade: 60 },
  { name: "David", age: 19, grade: 45 },
  { name: "Eve", age: 20, grade: 90 }
];

// API endpoint to filter passed students
app.post('/api/filterPassedStudents', (req: Request, res: Response) => {
  const passedStudents = filterPassedStudents(students);
  res.json(passedStudents);
});

// API endpoint to get student names
app.post('/api/getStudentNames', (req: Request, res: Response) => {
  const studentNames = getStudentNames(students);
  res.json(studentNames);
});

// API endpoint to sort students by grade
app.post('/api/sortStudentsByGrade', (req: Request, res: Response) => {
  const sortedStudents = sortStudentsByGrade(students);
  res.json(sortedStudents);
});

// API endpoint to get average age of students
app.post('/api/getAverageAge', (req: Request, res: Response) => {
  const averageAge = getAverageAge(students);
  res.json({ averageAge });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
