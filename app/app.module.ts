import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDataService } from './my-data.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { BankingPageComponent } from './banking-page/banking-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { Approute } from './app.routes';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';

import { SwiperModule } from 'angular2-useful-swiper';
import { ng2Parallax  } from 'ng-parallax';
import { DocumentsComponent } from './documents/documents.component';
import { CheckComponent } from './check/check.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule,AccordionModule,ModalModule } from 'ngx-bootstrap';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
// Must export the config


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FooterBarComponent,
    BankingPageComponent,
    SignUpComponent,
    PhoneLoginComponent,
    DocumentsComponent,
    CheckComponent,
    HomeComponent
    
  ],
  imports: [
    CarouselModule.forRoot(),AccordionModule.forRoot(),ModalModule.forRoot(),
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    HttpModule,HttpClientModule,SwiperModule,SlideMenuModule,
    
    RouterModule.forRoot(Approute)
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
