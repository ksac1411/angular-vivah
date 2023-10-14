import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData: any;
  userId: number | undefined;
 
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {

      if (params['userData']) {

        this.userData = JSON.parse(params['userData']);

        this.userId = this.userData.id; // Assuming the user ID is part of the userData object

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
