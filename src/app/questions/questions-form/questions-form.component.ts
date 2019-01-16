import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Questions } from '../question.model';
import icons from '../icons';
@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.css']
})
export class QuestionsFormComponent implements OnInit {
  question: any =  {title:'',description:''}
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
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const q = new Questions(
      this.question.title,
      this.question.description,
      new Date()
    );
    console.log(q);
  }
}
