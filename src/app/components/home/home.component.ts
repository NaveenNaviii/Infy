import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  result:any

  constructor(private user:UserServiceService){}

  ngOnInit(): void {
    this.user.getData().subscribe(data=>{
      this.result=data;
    })
    
  }

}
