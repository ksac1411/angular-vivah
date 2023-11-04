// filter.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
[x: string]: any;
  filterOptions: any = {
    age: null,
    location: '',
    education: '',
    income: '',
    occupation: ''
    // Add more filter options here as needed
  };

  selectedFilter: string = ''; // This variable will hold the selected filter option

  applyFilters() {
    console.log('Applying filters:', this.filterOptions);
    // Implement logic to apply filters
  }

  selectFilter(filter: string) {
    this.selectedFilter = filter;
  }
}
