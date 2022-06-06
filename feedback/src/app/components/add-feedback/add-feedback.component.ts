import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/feedback.service';
import { Feedback } from 'src/app/models/feedback.model';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  // This component is used for adding a new feedback by calling the addFeedback method from the feedbackService

  feedback: Feedback = {
    title: '',
    summary: ''
  };
  submitted = false;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
  }

  saveFeedback(): void {
    const data = {
      title: this.feedback.title,
      summary: this.feedback.summary
    };
    this.feedbackService.addFeedback(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newFeedback(): void {
    this.submitted = false;
    this.feedback = {
      title: '',
      summary: ''
    };
  }

}
