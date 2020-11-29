/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-29 13:12:58
 * @modify date 2020-11-29 13:12:58
 * @desc [description]
 */
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Poll } from '../models/poll.model';
import * as unsplashed from 'unsplash';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  polls: Poll[] = [
    {
      id: 1,
      thumbnail: unsplashed(300, 400, 'random'),
      results: [0, 3, 4],
      voted: false,
      question: 'Do you like Cats more or Dogs',
      options: ['Cats', 'Dogs', 'None'],
    },
    {
      id: 4,
      thumbnail: unsplashed(300, 500, 'random'),
      results: [0, 99, 4],
      voted: true,
      question: 'Your favourite Month',
      options: ['Jan', 'Feb', 'April'],
    },
  ];

  constructor() {}

  getPolls(): Observable<Poll[]> {
    return interval(1000).pipe(map(() => this.polls));
  }

  createPolls(pollData) {
    console.log(pollData);
  }

  vote(pollData) {
    console.log(pollData);
  }
}
