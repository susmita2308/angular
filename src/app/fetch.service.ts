import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }

  getCollection(id){
    return this.http.get("https://developers.zomato.com/api/v2.1/collections?city_id="+id)

  }
}

// '8d09d0b68874c4a3a7d7621bc08d19c5'