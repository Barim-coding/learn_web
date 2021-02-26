// array ~> string
{
    const fruits = ['apple', 'banana', 'orange'];
    const fruitsStr = fruits.join();
    console.log(fruitsStr)
}

// string ~> array
{
    const fruits02 = 'apple, kiwi, banana, cherry';
    const fruits02Arr = fruits02.split(',');
    console.log(fruits02Arr)
}

// array reverse sort
{
    const array01 = [1, 2, 3, 4, 5];
    const array01Rev = array01.reverse();
    console.log(array01Rev);
}

// array copy, terminated some index
{
    const array02 = [1, 2, 3, 4, 5];
    const array02New = array02.slice(2); // slice(2,5);
    console.log(array02New);
}

// quiz with class
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

// Q1. find a student with the score 90
{
    // const resultQ1 = students.find(function(student, index) {
    //     return student.score === 90;
    // });
    const resultQ1 = students.find((student) => student.score === 90);
    console.log(resultQ1);
}

// Q2. make an array of enrolled students
{
    const result02 = students.filter((student) => student.enrolled);
    console.log(result02);
}

// Q3. make an array of score
{
    const result03 = students.map((student) => student.score);
    console.log(result03);
}

// Q4. check if there is a student with the score lower than 50
{
    const result04 = students.some((student) => student.score < 50);
    console.log(result04);
}

// Q5. compute students' avr score
{
    const result05 = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result05 / students.length);
}

// Q6. make a string containing all the scores
{
    const result06 = students.map((student) => student.score).join(); //.filter((score) => score >= 50)
    console.log(result06);
}

// Q7. sort score, make an string
{
    const result07 = students.map((student) => student.score).sort().join(); // sort, (a,b)=>a-b
    const result08 = students.map((student) => student.score).sort((a, b) => b - a).join(); // sort, reverse
    console.log(result07);
    console.log(result08);
}