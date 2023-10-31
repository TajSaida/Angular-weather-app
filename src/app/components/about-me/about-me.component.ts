import { Component } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  flagToParent: boolean=true
  constructor(private router:Router,private route: ActivatedRoute){
  }
  redirectToHome(){
    this.route.params.subscribe((params:any) => {
      this.flagToParent = params['flag'] === 'false';
    });
    const currentURL = window.location.href;
    const newURL = currentURL.replace('/about-me', '');
    window.location.href = newURL
  }
  redirectToLinkedIn() {
    const linkedinURL = 'https://www.linkedin.com/in/saida-taj-m-r-b3656495/';
    window.open(linkedinURL, '_blank');
  }
}
