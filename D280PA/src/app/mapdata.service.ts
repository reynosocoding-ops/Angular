import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapdataService {

  constructor(private http: HttpClient) { }
    getData(countryCode: String){
      const mapUrl = ("https://api.worldbank.org/V2/country/"+ countryCode);
      return mapUrl;
    }


}
