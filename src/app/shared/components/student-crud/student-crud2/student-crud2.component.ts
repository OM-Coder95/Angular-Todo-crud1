import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { studentArr } from 'src/app/shared/consts/student';
import { Istudent } from 'src/app/shared/models/student';

@Component({
  selector: 'app-student-crud2',
  templateUrl: './student-crud2.component.html',
  styleUrls: ['./student-crud2.component.scss']
})
export class StudentCrud2Component implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  studentArr: Array<Istudent> = studentArr;

  courseArr: string[] = [
    "Angular",
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Express.js",
    "Python",
    "Java",
    "Full Stack Development",
    "MEAN Stack",
    "MERN Stack"
  ];

  isInEditMode: boolean = false;
  editId !: string;

  trackById(index: number, student: Istudent) {
    return student.id;
  }

  @ViewChild("firstNameRef") firstNameRef !: ElementRef;
  @ViewChild("lastNameRef") lastNameRef !: ElementRef;
  @ViewChild("emailNameRef") emailRef !: ElementRef;
  @ViewChild("contactNameRef") contactRef !: ElementRef;
  @ViewChild("ageNameRef") ageRef !: ElementRef;
  @ViewChild("genderRef") genderRef !: ElementRef;
  @ViewChild("courseRef") courseRef !: ElementRef;
  @ViewChild("percentageRef") percentageRef !: ElementRef;
  @ViewChild("isActiveRef") isActiveRef !: ElementRef;
  @ViewChild("addmissionDateRef") addmissionDateRef !: ElementRef;

  onStudentAdd() {
    let newStudent = {
      id: Date.now().toString(),
      firstName: this.firstNameRef.nativeElement.value,
      lastName: this.lastNameRef.nativeElement.value,
      email: this.emailRef.nativeElement.value,
      contact: this.contactRef.nativeElement.value,
      age: this.ageRef.nativeElement.value,
      gender: this.genderRef.nativeElement.value,
      course: this.courseRef.nativeElement.value,
      percentage: this.percentageRef.nativeElement.value,
      isActive: this.isActiveRef.nativeElement.value === 'yes' ? true : false,
      admissionDate: this.addmissionDateRef.nativeElement.value,
    }

    this.studentArr.push(newStudent);

    this.firstNameRef.nativeElement.value = '';
    this.lastNameRef.nativeElement.value = '';
    this.emailRef.nativeElement.value = '';
    this.contactRef.nativeElement.value = '';
    this.ageRef.nativeElement.value = '';
    this.genderRef.nativeElement.value = '';
    this.courseRef.nativeElement.value = '';
    this.percentageRef.nativeElement.value = '';
    this.isActiveRef.nativeElement.value = '';
    this.addmissionDateRef.nativeElement.value = '';

  }

  onStudentEdit(student: Istudent) {
    this.firstNameRef.nativeElement.value = student.firstName
    this.lastNameRef.nativeElement.value = student.lastName
    this.emailRef.nativeElement.value = student.email
    this.contactRef.nativeElement.value = student.contact
    this.ageRef.nativeElement.value = student.age
    this.genderRef.nativeElement.value = student.gender
    this.courseRef.nativeElement.value = student.course
    this.percentageRef.nativeElement.value = student.percentage
    this.isActiveRef.nativeElement.value = student.isActive ? 'yes' : 'no'
    this.addmissionDateRef.nativeElement.value = student.admissionDate

    this.editId = student.id;
    this.isInEditMode = true;
  }

  onStudentUpdate() {
    let updateId = this.editId;
    let updatedObj = {
      id: updateId,
      firstName: this.firstNameRef.nativeElement.value,
      lastName: this.lastNameRef.nativeElement.value,
      email: this.emailRef.nativeElement.value,
      contact: this.contactRef.nativeElement.value,
      age: this.ageRef.nativeElement.value,
      gender: this.genderRef.nativeElement.value,
      course: this.courseRef.nativeElement.value,
      percentage: this.percentageRef.nativeElement.value,
      isActive: this.isActiveRef.nativeElement.value === 'yes' ? true : false,
      admissionDate: this.addmissionDateRef.nativeElement.value,
    }

    let getIndex = this.studentArr.findIndex(stu => stu.id === updateId);
    this.studentArr[getIndex] = updatedObj;

    this.isInEditMode = false;
    this.editId = ''

    this.firstNameRef.nativeElement.value = '';
    this.lastNameRef.nativeElement.value = '';
    this.emailRef.nativeElement.value = '';
    this.contactRef.nativeElement.value = '';
    this.ageRef.nativeElement.value = '';
    this.genderRef.nativeElement.value = '';
    this.courseRef.nativeElement.value = '';
    this.percentageRef.nativeElement.value = '';
    this.isActiveRef.nativeElement.value = '';
    this.addmissionDateRef.nativeElement.value = '';
  }

  onStudentDelete(deleteId: string) {
    let getConfirm = confirm(`Are you sure, you want to delete this student with id ${deleteId}`);
    if (getConfirm) {
      let getIndex = this.studentArr.findIndex(stu => stu.id === deleteId);
      this.studentArr.splice(getIndex, 1);
    }
  }

  onStateChange(stuId: string, eve: Event) {
    let checkbox = eve.target as HTMLInputElement;

    let todo = this.studentArr.find(stu => stu.id === stuId);
    if (todo) {
      todo.isActive = checkbox.checked;
    }
  }

}
