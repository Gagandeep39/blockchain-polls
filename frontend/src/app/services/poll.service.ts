/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-29 13:12:58
 * @modify date 2020-11-29 13:12:58
 * @desc [description]
 */
import { Injectable } from '@angular/core';
import { Poll } from '../models/poll.model';
import * as unsplashed from 'unsplash';
import { Web3Service } from './web3.service';
import { PollVote } from '../models/poll-vote.model';
import { PollForm } from '../models/poll-form.model';
import { fromAscii } from 'web3-utils';
import { toASCII } from 'punycode';

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

  constructor(private web3Service: Web3Service) {}

  async getPolls() {
    // const test = await this.web3Service.call('getTotalPolls');
    // console.log(test);
    const polls: Poll[] = [];
    const totalPolls = await this.web3Service.call('getTotalPolls');
    const acc = await this.web3Service.getAccount();
    const voter = await this.web3Service.call('getVoter', acc);
    const normalizedVoter = this.normalizeVoter(voter);
    for (let i = 0; i < totalPolls; i++) {
      const pollRaw = await this.web3Service.call('getPoll', i);
      const pollNormalized = this.normalizePoll(pollRaw, normalizedVoter);
      polls.push(pollNormalized);
    }
    return polls;
  }

  normalizePoll(pollRaw, voter): Poll {
    return {
      id: parseInt(pollRaw[0]),
      question: pollRaw[1],
      thumbnail: pollRaw[2],
      results: pollRaw[3].map((vote) => parseInt(vote)),
      options: pollRaw[4].map((opt) => toASCII(opt)),
      voted:
        voter.votedIds.length &&
        voter.votedIds.find((votedId) => votedId === parseInt(pollRaw[0])) != undefined,
    };
  }

  normalizeVoter(voter: any) {
    return {
      id: voter[0],
      votedIds: voter[1].map((vote) => parseInt(vote)),
    };
  }

  createPolls(pollData: PollForm) {
    console.log(pollData);
    this.web3Service.executeTransaction(
      'createPoll',
      pollData.question,
      pollData.thumbnail || '',
      pollData.options.map((opt) => fromAscii(opt))
    );
  }

  vote(pollData: PollVote) {
    console.log(pollData);
    this.web3Service.executeTransaction('vote', pollData.id, pollData.vote);
  }

  onEvent(name: string) {
    return this.web3Service.onEvents(name);
  }
}
