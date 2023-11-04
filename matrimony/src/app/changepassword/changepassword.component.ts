import { Component } from '@angular/core';
import { Logindata } from '../logindata'; // Ensure the correct path to your Logindata file

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  logindata: Logindata = new Logindata();
 // Password pattern to enforce at least one uppercase, one lowercase, one digit, and one special character with a minimum of 8 characters
 passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
newPassword:any;


onSubmit() {
  // Add logic to handle form submission and change password functionality
  if (this.logindata.newPassword === this.logindata.confirmPassword) {
    
    if (this.passwordPattern.test(this.logindata.newPassword)) {
      // Set the new password for the user here
      console.log('Password set successfully');
    } else {
      // Notify the user that the password does not meet the required pattern
      alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
    }

  } else {
    // Handle case when new password and confirm password do not match
    alert('Passwords do not match. Please try again.');
  }
}}