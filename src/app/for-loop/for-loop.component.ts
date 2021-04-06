import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  list = ['cat', 'dog', 'car', 'boat'];

  constructor() { }

  ngOnInit(): void {
  }

}
