import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BuyComponent } from './buy/buy.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReHpFeatureListingsComponent } from './re-hp-feature-listings/re-hp-feature-listings.component';
import { ReHpQuickSearchComponent } from './re-hp-quick-search/re-hp-quick-search.component';
import { ReStickyContactFormComponent } from './re-sticky-contact-form/re-sticky-contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { RealEstateMainMenuComponent } from './real-estate-main-menu/real-estate-main-menu.component';
import { SellComponent } from './sell/sell.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BuyComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent,
    ReHpFeatureListingsComponent,
    ReHpQuickSearchComponent,
    ReStickyContactFormComponent,
    FooterComponent,
    RealEstateMainMenuComponent,
    SellComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
