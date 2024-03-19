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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    resolve: { recForYou: recommendedForYouResolver, deals: dealsResolver },
  },
  { path: 'produkty', component: ProductsComponent },
  { path: 'pierścionki', component: RingsComponent },
  { path: 'kolczyki', component: EaringsComponent },
  { path: 'naszyjniki', component: NecklacesComponent },
  { path: 'zegarki', component: WatchesComponent },
  { path: 'akcesoria', component: AccessoriesComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
