import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../singin/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null,[Validators.required]),
      lastName: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null,Validators.required),
      verifyPassword: new FormControl(null,Validators.required)
    });
  }

  onSubmit(){
    if(this.registerForm.valid){
      const {firstName, lastName, email, password,verifyPassword} = this.registerForm.value;
      const newUser = new User(firstName,lastName,email,password);
      console.log(newUser);
    }
  }
}
