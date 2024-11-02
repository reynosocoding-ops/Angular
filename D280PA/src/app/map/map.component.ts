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
    
    const test = (this.mapdata.getData(cCode));
    const cName = (test.querySelector("name")?.textContent) as string;
    const cNameUpdater = document.getElementById("cTName");
  if (cNameUpdater) {
  cNameUpdater.innerHTML = cName;
  } else {
  console.error("Element with ID 'cName' not found.");
  }

  const cCapital = (test.querySelector("capitalCity")?.textContent) as string;
    const cCapitalUpdater = document.getElementById("cTCapital");
  if (cCapitalUpdater) {
  cCapitalUpdater.innerHTML = cCapital;
  } else {
  console.error("Element with ID 'cCapital' not found.");
  }

  const cRegion = (test.querySelector("region")?.textContent) as string;
    const cRegionUpdater = document.getElementById("cTRegion");
  if (cRegionUpdater) {
  cRegionUpdater.innerHTML = cRegion;
  } else {
  console.error("Element with ID 'cRegion' not found.");
  }

  const cICL = (test.querySelector("incomeLevel")?.textContent) as string;
    const cICLUpdater = document.getElementById("cTICL");
  if (cICLUpdater) {
  cICLUpdater.innerHTML = cICL;
  } else {
  console.error("Element with ID 'cICL' not found.");
  }

  const cLat = (test.querySelector("latitude")?.textContent) as string;
    const cLatUpdater = document.getElementById("cTLat");
  if (cLatUpdater) {
  cLatUpdater.innerHTML = cLat;
  } else {
  console.error("Element with ID 'cLat' not found.");
  }

  const cLon = (test.querySelector("longitude")?.textContent) as string;
    const cLonUpdater = document.getElementById("cTLon");
  if (cLonUpdater) {
  cLonUpdater.innerHTML = cLat;
  } else {
  console.error("Element with ID 'cLon' not found.");
  }

  }
}
