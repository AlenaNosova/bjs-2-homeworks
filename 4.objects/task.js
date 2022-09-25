function Student(name, gender, age) {
    let student1 = new Object();
    let student2 = new Object();
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  let marks = [];
  this.mark = marks;

  if(this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  this.marks = marks;
}

Student.prototype.getAverage = function () {
  let sum = 0;
  let average;
  for(let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  average = sum / this.marks.length;
  return average;
}

Student.prototype.exclude = function(reason) {
  delete subject;
  delete marks;
  this.excluded = reason;
}