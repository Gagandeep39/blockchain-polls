/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-29 10:18:04
 * @modify date 2020-11-29 10:18:04
 * @desc [description]
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ApexCharts from 'apexcharts'

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss'],
})
export class PollVoteComponent implements OnInit {
  @Input() options: string[] = ['Monday', 'Tuesday', 'Wednesday'];
  voteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.voteForm = this.formBuilder.group({
      selected: this.formBuilder.control('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.voteForm.value);
  }
}
