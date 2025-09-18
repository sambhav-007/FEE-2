let students = {
"101": { name: "Ravi", age: 21, marks: { math: 85, science: 90 } },
"102": { name: "Anita", age: 20, marks: { math: 92, science: 88 } },
"103": { name: "Suresh", age: 22, marks: { math: 76, science: 80 } }
};

for (let id in students) {
    console.log(students[id].name);
}

let highestMaths = 0;
for (let id in students) {
    if (students[id].marks.math > highestMaths) {
        highestMaths = students[id].marks.math;
    }
}
console.log("Highest Maths Marks:", highestMaths);

let totalScience = 0;
let studentCount = 0;
for (let id in students) {
    totalScience += students[id].marks.science;
    studentCount++;
}
let averageScience = totalScience / studentCount;
console.log("Average Science Marks:", averageScience);