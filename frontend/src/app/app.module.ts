import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollCreateComponent } from './components/poll-create/poll-create.component';
import { PollCardComponent } from './components/poll-card/poll-card.component';
import { PollVoteComponent } from './components/poll-vote/poll-vote.component';

@NgModule({
  declarations: [
    AppComponent,
    PollCreateComponent,
    PollCardComponent,
    PollVoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
