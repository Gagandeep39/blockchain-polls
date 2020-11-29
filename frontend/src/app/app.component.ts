import { Component } from '@angular/core';
import * as unsplashed from 'unsplash';
import { Poll } from './models/poll.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blockchain-poll';
  showPollForm: boolean = false;
  activePoll: Poll = null;
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

  setActivePoll(poll) {
    this.activePoll = null;

    // Workaround for fixing graph not rendering
    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }
}
