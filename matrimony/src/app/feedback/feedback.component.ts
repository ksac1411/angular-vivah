import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  selectedRating: number = 0; // Initialize with 0 stars
  formData: any = {
      name: '',
      rating: '',
      feedback: '' // Use the correct property name from your form
    };
    
  // Your form data model

  constructor(private userserviceService: UserserviceService) {
    // Initialize the rating to a default value if needed
    this.selectedRating = 0;
  }

  submitFeedback(): void {
    
    console.log('Form Data:', this.formData);
    console.log('Selected Rating:', this.selectedRating);

    // Rest of your code
    this.userserviceService.feedback(this.formData)
      .subscribe(
        (response: any) => {
          // Handle successful response here
          console.log('Feedback submitted successfully:', response);
          // Reset the form or perform other actions as needed
        },
        (error: any) => {
          // Handle error here
          console.error('Error submitting feedback:', error);
        }
      );
  }

  onRatingChange() {
    console.log('Selected Rating:', this.selectedRating);

    switch (this.selectedRating) {
      case 1:
        // Handle 1-star rating
        console.log('1-star rating selected');
        // You can display a message or take specific actions for 1-star rating
        break;
      case 2:
        // Handle 2-star rating
        console.log('2-star rating selected');
        break;
      case 3:
        // Handle 3-star rating
        console.log('3-star rating selected');
        break;
      case 4:
        // Handle 4-star rating
        console.log('4-star rating selected');
        break;
      case 5:
        // Handle 5-star rating
        console.log('5-star rating selected');
        break;
      default:
        // Handle other cases or no rating selected
        console.log('No rating or unexpected rating selected');
    }
  }
}
