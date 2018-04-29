import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent }   from './contactus/contactus.component';
import { AboutUsComponent }   from './about-us/about-us.component';
import { DizmarketingComponent } from './dizmarketing/dizmarketing.component';
import { SeoComponent } from './dizmarketing/seo/seo.component';
import { ConversionRateComponent } from './dizmarketing/conversion-rate/conversion-rate.component';
import { PrComponent } from './dizmarketing/pr/pr.component';
import { WebDesignComponent } from './dizmarketing/web-design/web-design.component';
import { LinkRemovalComponent } from './dizmarketing/link-removal/link-removal.component';
import { LeadGenerationComponent } from './dizmarketing/lead-generation/lead-generation.component';
import { SocialMediaMarketingComponent } from './dizmarketing/social-media-marketing/social-media-marketing.component';
import { MobileDevComponent } from './services/mobile-dev/mobile-dev.component';
import { ServicesComponent } from './services/services.component';
import { DataAnalysisComponent } from './services/data-analysis/data-analysis.component';
import { WebApplicationComponent } from './services/web-application/web-application.component';
import { CarouselComponent } from './carousel/carousel.component';
const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: CarouselComponent },
  { path: 'contactUs', component: ContactusComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'dizmarketing', component: DizmarketingComponent,
    children:[{path: 'seo', component: SeoComponent},
              { path: 'conversion-rate', component: ConversionRateComponent },              
              { path: 'pr', component: PrComponent },
              { path: 'web-design', component: WebDesignComponent },
              { path: 'lead-generation', component: LeadGenerationComponent },
              { path: 'link-removal', component: LinkRemovalComponent },
              { path: 'social-media-marketing', component: SocialMediaMarketingComponent }] },
  { path: 'services', component: ServicesComponent,
    children:[{path: 'mobile', component: MobileDevComponent},
              {path: 'data-analysis', component: WebApplicationComponent},
              {path: 'web-dev', component: DataAnalysisComponent }]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]

})
export class AppRoutingModule { }
