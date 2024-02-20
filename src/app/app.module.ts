import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { LandingTitleComponent } from './shared/components/landing-title/landing-title.component';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LandingPageComponent,
    TopBarComponent,
    ContactComponent,
    LandingTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
