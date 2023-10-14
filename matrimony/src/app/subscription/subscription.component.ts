import { Component } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  
  showAll = true;
  showBasicPlan = false;
  showMediumPlan = false;
  showAdvancedPlan = false;

  toggleBasicPlan() {
    this.showAll = false;
    this.showBasicPlan = true;
    this.showMediumPlan = false;
    this.showAdvancedPlan = false;
  }

  toggleMediumPlan() {
    this.showAll = false;
    this.showBasicPlan = false;
    this.showMediumPlan = true;
    this.showAdvancedPlan = false;
  }

  toggleAdvancedPlan() {
    this.showAll = false;
    this.showBasicPlan = false;
    this.showMediumPlan = false;
    this.showAdvancedPlan = true;
  }


//   constructor() { }

//   // Define the subscribeToPlan method
//   subscribeToPlan(planName: string) {
//     // Implement your subscription logic here
//     console.log(`Subscribing to ${planName} plan`);
//     // You can add your 
// }


// Function to subscribe to a plan
subscribeToPlan(plan: string) {
  console.log('Subscribed to:', plan);

  // Access the price and list elements and log their values
  if (plan === 'Basic Plan') {
    const priceElement = document.querySelector('.pay .price');
    const listElements = document.querySelectorAll('.pay li');
    
    if (priceElement) {
      console.log('Price:', priceElement.textContent);
    } else {
      console.log('Price element not found.');
    }

    console.log('Features:');
    listElements.forEach((item, index) => {
      console.log(`Feature ${index + 1}:`, item.textContent);
    });

  }
  if (plan === 'Medium Plan') {
    const priceElement = document.querySelector('.pay .price');
    const listElements = document.querySelectorAll('.pay li');
    
    if (priceElement) {
      console.log('Price:', priceElement.textContent);
    } else {
      console.log('Price element not found.');
    }

    console.log('Features:');
    listElements.forEach((item, index) => {
      console.log(`Feature ${index + 1}:`, item.textContent);
    });
  }
    if (plan === 'Advance Plan') {
      const priceElement = document.querySelector('.pay .price');
      const listElements = document.querySelectorAll('.pay li');
      
      if (priceElement) {
        console.log('Price:', priceElement.textContent);
      } else {
        console.log('Price element not found.');
      }
    
      console.log('Features:');
      listElements.forEach((item, index) => {
        console.log(`Feature ${index + 1}:`, item.textContent);
      });
    }
  // Add similar logic for other plans if needed.
}
}


 