import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/feedback.service';
import { Feedback } from 'src/app/models/feedback.model';

@Component({
  selector: 'app-list-feedbacks',
  templateUrl: './list-feedbacks.component.html',
  styleUrls: ['./list-feedbacks.component.css']
})
export class ListFeedbacksComponent implements OnInit {

  // This component is used for getting the submitted feedbacks by calling the listFeedbacks method 
  // from the feedbackService

  feedbacks?: Feedback[];
  currentFeedback: Feedback = {};
  title = '';

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.retrieveFeedbacks();
  }

  retrieveFeedbacks(): void {
    this.feedbackService.listFeedbacks()
      .subscribe({
        next: (data) => {
          this.feedbacks = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveFeedbacks();
    this.currentFeedback = {};
  }
}