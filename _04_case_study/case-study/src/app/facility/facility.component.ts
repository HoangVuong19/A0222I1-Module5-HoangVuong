import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities: Facility[] | undefined;
  facilityName: string | undefined;

  constructor(private facilityService: FacilityService) { }

  ngOnInit(): void {
    this.getAllFacilities();
  }

  private getAllFacilities() {
    this.facilities = this.facilityService.facility;
  }

  deleteFacility(id: number, name: string) {
    this.facilityName = name;
  }
}
