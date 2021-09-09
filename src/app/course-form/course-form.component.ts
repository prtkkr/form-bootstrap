import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  categoryList = [
    {id: 1, name: 'Art'},
    {id: 1, name: 'Development'},
    {id: 1, name: 'Language'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  submitCourse(frm: any) {
    console.log(frm);
  }

}
