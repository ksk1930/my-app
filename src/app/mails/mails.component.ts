import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent implements OnInit {

  public mails:any=[];

  constructor() { }

  ngOnInit(): void {
  }

}
