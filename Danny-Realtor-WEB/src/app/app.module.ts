import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { DataService } from './data.service';


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
import { ReContactFormComponent } from './re-contact-form/re-contact-form.component';


import {
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatDialogModule,
  MatDialog, 
  MatDialogRef, 
  MAT_DIALOG_DATA,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ReHpThumbnailComponent } from './re-hp-thumbnail/re-hp-thumbnail.component';
import { ReHpThumbnailOneComponent } from './re-hp-thumbnail-one/re-hp-thumbnail-one.component';
import { ReHpThumbnailTwoComponent } from './re-hp-thumbnail-two/re-hp-thumbnail-two.component';
import { ReHpThumbnailThreeComponent } from './re-hp-thumbnail-three/re-hp-thumbnail-three.component';

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
    ServicesComponent,
    ReContactFormComponent,
    SidenavComponent,
    ReHpThumbnailComponent,
    ReHpThumbnailOneComponent,
    ReHpThumbnailTwoComponent,
    ReHpThumbnailThreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    HttpModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    RouterModule.forRoot([
     { path: '', component: HomeComponent, pathMatch: 'full' },
     { path: 'buy', component: BuyComponent, pathMatch: 'full' },
     { path: 'sell', component: SellComponent, pathMatch: 'full'},
     { path: 'about', component: AboutComponent, pathMatch: 'full' },
     { path: 'services', component: ServicesComponent, pathMatch: 'full' },
     { path: 'contact', component: ContactComponent, pathMatch: 'full' },
     { path: '**', component: NotFoundComponent, pathMatch: 'full' },
    ]),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [
    ReContactFormComponent,
    ReHpThumbnailOneComponent,
    ReHpThumbnailTwoComponent,
    ReHpThumbnailThreeComponent
  ]
})
export class AppModule { }
