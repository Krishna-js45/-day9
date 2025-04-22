let students = [];
function addStudent(name, roll, dept) {
  const student = { name, roll, dept };
  students.push(student);
  console.log(`Added: ${name}`);
}
function listStudents() {
  console.log("All Students:");
  students.forEach((s, i) => {
    console.log(`${i + 1}. ${s.name} - ${s.roll} - ${s.dept}`);
  });
}
function findStudent(roll) {
  const student = students.find(s => s.roll === roll);
  if (student) console.log(`Found: ${student.name}`);
  else console.log("Student not found.");
}
function removeStudent(roll) {
  const index = students.findIndex(s => s.roll === roll);
  if (index !== -1) {
    console.log(`Removed: ${students[index].name}`);
    students.splice(index, 1);
  } else {
    console.log("Student not found.");
  }
}
function updateStudent(roll, newName) {
  const student = students.find(s => s.roll === roll);
  if (student) {
    student.name = newName;
    console.log(`Updated to: ${newName}`);
  } else {
    console.log("Student not found.");
  }
}
addStudent("Raj", "621", "CSE");
addStudent("Kishore", "622", "IT");
addStudent("Meena", "623", "ECE");
listStudents();
findStudent("622");
updateStudent("622", "Kishore M");
removeStudent("623");
listStudents();
