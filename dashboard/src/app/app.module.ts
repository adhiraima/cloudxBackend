import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from "@angular/http";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MapInfoComponent } from './map-info/map-info.component';
import { InterfaceStatsComponent } from './interface-stats/interface-stats.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficGeneralComponent } from './traffic-general/traffic-general.component';
import { SharedService } from './services/shared.service'
import { TrafficService } from './services/traffic.service';
import { InterfaceService } from './services/interface.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    MainBodyComponent,
    MapInfoComponent,
    InterfaceStatsComponent,
    TrafficComponent,
    TrafficGeneralComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQjzCwLrrJYU9Tk7W7MnqcmZYIrCVeHqs'
    })
  ],
  providers: [
              SharedService, 
              TrafficService, 
              InterfaceService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
