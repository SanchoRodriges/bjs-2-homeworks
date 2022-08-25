function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {

  this.subject = subjectName;

}

Student.prototype.addMark = function (addMark) {

  if (this.marks === undefined) {
    this.marks = [addMark];
    } else {
      this.marks.push(addMark);
  }
  
}

Student.prototype.addMarks = function (...data) {

  if (this.marks === undefined) {
    this.marks = [...data];
    } else {
      this.marks = this.marks.concat(data);
  }
  
}

Student.prototype.getAverage = function () {

  marks = this.marks;
  return (marks.reduce(( acc, item ) => acc + item, 0)) / marks.length;

}

Student.prototype.exclude = function (reason) {

  delete this.marks;
  delete this.subject;
  this.excluded = reason;
  
}