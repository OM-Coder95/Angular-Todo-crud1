import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { IstudentArr } from 'src/app/shared/models/student';

@Component({
  selector: 'app-student-crud1',
  templateUrl: './student-crud1.component.html',
  styleUrls: ['./student-crud1.component.scss']
})
export class StudentCrud1Component implements OnInit {

  studentArr: Array<IstudentArr> = [
    {
      id: '101',
      firstName: 'Rahul',
      lastName: 'Sharma',
      email: 'rahul.sharma@gmail.com',
      contact: '9876543210',
      isActive: true
    },
    {
      id: '102',
      firstName: 'Priya',
      lastName: 'Patil',
      email: 'priya.patil@gmail.com',
      contact: '8765432109',
      isActive: false
    },
    {
      id: '103',
      firstName: 'Amit',
      lastName: 'Deshmukh',
      email: 'amit.deshmukh@gmail.com',
      contact: '9988776655',
      isActive: true
    },
    {
      id: '104',
      firstName: 'Sneha',
      lastName: 'Kulkarni',
      email: 'sneha.kulkarni@gmail.com',
      contact: '8877665544',
      isActive: true
    },
    {
      id: '105',
      firstName: 'Rohit',
      lastName: 'Jadhav',
      email: 'rohit.jadhav@gmail.com',
      contact: '7766554433',
      isActive: false
    }
  ];

  isInEditMode: boolean = false;
  editId !: string;

  trackById(index: number, student: IstudentArr) {
    return student.id;
  }

  @ViewChild('firstNameRef') _firstName !: ElementRef;
  @ViewChild('lastNameRef') _lastNameRef !: ElementRef;
  @ViewChild('emailRef') _emailRef !: ElementRef;
  @ViewChild('contactRef') _contactRef !: ElementRef;
  @ViewChild('isActiveRef') _isActiveRefef !: ElementRef;


  onStudentAdd() {
    let newStudent = {
      id: Date.now().toString(),
      firstName: this._firstName.nativeElement.value,
      lastName: this._lastNameRef.nativeElement.value,
      email: this._emailRef.nativeElement.value,
      contact: this._contactRef.nativeElement.value,
      isActive: this._isActiveRefef.nativeElement.value === 'yes' ? true : false,
    }

    this.studentArr.push(newStudent);
    this._firstName.nativeElement.value = ""
    this._lastNameRef.nativeElement.value = ""
    this._emailRef.nativeElement.value = ""
    this._contactRef.nativeElement.value = ""
  }

  onStduentEdit(student: IstudentArr) {
    this._firstName.nativeElement.value = student.firstName
    this._lastNameRef.nativeElement.value = student.lastName
    this._emailRef.nativeElement.value = student.email
    this._contactRef.nativeElement.value = student.contact
    this._isActiveRefef.nativeElement.value = student.isActive ? 'yes' : 'no'

    this.isInEditMode = true;
    this.editId = student.id;
  }

  onStudentUpdate() {
    let updateId = this.editId;

    let updatedObj = {
      id: updateId,
      firstName: this._firstName.nativeElement.value,
      lastName: this._lastNameRef.nativeElement.value,
      email: this._emailRef.nativeElement.value,
      contact: this._contactRef.nativeElement.value,
      isActive: this._isActiveRefef.nativeElement.value === 'yes' ? true : false,
    }

    let getIndex = this.studentArr.findIndex(stu => stu.id === updateId);
    this.studentArr[getIndex] = updatedObj;

    this._firstName.nativeElement.value = ""
    this._lastNameRef.nativeElement.value = ""
    this._emailRef.nativeElement.value = ""
    this._contactRef.nativeElement.value = ""


    this.isInEditMode = false;
    this.editId = ''
  }

  onStudentDelete(id: string) {
    let getConfirm = confirm(`Are you sure, you want to delete this student with id ${id}`);

    if (getConfirm) {
      let getIndex = this.studentArr.findIndex(stu => stu.id === id);
      this.studentArr.splice(getIndex, 1);
    }
  }

  onStateChange(id: string, eve: Event) {
    let checkbox = eve.target as HTMLInputElement;
    let todo = this.studentArr.find(stu => stu.id === id);
    if (todo) {
      todo.isActive = checkbox.checked;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
