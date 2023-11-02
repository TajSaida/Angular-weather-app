import { Component  } from '@angular/core';
import { Router ,NavigationEnd} from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';
import { SharedService } from './services/shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFlagValue: boolean= true;

  constructor(private router:Router ,public weatherApiService:WeatherService,private sharedService: SharedService){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isAboutMePage= window.location.href.includes('about-me') ? true  :this.sharedService.getFlag()
      }
    });
  }
  data:any
  inputValue: string = '';
  celsius: number =0;
 fahrenheit: number=0;
 celsiusFlag:boolean=true;
 fahrenheitFlag:boolean=false;
 isAboutMePage:boolean= true;
 isLoading:boolean=false;
 error:any=''


 handleImageClick() {
  this.router.navigate(['/about-me']);
  this.sharedService.destroy();

}
 fetchData() {
   this.isLoading = true;
  this.error= !this.inputValue ? 'Please enter city' :'';
   this.inputValue && this.weatherApiService.getWeatherData(this.inputValue).subscribe((response) => {
    const is404 = response?.cod == '404'
      this.data = is404  ? {} : response;
      this.error = is404   && response?.message ;
      this.fahrenheit = Math.floor(response?.main?.temp);
      this.celsius = Math.floor((this.fahrenheit - 32) * 5/9);
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.error = error?.error?.message ? error?.error?.message :'An error occurred while fetching data';
    })
  this.isLoading = !this.inputValue ? false :true;
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
