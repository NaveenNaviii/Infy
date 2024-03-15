import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  regnForm=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password:new FormControl("",[Validators.required,Validators.pattern("(?=^.{8,}$)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")])
  })

  get email(){
    return this.regnForm.get('email')
  }

  get password(){
    return this.regnForm.get('password')
  }

  regn(){
    console.log(this.regnForm.value);
    
  }
}
