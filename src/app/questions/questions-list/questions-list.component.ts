import { Component, OnInit } from '@angular/core';
import { Questions } from '../question.model';

const q = new Questions(
  '¿Comó levantar un server apache?',
  'Facil y sencillo como...',
  new Date(),
  'devicon-apache-plain'
)
@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  questions: Questions[] = new Array(5).fill(q);

  ngOnInit() {
  }

}
