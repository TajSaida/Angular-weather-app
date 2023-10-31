import { Component ,  OnInit  } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router ,public weatherApiService:WeatherService,private route: ActivatedRoute){
  }
  data:any
  inputValue: string = '';
  celsius: number =0;
 fahrenheit: number=0;
 celsiusFlag:boolean=true;
 fahrenheitFlag:boolean=false;
 showAboutMePage: boolean = false;
 receivedFlag: boolean=true;
 isAboutMePage:boolean=false;
 isLoading:boolean=false;
 error:string=''

 ngOnInit() {
  console.log(window.screen.width, window.screen.height)
  this.route.params.subscribe((params) => {
   this.isAboutMePage = window.location.href.includes('about-me');
    this.showAboutMePage = params['flag'] === 'false'; 
  });

}
 
 
 handleImageClick() {
  this.router.navigate(['/about-me']);
  this.showAboutMePage = true;
}
 fetchData() {
   this.isLoading = true;
   this.weatherApiService.getWeatherData(this.inputValue).subscribe((response) => {
      this.data = response;
      this.fahrenheit = Math.floor(response?.main?.temp);
      this.celsius = Math.floor((this.fahrenheit - 32) * 5/9);
      this.isLoading = false;
      console.log(response , this.data ,'saida')
    }, (error) => {
      this.isLoading = false;
      this.error = 'An error occurred while fetching data';
    });
  
 }
 onbtnClick=()=>{
   
 }
 convertToFahrenheitToCelsius () {
   this.celsiusFlag=true;
 
 }
 convertToCelsiusTOFahrenheit () {
   this.celsiusFlag=false;
 }
 onInputChange(event: Event) {
   this.inputValue = (event.target as HTMLInputElement).value;
 }
  dayDate= new Date().toDateString()
  title = 'angular-weather-app';

}
