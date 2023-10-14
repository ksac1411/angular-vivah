import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  minAge: any;
  maxAge: any;
  selectedReligion: any;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilters() {
    // Implement filtering logic based on selected filter criteria
    // You can emit filter criteria as an event or call a service to apply filters
    console.log('Applying Filters');
    console.log('Min Age:', this.minAge);
    console.log('Max Age:', this.maxAge);
    console.log('Selected Religion:', this.selectedReligion);
  }

  resetFilters() {
    // Reset all filter criteria to default values
    this.minAge = undefined;
    this.maxAge = undefined;
    this.selectedReligion = '';
    // Reset other filter criteria here as needed
  }
}
