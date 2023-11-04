import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
 
  showNotSatisfied: boolean = false;
  showPraivacyissues:boolean = false;
  showifoundmmatch:boolean=false;
  showOthers:boolean=false;
  
  
  onSubmit() {
    // Your form submission logic here
    // For now, it logs a message
    console.log('profile delete successfully');
  }


}
