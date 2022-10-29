import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  public details:any=[];
  public term:string = "";

  constructor(private _vehiclesService:VehiclesService) { 
  
    this._vehiclesService.getDetails().subscribe(

      (data:any)=>{
        this.details = data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  ngOnInit(): void {
  }

   filter(){
    this._vehiclesService.getFilteredDetails(this.term).subscribe(
      (data:any)=>{
        this.details = data;
      },
      (err:any)=>{
        alert("Internal error");
      }
    )

  }

}
