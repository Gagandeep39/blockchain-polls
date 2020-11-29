/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-29 10:15:59
 * @modify date 2020-11-29 10:15:59
 * @desc Poll Cards
 */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-card',
  templateUrl: './poll-card.component.html',
  styleUrls: ['./poll-card.component.scss'],
})
export class PollCardComponent implements OnInit {
  @Input() question: string;
  @Input() votes: number[];
  @Input() voted: boolean;
  @Input() image: string;
  numberOfVotes: number;

  constructor() {}

  ngOnInit(): void {
    if (this.votes.length)
      this.numberOfVotes = this.votes.reduce((acc, curr) => (acc += curr));
  }
}
