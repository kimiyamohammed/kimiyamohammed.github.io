function Student2(firstname,lastname,grades = []){
    this.firstname = firstname;
    this.lastname = lastname;
    this.grades = grades;
}
Student2.prototype.inputNewGrade = function(newGrade){
    this.grades.push(newGrade);
}
Student2.prototype.computeAverageGrade = function(){
    let sum = 0;
    this.grades.forEach(g => sum+= g);
    return sum/this.grades.length;
}

let student1 = new Student2('Bob', 'Smith');
student1.inputNewGrade(100);
student1.inputNewGrade(90);
student1.inputNewGrade(95);

let student2 = new Student2('John', 'Brown');
student2.inputNewGrade(80);
student2.inputNewGrade(90);
student2.inputNewGrade(99);

let student3 = new Student2('Bart', 'Simpson');
student3.inputNewGrade(85);
student3.inputNewGrade(98);
student3.inputNewGrade(100);

let arrayStudents = [student1, student2, student3];
console.log('The average grade for all students----Function Constructor: '+ avg(arrayStudents));


