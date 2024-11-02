import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapdataService {

  constructor(private http: HttpClient) { }
     xmlData = '';
    getData(countryCode: String){
      const mapUrl = ("https://api.worldbank.org/V2/country/"+ countryCode);
      this.http.get(mapUrl,{responseType:"text"}).subscribe(data => {this.xmlData=data});
      const parser = new DOMParser();
      const xmlDom = parser.parseFromString(this.xmlData, "text/xml");
      return xmlDom;

    }


}
