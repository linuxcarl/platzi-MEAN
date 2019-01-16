import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import 'hammerjs';
import { MomentModule } from 'ngx-moment';
import 'moment/locale/es';
import { QuestionDetailComponent } from './questions/question-detail/question-detail.component';
import { AnswerComponent } from './answer/answer.component';
import { SinginComponent } from './singin/singin.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerComponent,
    SinginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
