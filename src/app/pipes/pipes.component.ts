import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name:string="hello pipes";
  public city:string="HYD";

  constructor() { }

  ngOnInit(): void {
  }

}
