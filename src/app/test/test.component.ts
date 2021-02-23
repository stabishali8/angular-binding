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
  `,
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
  public hasError = false;
  public isSpecial = "true";
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  constructor() { }

  ngOnInit(): void {
  }

}
