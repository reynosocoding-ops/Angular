import { Component, output, } from '@angular/core';
import { MapdataService } from '../mapdata.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  constructor(private mapdata: MapdataService){}
  
  mapClick(event: MouseEvent){
    const eventTarget = event.target as HTMLElement;
    const cCode = eventTarget.id;
    
    this.mapdata.getData(cCode)
    .subscribe(data => {
      const cName = data.querySelector("name")?.textContent || '';
      const cCapital = data.querySelector("capitalCity")?.textContent || '';
      const cRegion = data.querySelector("region")?.textContent || '';
      const cICL = data.querySelector("incomeLevel")?.textContent || '';
      const cLat = data.querySelector("latitude")?.textContent || '';
      const cLon = data.querySelector("longitude")?.textContent || '';

      const cNameUpdater = document.getElementById("cTName");
      if (cNameUpdater) {
        cNameUpdater.innerHTML = cName;
      }

      const cCapitalUpdater = document.getElementById("cTCapital");
      if (cCapitalUpdater) {
        cCapitalUpdater.innerHTML = cCapital;
      }

      const cRegionUpdater = document.getElementById("cTRegion");
      if (cRegionUpdater) {
        cRegionUpdater.innerHTML = cRegion;
      }

      const cICLUpdater = document.getElementById("cTICL");
      if (cICLUpdater) {
        cICLUpdater.innerHTML = cICL;
      }

      const cLatUpdater = document.getElementById("cTLat");
      if (cLatUpdater) {
        cLatUpdater.innerHTML = cLat;
      }

      const cLonUpdater = document.getElementById("cTLon");
      if (cLonUpdater) {
        cLonUpdater.innerHTML = cLon;
      }

    });

  }
}
