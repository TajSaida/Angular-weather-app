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
  cityName='Chittoor'
  inputValue: string = 'Bengaluru';
  celsius: number =0;
 fahrenheit: number=0;
 celsiusFlag:boolean=true;
 fahrenheitFlag:boolean=false;
 showAboutMePage: boolean = false;
 receivedFlag: boolean=true;
 isAboutMePage:boolean=false;
//   ngOnInit(): void {
//    // this.weatherApiService.getWeatherData(this.cityName).subscribe((response) => {
//    //   this.data = response;
//    // });
//  }
 ngOnInit() {
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
     // this.data = response;
   // this.weatherApiService.getWeatherData(this.inputValue).subscribe((response) => {
   //   this.data = response;
   // });
   this.data ={
     "coord": {
         "lon": 77.6033,
         "lat": 12.9762
     },
     "weather": [
         {
             "id": 802,
             "main": "Clouds",
             "description": "scattered clouds",
             "icon": "03d"
         }
     ],
     "base": "stations",
     "main": {
         "temp": 81.39,
         "feels_like": 84.07,
         "temp_min": 78.62,
         "temp_max": 82.22,
         "pressure": 1018,
         "humidity": 63
     },
     "visibility": 6000,
     "wind": {
         "speed": 11.5,
         "deg": 90
     },
     "clouds": {
         "all": 40
     },
     "dt": 1698645127,
     "sys": {
         "type": 2,
         "id": 2017753,
         "country": "IN",
         "sunrise": 1698626548,
         "sunset": 1698668634
     },
     "timezone": 19800,
     "id": 1277333,
     "name": "Bengaluru",
     "cod": 200
 }
 this.fahrenheit = Math.floor(this?.data?.main?.temp);
 this.celsius = Math.floor((this.fahrenheit - 32) * 5/9);
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
