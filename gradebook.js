const students = [
  { name: "Amina", marks: [78, 82, 91, 66] },
  { name: "Brian", marks: [55, 49, 61, 58] },
  { name: "Cynthia", marks: [88, 90, 84, 92] },
  { name: "David", marks: [40, 35, 52, 47] },
  { name: "Elsa", marks: [70, 73, 68, 75] }
];

function average(stdMarks) {
    let sum = 0;
    for (let std = 0; std < stdMarks.length; std++){
        sum = sum + stdMarks[std];
    }
    return sum / stdMarks.length;
}

for (let student = 0; student < students.length; student++) {
    stdMarks = students[student].marks;
    console.log(average(stdMarks));
}

function grading(average) {
    if (average >= 80) return "A";
    if (average >= 70) return "B";
    if (average >= 60) return "C";
    if (average >= 50) return "D";
    return "E";
}
