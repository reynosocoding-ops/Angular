import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapdataService {

  constructor(private http: HttpClient) { }
     xmlData = '';
    getData(countryCode: String): Observable<Document>{
      const mapUrl = ("https://api.worldbank.org/V2/country/"+ countryCode);
      return this.http.get(mapUrl, { responseType: 'text' })
      .pipe(
        map(data => new DOMParser().parseFromString(data, 'text/xml'))
      );

    }


}
