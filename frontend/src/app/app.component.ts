import { Component, OnInit } from '@angular/core';
import { Poll } from './models/poll.model';
import { PollService } from './services/poll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blockchain-poll';
  showPollForm: boolean = false;
  activePoll: Poll = null;
  polls = null;

  constructor(private pollService: PollService) {}

  ngOnInit(): void {
    this.polls = this.pollService.getPolls();
  }

  setActivePoll(poll) {
    this.activePoll = null;

    // Workaround for fixing graph not rendering
    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }
}
