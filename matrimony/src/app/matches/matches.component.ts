import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  profiles = [
    {
      name: 'John Doe',
      age: 30,
      casteGroup: 'Some Caste',
      education: 'Masters',
      occupation: 'Engineer',
      incomeRange: '$50,000 - $70,000',
      mothertongue: 'English',
      stateCity: 'California, USA',
      maritalStatus: 'Single',
      description: 'A kind-hearted person looking for a life partner.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Jane Smith',
      age: 28,
      casteGroup: 'Another Caste',
      education: 'Ph.D.',
      occupation: 'Doctor',
      incomeRange: '$70,000 - $90,000',
      mothertongue: 'French',
      stateCity: 'Paris, France',
      maritalStatus: 'Divorced',
      description: 'A fun-loving individual seeking a meaningful connection.',
      image: 'https://via.placeholder.com/150'
    },
    // Add more profiles as needed
  ];
  
   
  constructor() { }

  ngOnInit(): void {
  }
  sendInterest(profile: any): void {
    // Implement the logic for sending interest
    console.log('Interest sent to:', profile.name);
  }

  shortlistMember(profile: any): void {
    // Implement the logic for shortlisting a member
    console.log('Shortlisted member:', profile.name);
  }

  startChat(profile: any): void {
    // Implement the logic for starting a chat
    console.log('Started chat with:', profile.name);
  }

  ignoreMember(profile: any): void {
    // Implement the logic for ignoring a member
    console.log('Ignored member:', profile.name);
  }

  blockMember(profile: any): void {
    // Implement the logic for blocking a member
    console.log('Blocked member:', profile.name);
  }

}