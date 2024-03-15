import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // constructor(private route:Router){}

  loginForm=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    pass:new FormControl("",[Validators.required,Validators.pattern('(?=^.{8,}$)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')])
  })

  get email(){
    return this.loginForm.get('email')
  }

  get pass(){
    return this.loginForm.get('pass')
  }

  login(){
    console.log(this.loginForm.value);
    // this.route.navigate(['/dash'])
    
  }




}
