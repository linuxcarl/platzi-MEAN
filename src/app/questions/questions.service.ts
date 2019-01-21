import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questions } from './question.model';
import { environment } from 'src/environments/environment';
import urljoin from "url-join";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  handleError(error: any){
    let errMsg =  error.message ?  error.message :   
      error.status ? `${error.status} - ${error.statusText}`:'Server error- revisarlo'
      console.log(errMsg);
  }
}
