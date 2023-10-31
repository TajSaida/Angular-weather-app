import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { 

  }
  
  getWeatherData(cityName:string): Observable<any>{
   return this.http.get(environment.weatherBaseUrl+cityName,{
      headers:new HttpHeaders()
      .set(environment.XRapidAPIHostLabel , environment.XRapidAPIHostValue)
      .set(environment.XRapidAPIKeyLabel, environment.XRapidAPIKeyValue),
      params:new HttpParams()
      .set('q',cityName)
      .set('units','metric')
      .set('mode','json')
    })
  }
}
