import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SharedService   } from './services/shared-service.service';

const routes: Routes =[
                  { path: 'about-me', component: AboutMeComponent }
                ]
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SharedService], 
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }