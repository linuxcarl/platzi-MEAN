import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { Questions } from '../questions/question.model';
import { User } from '../singin/user.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() question: Questions;
  constructor() { }

  ngOnInit() {
  }

  saveNote(form:NgForm){
    const answer = new Answer(
      form.value.description,
      this.question,
      new Date(),
      new User(null,null,'Lucy','Dueñas')
    );
    this.question.answer.unshift(answer);
    form.reset();
  }
}
