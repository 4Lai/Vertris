import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { LandingTitleComponent } from './shared/components/landing-title/landing-title.component';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { PopUpLandingComponent } from './shared/components/pop-up-landing/pop-up-landing.component';
import { SingleProductComponent } from './shared/components/single-product/single-product.component';
import { ProductsCarouselComponent } from './shared/components/products-carousel/products-carousel.component';
import { NewCollectionComponent } from './shared/components/new-collection/new-collection.component';
import { GiftCardsComponent } from './shared/components/gift-cards/gift-cards.component';
import { GiftCardComponent } from './shared/components/gift-card/gift-card.component';
import { SeeAlsoComponent } from './shared/components/see-also/see-also.component';
import { SeeAlsoSingleComponent } from './shared/components/see-also-single/see-also-single.component';
import { AdventagesComponent } from './shared/components/adventages/adventages.component';
import { IconAdventagesComponent } from './shared/components/icon-adventages/icon-adventages.component';
import { CapFirstPipe } from './shared/pipes/cap-first.pipe';
import { NewsComponent } from './shared/components/news/news.component';
import { NewsSingleComponent } from './shared/components/news-single/news-single.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FooterSingleSectionComponent } from './shared/components/footer-single-section/footer-single-section.component';
import { MadeByComponent } from './shared/components/made-by/made-by.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { NavBarMobileComponent } from './shared/components/nav-bar-mobile/nav-bar-mobile.component';
import { NavBarMobilePopUpComponent } from './shared/components/nav-bar-mobile-pop-up/nav-bar-mobile-pop-up.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductListComponent } from './shared/components/product-list/product-list.component';
import { SingleProductListComponent } from './shared/components/single-product-list/single-product-list.component';
import { RingsComponent } from './pages/rings/rings.component';
import { EaringsComponent } from './pages/earings/earings.component';
import { NecklacesComponent } from './pages/necklaces/necklaces.component';
import { WatchesComponent } from './pages/watches/watches.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { ProductDetailsComponent } from './shared/components/product-details/product-details.component';
import { SingleProductDetailsComponent } from './pages/single-product-details/single-product-details.component';
import { FilterProductsComponent } from './shared/components/filter-products/filter-products.component';
import { DynamicProductsHeaderComponent } from './shared/components/dynamic-products-header/dynamic-products-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LandingPageComponent,
    TopBarComponent,
    ContactComponent,
    LandingTitleComponent,
    PopUpLandingComponent,
    SingleProductComponent,
    ProductsCarouselComponent,
    NewCollectionComponent,
    GiftCardsComponent,
    GiftCardComponent,
    SeeAlsoComponent,
    SeeAlsoSingleComponent,
    AdventagesComponent,
    IconAdventagesComponent,
    CapFirstPipe,
    NewsComponent,
    NewsSingleComponent,
    NewsletterComponent,
    FooterComponent,
    FooterSingleSectionComponent,
    MadeByComponent,
    NavBarComponent,
    NavBarMobileComponent,
    NavBarMobilePopUpComponent,
    ProductsComponent,
    ProductListComponent,
    SingleProductListComponent,
    RingsComponent,
    EaringsComponent,
    NecklacesComponent,
    WatchesComponent,
    AccessoriesComponent,
    ProductDetailsComponent,
    SingleProductDetailsComponent,
    FilterProductsComponent,
    DynamicProductsHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
