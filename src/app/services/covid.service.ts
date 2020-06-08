import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {observable,Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private _http:HttpClient) { }

  public listPaisesC():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
	      "x-rapidapi-key": "00fc3b7d98mshdf251252ea49873p109ee1jsn8a9b99517f58",
	      "useQueryString": 'true'
      })
    };
    return this._http.get( "https://covid-19-tracking.p.rapidapi.com/v1",httpOptions);
  }

  public buscPais(pais:string):Observable<any>{
    const httpoptions = {
      headers :new  HttpHeaders ({
       'X-RapidAPI-Host':'covid-19-tracking.p.rapidapi.com', 
       'X-RapidAPI-Key': '83abffd6e6mshc12229a39fe09a1p17635ejsn2f4f731b5416',
       'useQueryString': 'true'
      })
    };
    return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1/"+pais, httpoptions);
  }
  
}
