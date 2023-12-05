import { Component} from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service'; // Adjust the path to the service as needed
import { NgForm } from '@angular/forms';
import { ShareService } from '../ShareService';

@Component({
  selector: 'app-searchbycriteria',
  templateUrl: './searchbycriteria.component.html',
  styleUrls: ['./searchbycriteria.component.css']
})
export class SearchbycriteriaComponent {



user:User = new User();
searchResults: User[] = [];

  currentStep = 1;

  nextStep() {
    if (this.currentStep < 6) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  ageOptions: number[] = [];
  heightOptions: string[] = [];
  userid=this.shareservice.getUserId();

  constructor(private userserviceService: UserserviceService, private shareservice: ShareService) {

    for (let age = 18; age <= 70; age++) {
      this.ageOptions.push(age);
    }
  
    for (let feet = 4; feet <= 7; feet++) {
      for (let inches = 0; inches <= 11; inches++) {
        this.heightOptions.push(feet + "'" + inches + '"');
      }
    }
  }
  // userid=this.shareservice.getUserId();

  selectedProfilePhoto: File | null = null;

  // Function to handle file selection
  onFileSelected(event: any) {
    const file: File | null = event.target.files[0];
    this.selectedProfilePhoto = file;
  }
  // constructor() {
  //   // If you have an existing object with search criteria, you can assign its values like this:
  //   // Assuming you have an existingCriteria object with the same properties
  //   this.SearchCriteria = User;
  // }
  search() {
    console.log('Search Criteria:', this.user);

    this.userserviceService.search(this.user).subscribe(
      (results) => {
        this.searchResults = results;
        console.log('Search Results:', results);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
  
  // Function to handle form submission
  // onSubmitSearch(searchForm: any) {
  //   if (searchForm.valid) {
  //     // Perform your search using the 'SearchCriteria' object values
  //     // You can make an API call or filter data based on these criteria
  //     console.log('Search Criteria:', this.user);
  //   } else {
  //     // Handle invalid form data
  //     console.log('Invalid form data');
  //   }
//   }

// }
