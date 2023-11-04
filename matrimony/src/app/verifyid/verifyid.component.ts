import { Component } from '@angular/core';

@Component({
  selector: 'app-verifyid',
  templateUrl: './verifyid.component.html',
  styleUrls: ['./verifyid.component.css']
})
export class VerifyidComponent {
  idType: string = '';
  idNumber: string = '';

  onSubmit() {
    if (this.idType && this.idNumber) {
      let isValid = true;
      if (this.idType === 'aadhar') {
        isValid = /^\d{10}$/.test(this.idNumber);
      } else if (this.idType === 'pan') {
        isValid = /^[A-Z]{5}\d{4}[A-Z]{1}$/.test(this.idNumber);
      } else if (this.idType === 'voterId') {
        isValid = /^[A-Z]{3}\d{7}$/.test(this.idNumber);
      } else if (this.idType === 'drivingLicense') {
        isValid = /^[A-Z]{2}\d{13}$/.test(this.idNumber);
      } else if (this.idType === 'passport') {
        isValid = /^[A-Z]{1}\d{7}$/.test(this.idNumber);
      }
      // Add validation for other ID types here

      if (!isValid) {
        alert('Invalid ID number for the selected ID type.');

        console.error('Invalid ID number for the selected ID type.');
        return;
      }

      console.log('Verifying ID:', this.idType, this.idNumber);
    } else {
      console.error('Please select ID type and enter ID number');
    }
  }
}
