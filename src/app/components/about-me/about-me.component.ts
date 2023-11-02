import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  flagToParent: boolean=true;
  isFlag: boolean=false;
  constructor(private router:Router,private sharedService: SharedService){
    
  }
  ngOnInit() {
   this.sharedService.destroy();
 }
  redirectToHome(){
   
    this.sharedService.setFlag(false);
    this.router.navigate(['/']);
   
  }
  redirectToLinkedIn() {
    const linkedinURL = 'https://www.linkedin.com/in/saida-taj-m-r-b3656495/';
    window.open(linkedinURL, '_blank');
  }
}
