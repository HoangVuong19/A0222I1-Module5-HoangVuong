import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../../service/facility.service';
import {Facility} from '../../../model/facility';

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit, OnChanges {
  facilityFormEdit: FormGroup;
  // tslint:disable-next-line:no-input-rename
  @Input('editFacility') facility: Facility;

  constructor(private facilityService: FacilityService) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.facilityFormEdit = new FormGroup(
      {
        name: new FormControl(this.facility.name, [Validators.required]),
        area: new FormControl(this.facility.area, [Validators.required]),
        price: new FormControl(this.facility.price, [Validators.required]),
        maximum: new FormControl(this.facility.maximum, [Validators.required]),
        type: new FormControl(this.facility.type)
      });
  }

  editFacility() {}
}
