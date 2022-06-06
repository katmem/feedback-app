import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFeedbackComponent } from './components/add-feedback/add-feedback.component';
import { ListFeedbacksComponent } from './components/list-feedbacks/list-feedbacks.component';

import { FeedbackService } from './feedback.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

// Load the AddFeedbackComponent and ListFeedbacksComponent and import required modules

@NgModule({
  declarations: [
    AppComponent,
    AddFeedbackComponent,
    ListFeedbacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
