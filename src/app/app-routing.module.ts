import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { recommendedForYouResolver } from './shared/resolvers/recommended-for-you.resolver';
import { dealsResolver } from './shared/resolvers/deals.resolver';
import { ProductsComponent } from './pages/products/products.component';
import { RingsComponent } from './pages/rings/rings.component';
import { EaringsComponent } from './pages/earings/earings.component';
import { NecklacesComponent } from './pages/necklaces/necklaces.component';
import { WatchesComponent } from './pages/watches/watches.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { SingleProductDetailsComponent } from './pages/single-product-details/single-product-details.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CustomerServiceComponent } from './pages/customer-service/customer-service.component';
import { RegulationsComponent } from './pages/regulations/regulations.component';
import { GiftComponent } from './pages/gift/gift.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    resolve: { recForYou: recommendedForYouResolver, deals: dealsResolver },
  },
  { path: 'produkty', component: ProductsComponent },
  { path: 'pierścionki', component: RingsComponent },
  { path: 'pierścionki/:id', component: SingleProductDetailsComponent },
  { path: 'kolczyki', component: EaringsComponent },
  { path: 'kolczyki/:id', component: SingleProductDetailsComponent },
  { path: 'naszyjniki', component: NecklacesComponent },
  { path: 'naszyjniki/:id', component: SingleProductDetailsComponent },
  { path: 'zegarki', component: WatchesComponent },
  { path: 'zegarki/:id', component: SingleProductDetailsComponent },
  { path: 'akcesoria', component: AccessoriesComponent },
  { path: 'akcesoria/:id', component: SingleProductDetailsComponent },
  { path: 'karty', component: GiftComponent },
  { path: 'karty/:id', component: SingleProductDetailsComponent },
  { path: 'nowości', component: NewsPageComponent },
  { path: 'nowości/yoshitsu', component: NewsPageComponent },
  { path: 'o-nas', component: AboutUsComponent },
  { path: 'obsługa-klienta', component: CustomerServiceComponent },
  { path: 'regulaminy', component: RegulationsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollOffset: [0, 170],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
