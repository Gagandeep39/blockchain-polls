/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-29 10:18:04
 * @modify date 2020-11-29 10:18:04
 * @desc [description]
 */
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss'],
})
export class PollVoteComponent implements OnInit, AfterViewInit {
  @Input() voted: boolean;
  @Input() options: string[];
  @Input() results: number[];
  @Input() question: string;
  voteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngAfterViewInit(): void {
    if (this.voted) this.generateCharts();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.voteForm = this.formBuilder.group({
      selected: this.formBuilder.control('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.voteForm.value);
  }

  generateCharts() {
    var options: ApexCharts.ApexOptions = {
      chart: {
        type: 'bar',
        height: 350,
      },
      series: [
        {
          name: 'votes',
          data: this.results,
        },
      ],
      xaxis: {
        categories: this.options,
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
    };

    const chart = new ApexCharts(
      document.getElementById('poll-results'),
      options
    );
    chart.render();
  }
}
