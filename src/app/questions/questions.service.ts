import { Injectable, asNativeElements } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Questions } from './question.model';
import { environment } from 'src/environments/environment';
import urljoin from "url-join";
import { Observable, observable } from 'rxjs';
import { map,catchError  } from 'rxjs/operators';
import { Response } from 'selenium-webdriver/http';
import { Answer } from '../answer/answer.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questionUrl: string;
  constructor(private http: HttpClient) {
    this.questionUrl = urljoin(environment.apiUrl, 'questions');
   }
   getQuestions(): Observable<Questions[]>{
     return this.http.get(this.questionUrl)
            .pipe( map( res => res as Questions[]) );
   }
  getQuestion(id:any):Observable<Questions>{
    return this.http.get(urljoin(this.questionUrl,id))
                  .pipe( map( res => res as Questions))

  }
  addQuestion(question: Questions){
    const body =  JSON.stringify(question);
    const headers =  new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.questionUrl, body, {headers})
            .pipe( map ((response: Response) => response), catchError((error: Response)=> Observable.throw(error)))
  }
  addAnswer(answer: Answer){
    const a = {
       description: answer.description,
       question: {
         id:answer.question.id
       }
    }
    const body =  JSON.stringify(a);
    const headers =  new HttpHeaders({'Content-Type': 'application/json'});
    const url = urljoin(this.questionUrl, answer.question.id.toString(), 'answers')
    return this.http.post(url,body,{headers})
            .pipe(map((response: Response) => response ),catchError((error: Response) =>  Observable.throw(error)))
  }
  handleError(error: any){
    let errMsg =  error.message ?  error.message :   
      error.status ? `${error.status} - ${error.statusText}`:'Server error- revisarlo'
      console.log(errMsg);
  }
}
