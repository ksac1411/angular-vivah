import { Component } from '@angular/core';

@Component({
  selector: 'app-hideprofile',
  templateUrl: './hideprofile.component.html',
  styleUrls: ['./hideprofile.component.css']
})
export class HideprofileComponent {
  hideProfile: boolean = false; // Initially profile is not hidden
  hideDuration: number = 1; // Default hide duration is set to 1 month

  onHideProfile() {
    try {
      if (this.hideProfile) {
        // Add logic to hide the user's profile for the selected duration
        console.log(`Profile is now hidden for ${this.hideDuration} month(s).`);
      } else {
        // Add logic to show the user's profile
        console.log('Profile is now visible to others.');
      }
    } catch (error) {
      console.error('An error occurred while attempting to update profile visibility:', error);
    }
  }

  selectHideDuration(duration: number) {
    this.hideDuration = duration;
  }
}
