import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blockchain-poll';
  showPollForm: boolean = false;
  polls = [
    {
      image:
        'https://lh3.googleusercontent.com/proxy/BFvRH81_36Kv16DvJ2sVsYtNaO2JTqSTEZO-fBQodqq-bVeThz_W3-kadiKkHjJPslbDvq6kGpv6xRW9q_sbhC0Ko_yBG7FA8YqNCRDSUoJVlhQe',
      votes: [0, 3, 4],
      voted: true,
      question: 'Do you like Cats more or Dogs',
    },
    {
      image:
        'https://lh3.googleusercontent.com/proxy/BFvRH81_36Kv16DvJ2sVsYtNaO2JTqSTEZO-fBQodqq-bVeThz_W3-kadiKkHjJPslbDvq6kGpv6xRW9q_sbhC0Ko_yBG7FA8YqNCRDSUoJVlhQe',
      votes: [0, 99, 4],
      voted: true,
      question: 'Do you like Cats more or Dogs',
    },
  ];
}
