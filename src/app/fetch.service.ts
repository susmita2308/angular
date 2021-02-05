import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }

  getCollection(id){
  let httpheader = new HttpHeaders({
'user-key':'8d09d0b68874c4a3a7d7621bc08d19c5'
    });
    //  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    return this.http.get("https://developers.zomato.com/api/v2.1/collections?city_id=" +id,{headers:httpheader});

  }
}

// '8d09d0b68874c4a3a7d7621bc08d19c5'