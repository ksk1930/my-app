import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private _httpClient:HttpClient) { }

  getAccounts():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }

  getAccount(id:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }

  getCheckedAccounts(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?check="+term);

  }

  getSortedAccounts(column:string,order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
  }

  createAccount(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data);
  }

  updateAccount(data:any, id:string):Observable<any>{
    return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id,data);
  }

  deleteAccount(id:any):Observable<any>{
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }
    
  }

