import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from '../ShareService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData: any;
  userId: number | undefined;
 
    constructor(private route: ActivatedRoute, private router: Router, private shareservice: ShareService) {}
  
  userID: String | undefined;
  
  ngOnInit(): void {
    
    this.userID = this.shareservice.getUserId();

    this.route.queryParams.subscribe(params => {
      if (params['userData']) {
        this.userData = JSON.parse(params['userData']);
        this.userId = this.userData.id;
      }
    });
  }
  navigateToeditProfilePage() {

    if (this.userId) {

      // Navigate to the create profile page and pass the userId as a query parameter

      this.router.navigate(['/edit-profile'], {

        queryParams: {

          userId: this.userId,

        },

      });

    }

  }
}
