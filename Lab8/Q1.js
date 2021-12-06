let student = {
    firstname:'',
    lastname:'',
    grades:[],
    inputNewGrade: function (newGrade){
        this.grades.push(newGrade);
    },
    computeAverageGrade: function(){
        let sum = 0;
        this.grades.forEach(g => sum+= g);
        return sum/this.grades.length;
    }
};


let stud1 = Object.create(student);
stud1.firstname = 'Bob';
stud1.lastname = 'Smith';
stud1.grades = [];

stud1.inputNewGrade(100);
stud1.inputNewGrade(90);
stud1.inputNewGrade(95);

let stud2 = Object.create(student);
stud2.firstname = 'John';
stud2.lastname = 'Brown';
stud2.grades = [];

stud2.inputNewGrade(80);
stud2.inputNewGrade(90);
stud2.inputNewGrade(99);

let stud3 = Object.create(student);
stud3.firstname = 'Bart';
stud3.lastname = 'Simpson';
stud3.grades = [];

stud3.inputNewGrade(85);
stud3.inputNewGrade(98);
stud3.inputNewGrade(100);

function avg(arr){
    let avgGrade = 0;
    for (let i in arr){
        avgGrade += arr[i].computeAverageGrade();
    }
    return avgGrade/arr.length;
   
}

let students = [stud1, stud2, stud3];
console.log('The average grade for all students----Object.create(): '+ avg(students));