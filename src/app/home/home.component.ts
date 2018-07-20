import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, stagger, query, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goalsAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
            style({opacity: 0.5, transform: 'translateX(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateX(0)', offset: 1})
          ]))]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateX(0)', offset: 0}),
            style({opacity: 0.5, transform: 'translateX(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateX(-75%)', offset: 1})
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';
  inputText: string = 'My first goal is to learn everything';
  goalsArr:Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goalsArr.length;
  }

  addItem() {
    if(this.inputText !== '' && this.goalsArr.indexOf(this.inputText) == -1) {
      this.goalsArr.push(this.inputText);
    }

    this.inputText = '';
    this.itemCount = this.goalsArr.length;
  }

  removeItem(i) {
    this.goalsArr.splice(i, 1);
    this.itemCount = this.goalsArr.length;
  }
}
