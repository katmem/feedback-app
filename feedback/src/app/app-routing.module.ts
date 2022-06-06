import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFeedbackComponent } from './components/add-feedback/add-feedback.component';
import { ListFeedbacksComponent } from './components/list-feedbacks/list-feedbacks.component';

const routes: Routes = [
  { path: '', redirectTo: 'add-feedback', pathMatch: 'full'},
  { path: 'add-feedback', component: AddFeedbackComponent },
  { path: 'feedbacks', component: ListFeedbacksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
