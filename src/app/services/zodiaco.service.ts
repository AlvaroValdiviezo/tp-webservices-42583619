import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {observable,Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ZodiacoService {

  constructor(private _http:HttpClient) { }

  public listHoros():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "x-rapidapi-host": "zodiac-sign.p.rapidapi.com",
	      "x-rapidapi-key": "00fc3b7d98mshdf251252ea49873p109ee1jsn8a9b99517f58",
	      "useQueryString": 'true'
      })
    };
    return this._http.get( "https://zodiac-sign.p.rapidapi.com/signs",httpOptions);
  }

  public buscHoros(date:string):Observable<any>{

     const headers= new HttpHeaders({
        "x-rapidapi-host": "zodiac-sign.p.rapidapi.com",
		    "x-rapidapi-key": "00fc3b7d98mshdf251252ea49873p109ee1jsn8a9b99517f58",
		    "useQueryString": 'true'
      })
   
    return this._http.get(  "https://zodiac-sign.p.rapidapi.com/sign?date="+date, {headers, responseType:'text'});
  }
}
