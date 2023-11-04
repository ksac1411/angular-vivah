import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  profileUserId: string = ''; // You can update this with the actual user ID
  reasons: string[] = ['Fake Profile', 'Inappropriate Content', 'Suspicious Activity', 'Other'];
  selectedReason: string = '';
  showTextArea: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  goToNextStep() {
    this.showTextArea = true;
  }
  handleFileInput(event: any) {
    const file = event.target.files[0];
    // Process the file as needed, such as uploading it to the server
    console.log('File uploaded:', file);
  }
  
  submitReport() {
    const reportedUserId = this.profileUserId;
    const reason = this.selectedReason;
    const additionalDetails = (document.querySelector('textarea') as HTMLTextAreaElement).value;
    console.log('Reported User ID: ', reportedUserId);
    console.log('Reason: ', reason);
    console.log('Additional Details: ', additionalDetails);
    // Implement logic to submit the report to the backend
}


    // Implement logic to submit the report
  }


