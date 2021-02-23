import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  <h2>
     Welcome {{name}}
  </h2>
  <h2 class="text-special" [class]="successClass">
     Welcome Tabish
  </h2>
  <h2 [class.text.danger]="hasError" [class]="">
     Welcome Tabish
  </h2>
  <h2 [ngClass]="messageClasses">
    Degree Vs Skills
  </h2>

  <h2 [style.color]="hasError ? 'red' : 'green'">
  Style Binding</h2>

  <h2 [style.color]="highlightColor">
  Style Binding</h2>

  <h2 [ngStyle]="titleStyle">
  Style Binding</h2>

  <button (click)="onClick($event)">Greet</button>
  <button (click)="onClick($event)">Greet</button>

  {{greeting}}
  `
  
  ,
  styles: [`
    .text-success {
      color : green;
    }
    .text-danger{
      color: red;
    }
    text-special{
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Syed Tabish Ali";
  public myId = "testId"
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = "true";
  public highlightColor = "orange";
  public greeting = "";
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }

  public titleStyle = {
    fontStyle:"Italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event:any){
    console.log(event)
    this.greeting = event.type
  }

}
