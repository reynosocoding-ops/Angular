import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapdataService {

  constructor(private http: HttpClient) { }
    getData(countryCode: String){
      return this.http.get("https://api.worldbank.org/V2/country/"+ countryCode)
    }


}
