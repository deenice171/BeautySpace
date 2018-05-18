import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutes } from './app.routing';
import { AboutComponent } from './about/about.component';
import { SharedServicesModule } from './shared-services/shared-services.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { CreateServiceComponent } from './create-service/create-service.component';
import { GalleryComponent } from './gallery/gallery.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppointmentComponent } from './appointment/appointment.component';



@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainComponent,
    NotFoundComponent,
    AboutComponent,
    CreateServiceComponent,
    GalleryComponent,
    AppointmentComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    SharedServicesModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }