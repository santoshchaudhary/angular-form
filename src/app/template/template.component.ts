
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  @ViewChild('f') signUpForm!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {
   // console.log(f);
    console.log(this.signUpForm);
  }

}
