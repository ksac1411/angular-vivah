import { Component } from '@angular/core';
import { PartnerPreference } from '../partnerpreferance';
@Component({
  selector: 'app-partnerpreference',
  templateUrl: './partnerpreference.component.html',
  styleUrls: ['./partnerpreference.component.css']
})
export class PartnerpreferenceComponent {
  partnerpreference:PartnerPreference=new PartnerPreference();
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
  
  constructor() {
    for (let age = 18; age <= 70; age++) {
      this.ageOptions.push(age);
    }
  
    for (let feet = 4; feet <= 7; feet++) {
      for (let inches = 0; inches <= 11; inches++) {
        this.heightOptions.push(feet + "'" + inches + '"');
      }
    }
  }
  onSubmit() {
    // Handle form submission here
    console.log('Form submitted:', this.partnerpreference);

  }
}
