import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  signinForm: FormGroup;

  ngOnInit() {
    this.signinForm =  new FormGroup({
      email: new FormControl(null,[
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null,Validators.required)
    });
  }

  onSubmit(){
    if(this.signinForm.valid){
      const {email,password} = this.signinForm.value;
      const user =  new User(email, password);
      console.log(email, password);
    }
  }
}
