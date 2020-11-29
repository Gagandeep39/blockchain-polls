/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-29 09:21:18
 * @modify date 2020-11-29 09:21:18
 * @desc Create new Form
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.scss'],
})
export class PollCreateComponent implements OnInit {
  pollForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.pollForm = this.formBuilder.group({
      question: this.formBuilder.control('', Validators.required),
      image: this.formBuilder.control(''),
      op1: this.formBuilder.control(''),
      op2: this.formBuilder.control(''),
      op3: this.formBuilder.control(''),
    });
  }

  submitForm() {
    console.log(this.pollForm.value);
  }
}
