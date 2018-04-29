import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactusComponent } from './contactus/contactus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldErrorDisplayComponent } from './contactus/field-error-display/field-error-display.component';
import { DizmarketingComponent } from './dizmarketing/dizmarketing.component';
import { SeoComponent } from './dizmarketing/seo/seo.component';
import { ConversionRateComponent } from './dizmarketing/conversion-rate/conversion-rate.component';
import { PrComponent } from './dizmarketing/pr/pr.component';
import { WebDesignComponent } from './dizmarketing/web-design/web-design.component';
import { LeadGenerationComponent } from './dizmarketing/lead-generation/lead-generation.component';
import { LinkRemovalComponent } from './dizmarketing/link-removal/link-removal.component';
import { SocialMediaMarketingComponent } from './dizmarketing/social-media-marketing/social-media-marketing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { MobileDevComponent } from './services/mobile-dev/mobile-dev.component';
import { WebApplicationComponent } from './services/web-application/web-application.component';
import { DataAnalysisComponent } from './services/data-analysis/data-analysis.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    FieldErrorDisplayComponent,
    DizmarketingComponent,
    SeoComponent,
    ConversionRateComponent,
    PrComponent,
    WebDesignComponent,
    LeadGenerationComponent,
    LinkRemovalComponent,
    SocialMediaMarketingComponent,
    AboutUsComponent,
    ServicesComponent,
    MobileDevComponent,
    WebApplicationComponent,
    DataAnalysisComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
