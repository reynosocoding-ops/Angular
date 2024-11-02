import { Component } from '@angular/core';
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
    event;
    alert("hi");
  }
}
