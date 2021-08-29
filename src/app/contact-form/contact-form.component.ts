import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Phone'}
  ];

  gender = [
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onChange(name : any) {
    console.log(name);
  }

  onSubmit(f : any) {
    console.log("Values passed: "+ f.value.firstName + ", " + f.value.comment);
    console.log(f);
  }

}
