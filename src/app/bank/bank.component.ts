import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { identity } from 'rxjs';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  public accounts:any=[];
  public term:string="";
  public column:string="";
  public order:string="";

  constructor(private _bankService:BankService, private router:Router) { 

    this._bankService.getAccounts().subscribe(

      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  ngOnInit(): void {
  }

  check(){
    this._bankService.getAccounts().subscribe(
      (data:any)=>{
        this.check=data;
      },
      (err:any)=>{
        alert("Internal error")
      }
    )
  }

  filter(){
      }

  pagination(page:number){

   }

  sort(){
    this._bankService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("Internal Server error");
      }
    )
  } 

  delete(id:any){
    this._bankService.deleteAccount(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully!");
        location.reload();
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  view(id:any){
    this.router.navigateByUrl('/dashboard/bank-details/'+id);
      }
    
  }



