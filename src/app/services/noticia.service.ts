import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {observable,Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http: HttpClient) { }

  public listNoticias(categoria:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "x-rapidapi-host": "livescore6.p.rapidapi.com",
	      "x-rapidapi-key": "7c15272450msh4cff8e39e5f8fddp1bad36jsn772016a9b56a"
      })
    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category="+categoria,httpOptions);
  }
}
