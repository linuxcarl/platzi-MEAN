import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Questions } from '../question.model';
import icons from '../icons';
import { QuestionsService } from '../questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.css'],
  providers: [QuestionsService]
})
export class QuestionsFormComponent implements OnInit {
  //question: any =  {title:'',description:'', icon:''}
  icons: object[] = icons;
  getIconVersion(icon: any){
    let version;
    if(icon.versions.font.includes('plain-wordmark')){
      version = 'plain-wordmark';
    }else{
      version = icon.versions.font[0];
    }
    if(icon.name==="illustrator"){
      version = icon.versions.svg[0];
    }
    return version;
  }
  constructor(private questionService: QuestionsService,
              private router:Router) { 
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const q = new Questions(
      form.value.title,
      form.value.description,
      new Date(),
      form.value.icon
    );
    this.questionService.addQuestion(q)
        .subscribe( 
          ({id}) => this.router.navigate(['/questions', id])
          ,error => console.log(error))

    form.resetForm();
  }
  /*
  onSubmit(){
    const q = new Questions(
      this.question.title,
      this.question.description,
      new Date(),
      this.question.icon
    );
    console.log(q);
  }*/
}
