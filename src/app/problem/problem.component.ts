import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'problemComponent',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class problemComponent implements OnInit {
  userName = '';
  
    ngOnInit(): void {
  }

    onButtonClick() {
      this.userName = '';
  }
}
