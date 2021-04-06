import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  displaySecretList = false;
  secretList = ['test'];
  textInBox = "";

  constructor() { }

  ngOnInit(): void {
  }

  displayDetails(){
    this.displaySecretList = (this.displaySecretList === false) ? true : false;
  };

  submit(){
    if(this.textInBox.length > 0){
      this.secretList.push(this.textInBox);
    };

    this.textInBox = "";
  };

}
