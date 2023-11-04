import { Component, OnInit } from '@angular/core';
import { User } from '../user'; // replace 'User' with the actual user interface or model
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit  {
  userList: User[] = [];
  recentlyJoinedUsers!: any[];

  constructor(private userService: UserserviceService) {}

  ngOnInit(): void {
    // this.trackvisitor('vv1000', 'vv1001'); // Replace with actual values
    
    
        this.getRecentlyJoinedUsers();
      }
    
      getRecentlyJoinedUsers() {
        this.userService.getRecentlyJoinedUsers()
          .subscribe((data: any[]) => {
            this.recentlyJoinedUsers = data;
          });
      }
    
  getAcceptedUsersList(userId: string): void {
    this.userService.getAcceptedUsersList(userId).subscribe(
      (data: User[]) => {
        this.userList = data;
        console.log('Accepted User List:', this.userList);
      },
      (error: any) => {
        console.error('Error fetching accepted users:', error);
      }
    );
  }
  acceptMember() {
    
    // Add your logic here for accepting a member
    console.log('Member accepted');
    this.getAcceptedUsersList('vv1000'); // Call the method here after performing the accept operation

  }
  getDeclinedUsersList(userId: string): void {
    this.userService.getDeclinedUsersList(userId).subscribe(
      (data: User[]) => {
        this.userList = data;
        console.log('Declined User List:', this.userList);
      },
      (error: any) => {
        console.error('Error fetching Declined users:', error);
      }
    );
  }

  // Function to handle declining a member
  declineMember() {
    // Add your logic here for declining a member
    console.log('Member declined');
   this. getDeclinedUsersList ('vv1001')
  }

  getBlockedUsersList(userId: string): void {
    this.userService.getBlockedUsersList(userId).subscribe(
      (data: User[]) => {
        this.userList = data;
        console.log('Blocked User List:', this.userList);
      },
      (error: any) => {
        console.error('Error fetching Blocked users:', error);
      }
    );
  }
  // Function to handle blocking a member
  blockMember() {
    // Add your logic here for blocking a member
    console.log('Member blocked');
    this. getBlockedUsersList ('vv1000')

  }
  Shortlisted(){
    console.log('Member blocked');
    this. getShortlistedUsersList ('vv1000')

  }
  getShortlistedUsersList(userId: string): void {
    this.userService.getShortlistedUsersList(userId).subscribe(
      (data: User[]) => {
        this.userList = data;
        console.log('Shortlisted User List:', this.userList);
      },
      (error: any) => {
        console.error('Error fetching Shortlisted users:', error);
      }
    );
  }
//   trackvisitor(visitedProfileId:any, visitorUserId: any): void {
//   this.userService.trackVisitor(visitedProfileId, visitorUserId).subscribe(
//     () => {
//       console.log('Visitor tracked successfully');
//       // After successfully tracking the visitor, fetch the updated user list
//       this.getAcceptedUsersList('vv1000');
//     },
//     (error) => {
//       console.error('Error while tracking visitor', error);
//     }
//   );
// }


received() {
  console.log('received request sucessfully');
    this. getreceivedUsersList ('vv1001')

}
getreceivedUsersList(userId: string): void {
  this.userService.getreceivedUsersList(userId).subscribe(
    (data: User[]) => {
      this.userList = data;
      console.log(' received User List:', this.userList);
    },
    (error: any) => {
      console.error('Error fetching received users:', error);
    }
  );
}

  send() {
    console.log('Send request sucessfully');
      this. getSendUsersList ('vv1000')
  
  }

  getSendUsersList(userId: string): void {
    this.userService.getSendUsersList(userId).subscribe(
      (data: User[]) => {
        this.userList = data;
        console.log('Send User List:', this.userList);
      },
      (error: any) => {
        console.error('Error fetching Send users:', error);
      }
    );
  }

  recentlyjoined(){}



ProfileVisitors(){}

}


