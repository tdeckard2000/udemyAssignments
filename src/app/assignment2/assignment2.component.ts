import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})

export class Assignment2Component implements OnInit {

  username = "";
  buttonDisabled = true;
  serverStatus = 'offline';
  
  constructor() { 
    setInterval(()=>{
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }, 3000)
  }

  ngOnInit(): void {
  }

  onReset(){
    this.username = "";
    this.buttonDisabled = true;
  }

  onKeyUp(){
    if(this.username.length > 0){
      this.buttonDisabled = false;
    }else{
      this.buttonDisabled = true;
    };
  };

}
