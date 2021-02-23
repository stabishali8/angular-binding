import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  <h2>
     Welcome {{name}}
  </h2>
  <input [id]="myId" type="text" value="tabish"/>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Syed Tabish Ali";
  public myId = "testId"
  constructor() { }

  ngOnInit(): void {
  }

}
