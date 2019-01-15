import { Component, OnInit, QueryList } from '@angular/core';
import { Questions } from '../question.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  question: Questions = new Questions(
    'Como imprimir mensajes en c#',
    'Aprender a imprimir mensajes en c# con visual studio code',
    new Date,
    'devicon-csharp-plain'
  );
  constructor() { }

  ngOnInit() {
  }

}
