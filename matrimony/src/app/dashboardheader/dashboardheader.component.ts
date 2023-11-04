import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Logindata } from '../logindata';
import { LoginComponent } from '../login/login.component';
import { ShareService } from '../ShareService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboardheader',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.css']
})
export class DashboardheaderComponent   {
  userData: any;
  userId: number | undefined;
  userID: String | undefined;

  constructor(private route: ActivatedRoute, private shareservice: ShareService, private userservice: UserserviceService) {}
  ngOnInit(): void {
    this.userID = this.shareservice.getUserId();

    this.route.queryParams.subscribe(params => {
      if (params['userData']) {
        this.userData = JSON.parse(params['userData']);
        this.userId = this.userData.id;
      }
    });
  }

  
  
  
  
  // acceptedMembers() {
  //   this.userservice.acceptedList(this.shareService.globaluserId).subscribe(
  //     (response) => {
  //       console.log('Member accepted list:', response,this.shareService.globaluserId);

  //       // Handle success as needed
  //     },
  //     (error) => {
  //       console.error('Error accepting member:', error);
  //       // Handle errors as needed
  //       if (error instanceof HttpErrorResponse) {
  //         console.error('HTTP Error:', error.status);
  //         console.error('Error Details:', error.error);
  //       }
  //     }
  //   );
  // }
  acceptMember() {
    const userId = 4; // Replace with the actual userId
  const accepted_mem = 456;
    this.userservice.acceptMem(userId,accepted_mem).subscribe(
      (response) => {
        console.log('Member accepted successfully:', response);
        // Handle success as needed
      },
      (error) => {
        console.error('Error accepting member:', error);
        // Handle errors as needed
        if (error instanceof HttpErrorResponse) {
          console.error('HTTP Error:', error.status);
          console.error('Error Details:', error.error);
        }
      }
    );
  }
  declineMember() {
    const userId=2;
    const declined_mem=34;
    this.userservice.declineMem(userId,declined_mem).subscribe(
      (response) => {
        console.log('Member declined successfully:', response);
        // Handle success as needed
      },
      (error) => {
        console.error('Error declining member:', error);
        // Handle errors as needed
      }
    );
  }

  blockMember() {
    const userId = 6; // Replace with the actual user ID
    const blocked_mem = 3; // Replace with the actual blocked member ID
  
    this.userservice.blockMem(userId, blocked_mem).subscribe(
      (response: any) => {
        console.log('Member blocked successfully:', response);
        // Handle success as needed
      },
      (error: any) => {
        console.error('Error blocking member:', error);
        // Handle errors as needed
      }
    );
  }
}  






