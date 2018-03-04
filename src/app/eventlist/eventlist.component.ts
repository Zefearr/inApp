import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  events: any;
  filteredEvents: any;

  price: number;
  isOpen: boolean; 

  filters = {}

  ngOnInit() {
    this.db.list('/products')
      .subscribe(events => {
        this.events = events;
        this.applyFilters()
      });
  }
  private applyFilters() {
    this.filteredEvents = _.filter(this.events, _.conforms(this.filters))
  }
  filterExact(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters()
  }

  filterGreaterThan(property: string, rule: number) {
    this.filters[property] = val => val > rule
    this.applyFilters()
  }
  filterBoolean(property: string, rule: boolean) {
    if (!rule) this.removeFilter(property)
     else {
       this.filters[property] = val => val
       this.applyFilters()
     }
  }

  removeFilter(property: string) { 
    delete this.filters[property]
    this[property] = null
  }
 
}
