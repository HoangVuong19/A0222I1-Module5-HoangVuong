import { Injectable } from '@angular/core';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  private facilities: Facility[] = [
    // tslint:disable-next-line:max-line-length
    {id: 1, name: 'LUXURY HOUSE', area: 200, price: 2000000, maximum: 12, image: '../../assets/facility-image/architecture-5339245__3402222.jpg', type: 'luxury'},
    // tslint:disable-next-line:max-line-length
    {id: 2, name: 'OCEAN ROOM', area: 25, price: 2000000, maximum: 12, image: '../../assets/facility-image/Six-Senses-Ninh-Van-Bayc-min-2.jpg', type: 'luxury'},
    // tslint:disable-next-line:max-line-length
    {id: 3, name: 'STANDARD HOUSE', area: 150, price: 2000000, maximum: 12, image: '../../assets/facility-image/residence-2219972__340.jpg', type: 'luxury'},
    // tslint:disable-next-line:max-line-length
    {id: 4, name: 'KING VILLA', area: 35, price: 2000000, maximum: 12, image: '../../assets/facility-image/333333.jpg', type: 'luxury'},
    // tslint:disable-next-line:max-line-length
    {id: 5, name: 'OCEAN VILLA', area: 85, price: 2000000, maximum: 12, image: '../../assets/facility-image/Sunrise-Nha-Trang-Beach-Hotel-Spacccc-5.jpg', type: 'luxury'},
    // tslint:disable-next-line:max-line-length
    {id: 6, name: 'OCEAN HOUSE', area: 250, price: 2000000, maximum: 12, image: '../../assets/facility-image/Mia-Resort-Nha-Trang-6.jpg', type: 'luxury'},
    // tslint:disable-next-line:max-line-length
    {id: 7, name: 'OCEAN ROOM', area: 20, price: 2000000, maximum: 12, image: '../../assets/facility-image/Mia-Resort-Nha-Trangcc-7.jpg', type: 'luxury'},
    // tslint:disable-next-line:max-line-length
    {id: 8, name: 'LUXURY HOUSE', area: 150, price: 2000000, maximum: 12, image: '../../assets/facility-image/Mia-Resort-Nha-Trangcccc-8.jpg', type: 'luxury'},
  ];
  constructor() { }


  get facility(): Facility[] {
    return this.facilities;
  }

  set facility(value: Facility[]) {
    this.facilities = value;
  }

  save(facility: Facility) {
    facility.image = facility.image.split('\\')[2];
    facility.image = `../../assets/facility-image/${facility.image}`;
    this.facilities.unshift(facility);
  }

  findById(id: number) {
    // @ts-ignore
    return this.facilities.filter(x => x.id === id)[0];
    // return this.facilities.indexOf(id - 1);
  }
}
