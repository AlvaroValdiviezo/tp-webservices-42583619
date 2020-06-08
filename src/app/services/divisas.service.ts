import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {observable,Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  constructor(private _http:HttpClient) { }

  public listDivisas(de:string,a:string,num:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "x-rapidapi-host": "community-neutrino-currency-conversion.p.rapidapi.com",
	      "x-rapidapi-key": "00fc3b7d98mshdf251252ea49873p109ee1jsn8a9b99517f58",
	      "content-type": "application/x-www-form-urlencoded",
	      "useQueryString": 'true'
      }),
      params:{
        'from-type':de,
        'to-type':a,
        'from-value':num
      }
    };
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",'from-type/to-type/from-value',httpOptions);
  }
}
