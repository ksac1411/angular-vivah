import { Component } from '@angular/core';

interface FAQ {
  question: string;
  answer: string;
  showAnswer: boolean;
}

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  helpArticles = [
    {
      title: 'Frequently Asked Questions',
      faqs: [
        {
          question: 'Q: How do I create an account?',
          answer: 'A: To create an account, click on the "Sign Up" button on the homepage and provide the required information.',
          showAnswer: false
        },
        {
          question: 'Q: How can I search for potential matches?',
          answer: 'A: You can use the search filters on the "Search" page to specify your preferences and view potential matches.',
          showAnswer: false
        },
        {
          question: 'Q: How do I update my profile?',
          answer: 'A: To update your profile, log in to your account and go to the "Edit Profile" section where you can make changes to your information.',
          showAnswer: false
        },
        {
          question: 'Q: How can I delete my account?',
          answer: 'A: To delete your account, contact our support team at support@matrimonysite.com and request account deletion.',
          showAnswer: false
        },
        {
          question: 'Q: How can I contact support?',
          answer: 'A: If you need further assistance, you can contact our support team at support@matrimonysite.com.',
          showAnswer: false
        },
        // Add more FAQ items here
      ]
    },
    {
      title: 'Troubleshooting',
      faqs: [
        {
          question: 'Q:Unable to log in.',
          answer: 'A: Make sure you\'re using the correct email and password. If you\'ve forgotten your password, use the "Forgot Password" link to reset it.',
          showAnswer: false
        },
        {
          question: 'Q: Photos not uploading properly.',
          answer: 'A: Ensure that the photos you\'re trying to upload meet the required file type and size restrictions.',
          showAnswer: false
        }
        // Add more troubleshooting items here
      ]
    },
    {
      // title: 'Contact Us',
      faqs: [
       
        {
          question: 'Q: Payment problems',
          answer: 'A: If you encounter payment issues, please contact our billing department at billing@matrimonysite.com for assistance.',
          showAnswer: false
        },
       
      ]
    }
  ];

  toggleAnswer(faq: FAQ) {
    // Toggle the visibility of the answer for the clicked FAQ
    faq.showAnswer = !faq.showAnswer;
  }
}



